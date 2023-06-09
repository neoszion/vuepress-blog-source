# 搜推架构介绍
这里以电商搜推为样例进行的设计，也不是很完善。希望大家多提提意见，加以修正。

## 整体架构
<a data-fancybox title="搜推简易框架" href="/images/search-simple-framework.jpg">![搜推简易框架](/images/search-simple-framework.jpg)</a>

* <b>客户端:</b> 主要是指用户请求的入口，包含APP、网页版或者其他系统的请求。
* <b>在线层：</b>这里主要是指搜索推荐的在线系统，一般是Java系统。业务复杂后，需要对系统进行拆分，可以根据业务进行分拆，比如搜索系统、推荐系统和引导词系统。搜索系统也可以进一步的分拆，比如店铺搜索、商品搜索等。也可以对一些逻辑进行抽象，比如下面会提到的图执行框架。
* <b>引擎层：</b>搜推引擎。根据业务的不同也会有不同的引擎，整体逻辑一致，只是加载的业务数据和业务逻辑会不一样。
* <b>DUMP：</b>负责对业务数据进行运算，运算后的数据提供给引擎消费。
* <b>原始数据：</b>这里包含的是原始业务数据。比如商家中心产出的店铺数据和商品数据。
* <b>模型：</b> 提供精排打分服务。这里包含对外服务、模型加载和模型训练等。数据一般包含用户特征和埋点数据等。

## 在线层视角
<a data-fancybox title="在线层框架" href="/images/search-online-framework.jpg">![在线层框架](/images/search-online-framework.jpg)</a>

基于引擎为众多个性化业务（搜索、推荐、广告等）提供在线服务能力。搜推业务被抽象成一张有向无环图，以此让业务开发同学不需要关心并发问题和执行流程，更专注的开发业务逻辑。我会实现一个简单的图执行框架，有兴趣的同学可以参考阿里的TPP，我后续也会对阿里的TPP做深入的解析。
* <b>prepare: </b> 准备数据。比如对用户请求里的部分数据进行转换后用于请求引擎。
* <b>searcher: </b> 请求引擎。一般包含三个方法，请求构建、下发请求和结果解析。
* <b>filter: </b> 过滤。由用户指定过滤规则或者运营提供的过滤规则。
* <b>scorer: </b> 打分排序。包含静态打分和动态打分。静态打分是指利用引擎返回的字段和一些静态规则算出分数，动态打分是指请求模型服务在线打分，会利用用户特征。 这里也可以多拆分出一个 ranker，用于排序。
* <b>compose: </b> 数据补全。引擎一般返回的都是静态数据，但是像实时优惠信息等一般不会进入引擎（优惠数据一般波动都很大，数据扩散也很大，容易导致实时链路堵塞。），所以根据引擎返回的10到20个数据去请求优惠信息。
* <b>resultbuild: </b> 结果构建。构建符合业务需求的数据。

## 引擎视角
单机引擎主要包含几个大的模块
* 查询/排序模块
* 索引管理
* 基础依赖模块

如果是分布式引擎，那么还需要对引擎进行分层
* proxy 层
* worker 层
引擎为了和业务隔离，一般会在拆分出一层 search plan。业务和算法同学在这一层处理业务逻辑，引擎提供基础能力。
当然这一层不是必须的，也可以把这些逻辑放到引擎中做，只是这样引擎会由于业务的定制化而变成了一个定制化的引擎。
另外，还需要一个配套的调度系统，用于管理引擎。比如索引构建调度、索引更新、模型加载和引擎配置等。

## dump 视角