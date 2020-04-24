<template>
  <div class="about">
    <div class="bagin">
      <div class="pog">POG</div>
      <!-- <div class="nav"></div> -->
      <div class="txt">
        POG是具有行业领先的交易速度和灵活实用性的下一代开源区块链协议。自2017年5月推出
        以来，它已被广泛认可为全球企业的首个高性能区块链平台。
      </div>
    </div>
    <div class="content">
      <div class="item">
        <div class="item_left">
          <div class="item_title">block.one</div>
          <div class="item_txt">
            Block.one是高性能区块链软件的全球领导者。2018年6月，该公司发布了POG区
            块链协议，此后继续为公司和开发人员开发和优化开源软件，以构建企业级区块链
            解决方案。
          </div>
          <div class="learn_color">学到更多</div>
        </div>
        <div class="item_right">
          <img src="../assets/about_1.png" alt />
        </div>
      </div>
      <div class="item">
        <div class="item_right">
          <img src="../assets/about_2.png" alt />
        </div>
        <div class="item_left">
          <div class="item_title right">POG VC</div>
          <div class="item_txt">
            POG VC是Block.one的一个业务部门，致力于通过风险投资合作伙伴关系来部署资
            金，这些合作伙伴关系投资了POG生态系统中区块链技术的未来发展。POG VC合
            作伙伴基金已经召集了最有知识和能力的顾问来指导并为全球投资组合公司提供战
            略指导。
          </div>
          <div class="about2">
            <div class="learn_color2">学到更多</div>
          </div>
        </div>
      </div>
    </div>
    <div class="join">
      <div class="join_team">加入我们的团队</div>
      <div class="join_txt">
        Block.one由遍布全球各地的全球人才团队组成。我们一直在寻找对技术的未来充满热情
        的杰出人才，因此请查看我们的空缺职位并取得联系。
      </div>
      <div class="learn_color">学到更多</div>
    </div>
    <div class="contact">
      <div class="contact_index">
        <div class="contact_top">联系我们</div>
        <div class="contact_top">Contact us</div>
      </div>
      <div class="contact_side">
        <div class="contact_item back">
          <div class="contact_pic">
            <img src="../assets/about_yes.png" alt />
          </div>
          <div class="contact_txt">一般查询</div>
          <div>support@block.one</div>
        </div>
        <div class="contact_item">
          <div class="contact_pic">
            <img src="../assets/about_4.png" alt />
          </div>
          <div class="contact_txt">开发者支持</div>
          <div>developers@block.one</div>
        </div>
        <div class="contact_item">
          <div class="contact_pic">
            <img src="../assets/about_5.png" alt />
          </div>
          <div class="contact_txt">企业</div>
          <div>support@block.one</div>
        </div>
        <div class="contact_item">
          <div class="contact_pic">
            <img src="../assets/about_6.png" alt />
          </div>
          <div class="contact_txt">媒体与媒体</div>
          <div>media@block.one</div>
        </div>
        <div class="contact_item">
          <div class="contact_pic">
            <img src="../assets/about_7.png" alt />
          </div>
          <div class="contact_txt">聚会和活动</div>
          <div>events@block.one</div>
        </div>
        <div class="contact_item">
          <div class="contact_pic">
            <img src="../assets/about_8yes.png" alt />
          </div>
          <div class="contact_txt">gps  vc</div>
          <div>vc@block.one</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bagin {
  height: 520px;
  background-image: url("../assets/about_banner_img.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.pog {
  font-size: 70px;
  /* letter-spacing: 10px; */
}
.pog::after {
  content: "";
  margin: 0 auto;
  display: block;
  width: 40px;
  height: 2px;
  border-bottom: 2px solid #fff;
}
/* .nav {
  width: 30px;
  height: 2px;
  background-color: #fff;
  margin: 26px 0;
} */
.txt {
  width: 540px;
  letter-spacing: 2px;
  line-height: 20px;
  margin-top: 26px;
  font-size: 16px;
  color: rgba(555, 555, 555, 0.8);
}
/* block one */
.item {
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item_left {
  width: 540px;
}
.item_right {
  width: 17%;
  margin-right: 200px;
}
.item_right img {
  display: block;
  width: 100%;
}
.item_txt {
  margin: 30px 0;
  line-height: 20px;
  color: rgba(555, 555, 555, 0.5);
  letter-spacing: 1px;
}
.item_title {
  font-size: 40px;
}
.learn_color {
  padding: 10px;
  margin-top: 20px;
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
.right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.learn_color2 {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 10px;
  width: 50px;
  color: 12px;
  color: #fff;
  background: linear-gradient(90deg, rgba(40, 157, 255), rgba(249, 127, 255));
}
.about2 {
  position: relative;
  margin-top: 60px;
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
  color: rgba(555, 555, 555, 0.5);
  margin: 30px;
}
/* 联系我们 */
.contact {
  margin-top: 70px;
}
.contact_top {
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
.contact_index {
  text-align: center;
}
.contact_side {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.contact_item {
  margin-right: 80px;
  margin-top: 20px;
  width: 110px;
  padding: 30px 60px;
  border: 1px solid rgba(40, 157, 255, 0.98);
  display: flex;
  flex-direction: column;
  text-align: center;
}
.contact_pic {
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact_pic img {
  display: block;
  width: 50px;
}
.contact_txt {
  margin: 30px 0;
}
.back {
  background: linear-gradient(
    180deg,
    rgba(249, 127, 255),
    rgba(40, 157, 255, 0.98)
  );
}
</style>