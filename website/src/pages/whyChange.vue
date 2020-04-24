<template>
  <div class="whyChange">
    <div class="bagin">
      <div class="pog">为什么选择POG？</div>
      <div class="nav"></div>
      <div class="txt">
        POG
        是专为现实世界设计的区块链平台,POG专为公共和私人用例而构建，具有丰富的基于角色的安全权限，行业
        领先的速度和安全的应用程序处理能力，可进行自定义以满足各种行业
        的广泛业务需求。在POG上进行构建遵循现有的非区块链应用程序使用的熟悉的
        开发模式和编程语
        言，因此开发人员可以使用他们已经知道和喜欢的开发工
        具来创建无缝的用户体验。
      </div>
    </div>
    <div class="mid">
      <div class="mid_top">
        <div>POG的好处</div>
        <div>The benefits of POG</div>
      </div>
      <div class="mid_mid">
        <div class="features_item">
          <div>
            <img src="../assets/choice_1.png" alt />
            <div class="features_txt">可扩展且快速</div>
            <div class="features_detail">
              业界领先的速度，交易和
              吞吐量延迟
            </div>
          </div>
        </div>
        <div class="features_item">
          <div>
            <img src="../assets/choice_2.png" alt />
            <div class="features_txt">具有成本效益</div>
            <div class="features_detail">
              按资源灵活的成本模型，
              以零交易费用运营
            </div>
          </div>
        </div>
        <div class="features_item">
          <div>
            <img src="../assets/choice_3.png" alt />
            <div class="features_txt">环保的</div>
            <div class="features_detail">
              建立绩效的可持续和节能
              共识机制
            </div>
          </div>
        </div>
      </div>
      <div class="end">
        <div class="end_top">
          <div>产业领域</div>
          <div>Industrial field</div>
        </div>
        <div class="end_mid">
          <div class="end_txt">
            EOSIO专为满足您的业务需求而量身定制，适用于跨行业的
            各种用例，适用于区块链技术。
          </div>
          <ul>
            <li>
              <div class="end_pic">
                <img src="../assets/choice_4.png" alt />
              </div>
              <div class="end_content">市场</div>
              <div class="end_details">
                在市场产品中协调利
                益相关者以实现透明
                的价值转移
              </div>
            </li>
            <li>
              <div class="end_pic">
                <img src="../assets/choice_4.png" alt />
              </div>
              <div class="end_content">市场</div>
              <div class="end_details">
                为内容创建者贡献价
                值并奖励网络内的发
                现
              </div>
            </li>
            <li>
              <div class="end_pic">
                <img src="../assets/choice_5.png" alt />
              </div>
              <div class="end_content">社交媒体</div>
              <div class="end_details">
                简化现有银行系统中
                的跨境交易和结算
              </div>
            </li>
            <li>
              <div class="end_pic">
                <img src="../assets/choice_6.png" alt />
              </div>
              <div class="end_content">卫生保健</div>
              <div class="end_details">
                改善对健康数据的透
                明访问以及提供商之
                间的互操作性
              </div>
            </li>
            <li>
              <div class="end_pic">
                <img src="../assets/choice_7.png" alt />
              </div>
              <div class="end_content">政府</div>
              <div class="end_details">
                适应灵活的治理模型
                以适应现有流程
              </div>
            </li>
            <li>
              <div class="end_pic">
                <img src="../assets/choice_8.png" alt />
              </div>
              <div class="end_content">供应链</div>
              <div class="end_details">
                使现代供应链更加
                透明和可追溯
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="join">
      <div class="join_team">一套强大的工具</div>
      <div class="join_txt">准备开始在POG上构建？大量的开发人员资源和支持可帮助您立即开始使用POG</div>
      <div class="learn_color">开始使用</div>
    </div>
    <div class="problem">
      <div class="problem_top">
        <div>常见问题</div>
        <div>Common problem</div>
      </div>
      <div class="problem_item">
        <div class="problem_left">
          <img src="../assets/choice_10.png" alt />
        </div>
        <div class="problem_right">
          <div class="problem_r first">
            <div class="right_item">
              <div>谁是Block.one？</div>
              <div @click="isshow=!isshow" class="welfare_title">
                <img :class="{'expend': isshow}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isshow}]">
              <p>
                Block.one是高度可扩展，高性能，开源软件的生产者，它处于开发下一代互联网的最前沿。我
                们以建立一个更加安全和互联的世界为己任。
              </p>
            </div>
          </div>
          <div class="problem_r">
            <div class="right_item">
              <div>为什么要在EOSIO上构建？</div>
              <div @click="isshow1=!isshow1" class="welfare_title">
                <img :class="{'expend1': isshow1}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend1': isshow1}]">
              <p>
                Block.one是高度可扩展，高性能，开源软件的生产者，它处于开发下一代互联网的最前沿。我
                们以建立一个更加安全和互联的世界为己任。
              </p>
            </div>
          </div>
          <div class="problem_r">
            <div class="right_item">
              <div>什么是区块链？</div>
              <div @click="isshow2=!isshow2" class="welfare_title">
                <img :class="{'expend2': isshow2}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend2': isshow2}]">
              <p>
                Block.one是高度可扩展，高性能，开源软件的生产者，它处于开发下一代互联网的最前沿。我
                们以建立一个更加安全和互联的世界为己任。
              </p>
            </div>
          </div>
          <div class="problem_r">
            <div class="right_item">
              <div>人们为什么要重视区块链技术？</div>
              <div @click="isshow3=!isshow3" class="welfare_title">
                <img :class="{'expend3': isshow3}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend3': isshow3}]">
              <p>
                Block.one是高度可扩展，高性能，开源软件的生产者，它处于开发下一代互联网的最前沿。我
                们以建立一个更加安全和互联的世界为己任。
              </p>
            </div>
          </div>
          <div class="problem_r">
            <div class="right_item">
              <div>什么是“智能合约”？</div>
              <div @click="isshow4=!isshow4" class="welfare_title">
                <img :class="{'expend4': isshow4}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend4': isshow4}]">
              <p>
                Block.one是高度可扩展，高性能，开源软件的生产者，它处于开发下一代互联网的最前沿。我
                们以建立一个更加安全和互联的世界为己任。
              </p>
            </div>
          </div>
          <div class="check_color">
            <span>查看所有问题</span>
            <img src="../assets/return.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: false,
      isshow1: false,
      isshow2: false,
      isshow3: false,
      isshow4: false
    };
  }
};
</script>

<style scoped>
.bagin {
  height: 520px;
  background-image: url("../assets/choice_banner.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.pog {
  font-size: 40px;
}
.txt {
  width: 600px;
  font-size: 16px;
  line-height: 170%;
  margin-top: 40px;
  color: rgba(555, 555, 555, 0.5);
}
/* POG的好处 */
.problem_top,
.end_top,
.mid_top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 170px;
}
.problem_top div:first-child,
.end_top div:first-child,
.mid_top div:first-child {
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
.problem_top div:last-child,
.end_top div:last-child,
.mid_top div:last-child {
  font-size: 25px;
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(rgba(555, 555, 555)),
    to(rgba(0, 0, 0))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 10px;
}
.mid_mid {
  margin-top: 70px;
  margin-bottom: 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.features_item {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.features_item img {
  display: block;
  width: 32px;
}
.features_txt {
  margin: 10px 0;
  font-size: 18px;
}
.features_detail {
  font-size: 12px;
  color: rgba(555, 555, 555, 0.5);
}
/* 产业领域 */
.end_mid {
  text-align: center;
}
.end_txt {
  width: 360px;
  margin: 30px auto;
  font-size: 14px;
  letter-spacing: 2px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.8);
}
.end_mid ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
}
.end_mid ul li {
  width: 15%;
}
.end_pic img {
  width: 60px;
}
.end_content {
  margin: 10px 0;
}
.end_details {
  margin: 0 auto;
  width: 100px;
  color: rgba(255, 255, 255, 0.5);
}
/* 加入我们 */
.join {
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
  width: 450px;
  font-size: 12px;
  margin: 30px;
}
.learn_color {
  padding: 10px;
  margin-top: 20px;
  width: 50px;
  color: 12px;
  border: 1px solid #fff;
  border-image: linear-gradient(
    to left,
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
/* 问题 */
.right_item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.right_item div:first-child {
  font-size: 16px;
}
.problem_item {
  display: flex;
}
.problem_left,
.problem_right {
  width: 50%;
  margin-top: 60px;
}
.problem_left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.problem_left img {
  width: 240px;
}
.problem_right img {
  width: 20px;
}
.problem_r {
  margin-top: 30px;
}
p {
  font-size: 12px;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.5);
}
.welfare_body {
  margin-top: 10px;
  visibility: hidden;
}
.body_expend {
  visibility: visible;
  animation: myfirst 2s;
}
.body_expend1 {
  visibility: visible;
  animation: myfirst 2s;
}
.body_expend2 {
  visibility: visible;
  animation: myfirst 2s;
}
.body_expend3 {
  visibility: visible;
  animation: myfirst 2s;
}
.body_expend4 {
  visibility: visible;
  animation: myfirst 2s;
}
@keyframes myfirst {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.expend {
  transition: all 0.3s;
  transform: rotate(90deg);
}
.expend1 {
  transition: all 0.3s;
  transform: rotate(90deg);
}
.expend2 {
  transition: all 0.3s;
  transform: rotate(90deg);
}
.expend3 {
  transition: all 0.3s;
  transform: rotate(90deg);
}
.expend4 {
  transition: all 0.3s;
  transform: rotate(90deg);
}
.check_color {
  padding: 10px;
  margin-top: 20px;
  width: 110px;
  color: 12px;
  font-size: 14px;
  border: 1px solid #fff;
  border-image: linear-gradient(
    to left,
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
</style>