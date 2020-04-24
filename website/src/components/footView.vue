<template>
  <div class="foot wrap">
    <div class="item">
      <div class="left_item">
        <div class="problem">
          <ul>
            <li class="li_title">解决方案</li>
            <li>产品展示</li>
            <li>战略愿景</li>
            <li>开发者门户</li>
            <li>黑客马拉松</li>
          </ul>
          <ul>
            <li class="li_title">通讯技术</li>
            <li>联系我们</li>
            <li>最新消息</li>
            <li>网络研讨会系列</li>
            <li>常问问题</li>
          </ul>
        </div>
      </div>
      <div class="right_item">
        <div>在此处注册Block.one的新更新：</div>
        <div class="register">
          <div>注册</div>
          <img src="../assets/return.png" alt="">
        </div>
      </div>
    </div>
    <div class="remind">
      <div>
        <span>重要的提醒</span>
        <span class="nav">|</span>
        <span>使用条款</span>
        <span class="nav">|</span>
        <span>隐私政策</span>
        <span class="nav">|</span>
        <span>Cookies政策</span>
        <span class="nav">|</span>
        <span>商标公告</span>
      </div>
      <div>版权所有©2019 gps.one。版权所有。</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.foot {
  color: #fff;
  padding: 110px 0 110px 0;
}
.left_item {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.problem {
  display: flex;
  flex-direction: row;
}
ul {
  flex: 1;
}
li {
  margin-bottom: 34px;
}
.right_item {
  width: 50%;
  font-size: 16px;
}
.wrap {
  width: 1200px;
  margin: auto;
}
.li_title,
.remind {
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item {
  display: flex;
  flex-direction: row;
}
.nav {
  padding: 0 20px;
}
.register {
  display: flex;
  flex-direction: row;
  width: 80px;
  margin-top: 20px;
  border: 1px solid #fff;
  border-image: linear-gradient(to top, rgba(249, 127, 255), rgba(40, 157, 255));
  border-image-slice: 10;
  padding: 6px  0 6px 20px;
  color: rgba(249, 127, 255, 0.98);
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
.register img{
  margin-left: 6px;
  height: 20px;
}
</style>