<template>
  <div>
    <div class="scal_item">
      <div class="scal_txt">
        <div class="scal_title">诺多斯</div>
        <div class="scal_ps">POG区块链网络的核心模块</div>
        <div class="scal_nav"></div>
        <div class="scal_details">
          <p>
            Nodeos是一个核心的POGIO节点守护程序，它使用插件配置为在POGIO网络中运行一个节点。作为POGIO网络的
            构建块，nodPOG为区块链功能奠定了基础。
          </p>
          <p>
            该存储库包含设置和运行基于POGIO的区块链所需的基本知识。节点可以连接到现有的区块链网络并同步现有的历
            史记录，也可以用于创建具有自定义参数的新区块链。
          </p>
        </div>
        <div class="pogDetails">
          <div class="github">
            <img src="../assets/structure_github.png" alt />
            <span>Github</span>
          </div>
          <div class="github">
            <img src="../assets/structure_relevant.png" alt />
            <span>相关文献</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="mid_top add">相关产品</div>
      <div class="tab">
        <div class="tab_item">
          <div>pog光盘</div>
          <div>
            智能合约开发工具和实用程
            序
          </div>
          <div class="end_color">查看详情</div>
        </div>
        <div class="tab_item">
          <div>Ricardian模板工具包</div>
          <div>易读的智能合约协议模板</div>
          <div class="end_color">查看详情</div>
        </div>
        <div class="tab_item">
          <div>pog虚拟机</div>
          <div>
            高性能区块链WebAssembly
            解释器
          </div>
          <div class="end_color">查看详情</div>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="mid_top add">相关新闻</div>
      <div class="msg_mid">
        <div class="msg_item">
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
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.scal_item {
  margin-top: 150px;
}
.scalability {
  margin-top: 70px;
}
.scal_title {
  font-size: 24px;
  margin: 30px 0;
}
.scal_ps {
  font-size: 12px;
  margin: 30px 0;
}
.scal_nav {
  width: 40px;
  height: 4px;
  background-color: #fff;
  margin: 30px 0;
}
.scal_details {
  font-size: 12px;
  margin: 30px 0;
  letter-spacing: 1px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
}
.scal_txt {
  width: 600px;
}
p {
  margin: 30px 0;
}
/* github */
.github {
  display: inline;
  margin-right: 60px;
  line-height: 30px;
}
.github img {
  margin-right: 10px;
  height: 30px;
}
/* 相关 */
.mid_top {
  margin-top: 120px;
  margin-bottom: 110px;
  font-size: 32px;
  color: rgba(176, 214, 251, 1);
}
.tab {
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
}
.tab_item {
  width: 30%;
}
.tab_item div:nth-child(2) {
  margin: 15px auto;
  width: 160px;
  color: rgba(555, 555, 555, 0.5);
}
.end_color {
  padding: 10px;
  margin: 20px auto 0;
  width: 50px;
  color: 12px;
  border: 1px solid #fff;
  border-image: linear-gradient(
    to top,
    rgba(249, 127, 255),
    rgba(40, 157, 255)
  );
  border-image-slice: 10;
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(rgba(249, 127, 255)),
    to(rgba(40, 157, 255))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
/* 相关新闻 */
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