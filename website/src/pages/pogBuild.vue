<template>
  <div class="whyChange">
    <div class="bagin">
      <div class="bagin_txt">
        <div class="pog">POG 的新功能</div>
        <div class="bagin_item">
          <div class="item">
            <div class="item_title">更安全</div>
            <div class="item_txt">现在支持W3C Web标准身份验证协议</div>
          </div>
          <div class="item">
            <div class="item_title">更快点</div>
            <div class="item_txt">为区块链性能而构建的新WASM引擎</div>
          </div>
          <div class="item">
            <div class="item_title">更简单</div>
            <div class="item_txt">
              在几分钟之内即可通过任何浏览器在
              POG上开始构建
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="mid_top" style="margin-top:0">
        <div class="txt_one">POG核心</div>
        <div class="txt_two">POG Core为您提供了与POG协议进行交互和建立基础的基本构建块。</div>
        <div class="tab">
          <div class="tab_item" @click="toPog">
            <div>诺多斯</div>
            <div>POG区块链网络的核心模块</div>
            <div class="end_color">查看详情</div>
          </div>
          <div class="tab_item">
            <div>克莱奥斯</div>
            <div>
              命令行客户端与POG区块链
              进行交互
            </div>
            <div class="end_color">查看详情</div>
          </div>
          <div class="tab_item">
            <div>参考智能合约</div>
            <div>
              参考智能合约以了解POG的
              常见用例
            </div>
            <div class="end_color">查看详情</div>
          </div>
        </div>
      </div>
      <div class="mid_top">
        <div class="txt_one">POG工具</div>
        <div class="txt_two">POG工具是可帮助您优化基于POG协议构建应用程序的经验的库。</div>
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
        <div class="tab">
          <div class="tab_item">
            <div>pogJS</div>
            <div>
              一个与POG区块链进行交互
              的JavaScript库
            </div>
            <div class="end_color">查看详情</div>
          </div>
          <div class="tab_item">
            <div>历史工具</div>
            <div>可扩展访问POG区块链历史</div>
            <div class="end_color">查看详情</div>
          </div>
          <div class="tab_item">
            <div>通用身份验证器库（UAL）</div>
            <div>
              支持多种身份验证器集成的
              单一实现
            </div>
            <div class="end_color">查看详情</div>
          </div>
        </div>
        <div class="tab">
          <div class="tab_item">
            <div>适用于Swift的pog SDK</div>
            <div>
              iOS应用程序与POG区块链交
              互的一种简单而安全的方式
            </div>
            <div class="end_color">查看详情</div>
          </div>
          <div class="tab_item">
            <div>适用于Java的EOSIO SDK</div>
            <div>
              Android应用程序与POG区块链交
              互的一种简单而安全的方式
            </div>
            <div class="end_color">查看详情</div>
          </div>
          <div class="tab_item">
            <div>解复用器</div>
            <div>
              Demux是确定性扩展数据访
              问的框架
            </div>
            <div class="end_color">查看详情</div>
          </div>
        </div>
        <div class="tab">
          <div class="tab_item">
            <div>pog快速入门Web IDE</div>
            <div>数分钟内即可开始使用POG</div>
            <div class="end_color">查看详情</div>
          </div>
          <div class="tab_item">
            <div>网络认证</div>
            <div>
              支持W3C Web身份验证协议
              WebAuthn
            </div>
            <div class="end_color">查看详情</div>
          </div>
          <div class="tab_item">
            <div>适用于Java的EOSIO SDK</div>
            <div>
              Android应用程序与POG区块链交
              互的一种简单而安全的方式
            </div>
            <div class="end_color">查看详情</div>
          </div>
        </div>
      </div>
      <div class="mid_top">
        <div class="txt_one">POG Labs™</div>
        <div class="txt_two limit">
          POGLabs是一项开放式创新计划，旨在通过POG共同推动区块链行业的发展。这些存储库是实验性的
          和开源的。我们鼓励您将它们用作将代码和概念合并到应用程序中的基础。
        </div>
        <div class="tab">
          <div class="tab_item">
            <div>WebAuthn示例应用</div>
            <div>
              用于POG YubiKey支持的We
              bAuthn示例Web应用程序
            </div>
            <div class="end_color">查看详情</div>
          </div>
          <div class="tab_item">
            <div>EOSIO资源管理器</div>
            <div>
              基于Web的GUI与POG应用程
              序进行交互
            </div>
            <div class="end_color">查看详情</div>
          </div>
          <div class="tab_item">
            <div>断言清单安全模型</div>
            <div>
              用于在应用程序中签署交易
              的分层安全模型
            </div>
            <div class="end_color">查看详情</div>
          </div>
        </div>
        <div class="tab">
          <div class="tab_item">
            <div>Chrome参考身份验证器</div>
            <div>
              在Web应用程序中签署POG
              交易
            </div>
            <div class="end_color">查看详情</div>
          </div>
          <div class="tab_item">
            <div>iOS参考身份验证器</div>
            <div>
              在iOS应用程序中签署POG交
              易
            </div>
            <div class="end_color">查看详情</div>
          </div>
          <div class="tab_item">
            <div>pog规格资料库</div>
            <div>
              高层次的设计细节，并设有
              一个论坛供公众反馈
            </div>
            <div class="end_color">查看详情</div>
          </div>
        </div>
      </div>
      <div class="join">
        <div class="join_team">POG和YubiKey</div>
        <div class="join_txt">
          POG 2将为POG带来Web身份验证（WebAuthn）API支持，从而使YubiKeys在所有基于POG的区块链上的
          应用程序中安全，无缝地签署交易。这使您可以使用POG进行身份验证，只需触摸设备即可签署交易。由于
          Chrome，Firefox，Edge和Safari支持WebAuthn，因此不再需要浏览器插件或外部身份验证程序即可使用基
          于POG的区块链应用程序。
        </div>
      </div>
      <div class="mid_top">
        <div class="txt_one">资源资源</div>
        <div class="txt_two limit">有关帮助您增强POG体验的其他材料和资源，请参阅以下内容：</div>
        <div class="tab">
          <div class="end_color">战略愿景</div>
          <div class="end_color">堆栈交换</div>
          <div class="end_color">GITHUB</div>
          <div class="end_color">电报</div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toPog() {
      this.$router.push({
        name: "pogDetails"
      });
    }
  }
};
</script>

<style scoped>
/* 头部 */
.bagin {
  height: 610px;
  background-image: url("../assets/structure_banner.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: -111;
}
.pog {
  font-size: 40px;
  margin-top: 120px;
}
.item {
  width: 15%;
}
.bagin_item {
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.item_title {
  font-size: 16px;
  font-weight: bold;
  color: rgba(176, 214, 251, 1);
}
.item_txt {
  margin-top: 40px;
  color: rgba(555, 555, 555, 0.5);
}
/* mid */
.mid_top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 170px;
}
.mid_top .txt_one {
  font-size: 50px;
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(rgba(555, 555, 555)),
    to(rgba(0, 0, 0))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.mid_top .txt_two {
  font-size: 16px;
  margin-top: 30px;
  color: rgba(555, 555, 555, 0.7);
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
/*  */
.limit {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.join {
  margin-top: 160px;
  height: 350px;
  background-image: url("../assets/about_banner.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.join_team {
  font-size: 24px;
}
.join_txt {
  width: 620px;
  font-size: 12px;
  color: rgba(555, 555, 555, 0.5);
  margin: 30px;
}
</style>