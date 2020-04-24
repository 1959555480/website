<template>
  <div class="details">
    <div class="details_top">
      <div class="title">POG快速入门Web IDE：在几分钟内开始在POG上构建</div>
      <div class="author">
        <span>作者：POG工具</span>
        <span>时间：2019-10-19</span>
      </div>
      <div class="pic">
        <img src="../assets/img_1.png" alt />
      </div>
      <div class="content">
        <p>
          入门新技术总是带来挑战。设置开发环境通常需要满足新的语言，学习的开发模式以及硬件前提条件。尤其是区块
          链开发具有某些资源要求，运行一个完整的节点，重播链或测试智能合约必须满足这些资源要求。这些问题为有兴
          趣探索区块链技术的新开发人员带来了障碍。随着POGIO的增长，我们正在努力创建新的工具和库，这些工具和库
          使EOSIO的开发更快，更轻松，并且对世界各地的开发人员更容易访问。
        </p>
        <p>
          为此，我们工程工作的重要目标是使任何人都可以使用POGIO软件快速部署其区块链项目。该POGIO快速入门的We
          b IDE降低进入新的发展障碍，使他们能够在几分钟内，份额上手，并在POGIO项目合作。
        </p>
        <p>
          当前，基于POGIO的构建需要一个多步骤的设置过程，以及一台功能强大的计算机来运行完整的区块链节点。对于
          刚刚入门的人，此过程从安装和配置POGIO开始。之后，必须安装和配置POGJS才能开发Web应用程序。建立清晰
          的工作流程通常很困难，因为这些过程需要许多步骤，其中包括许多组件。还有计算能力的问题。要运行一个完整
          的节点，需要一台至少具有16GB内存的计算机，尽管建议使用32GB或更多的内存，大量磁盘空间和一个快速CPU。
        </p>
      </div>
    </div>
    <div class="mid">
      <div class="mid_top add">相关新闻 </div>
      <div class="msg_mid">
        <div class="msg_item" @click="toDetails">
          <div class="msg_pic">
            <img src="../assets/home_banner.png" alt />
          </div>
          <div class="msg_txt">POG快速入门Web IDE：在几分钟内开始在POG上构建</div>
          <div class="msg_ps">
            <div>POG工具</div>
            <div>2019-10-19</div>
          </div>
        </div>
        <div class="msg_item">
          <div class="msg_pic">
            <img src="../assets/home_banner.png" alt />
          </div>
          <div class="msg_txt">
            POG简介：提高性能，提高安全性
            和新的开发人员工具
          </div>
          <div class="msg_ps">
            <div>POG工具</div>
            <div>2019-10-19</div>
          </div>
        </div>
        <div class="msg_item">
          <div class="msg_pic">
            <img src="../assets/home_banner.png" alt />
          </div>
          <div class="msg_txt">
            用于公共区块链使用的POG资源分
            配日趋成熟
          </div>
          <div class="msg_ps">
            <div>POG工具</div>
            <div>2019-10-19</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 新闻 */
.details_top {
  margin-top: 200px;
}
.title {
  text-align: center;
  font-size: 40px;
}
.pic {
  width: 100%;
}
.author {
  margin: 40px 0;
}
.author span:last-child {
  margin-left: 50px;
}
.pic img {
  display: block;
  width: 100%;
}
.content {
  margin-top: 40px;
}
p {
  font-size: 16px;
  margin: 40px 0;
  line-height: 30px;
}
/* 相关 */
.mid_top {
  margin-top: 120px;
  margin-bottom: 110px;
  font-size: 32px;
  color: rgba(176, 214, 251, 1);
}
.msg_mid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.msg_item {
  width: 26%;
  margin-top: 50px;
}
.msg_pic img {
  display: block;
  width: 100%;
}
.msg_txt {
  margin: 15px 0;
  font-size: 16px;
}
.msg_ps {
  color: rgba(555, 555, 555, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>