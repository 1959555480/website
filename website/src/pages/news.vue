<template>
  <div class="whyChange">
    <div class="bagin">
      <input type="text" placeholder="请输入关键词" />
      <img src="../assets/search_l.png" alt />
      <div class="end_color">搜索</div>
    </div>
    <div class="mid">
      <div class="mid_top">今日推荐</div>
      <div class="mid_content">
        <div class="mid_left">
          <div class="title">POG快速入门Web IDE：在几分钟内开始在POG上构建</div>
          <div class="txt opac">
            入门新技术总是带来挑战。设置开发环境通常需要
            满足新的语言，学习的开发模式以及硬件前提条件
            。尤其是区块链开发具有某些资源要求，必须运行
            一个完整节点，重播一条链或…
          </div>
          <div class="time">
            <div>POG工具</div>
            <div class="opac">2019-10-19</div>
          </div>
        </div>
        <div class="mid_right">
          <img src="../assets/img_1.png" alt />
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="mid_top add">
        全部新闻
        <div class="time_sort">
          时间顺序
          <img src="../assets/topbot.png" alt />
        </div>
      </div>
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
        <div class="msg_item">
          <div class="msg_pic">
            <img src="../assets/home_banner.png" alt />
          </div>
          <div class="msg_txt">Lamington Eosio智能合约开发</div>
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
            POG历史记录工具：扩展对区块链
            历史记录数据的访问
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
            POG历史记录工具：扩展对区块链
            历史记录数据的访问
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
          <div class="msg_txt">Lamington Eosio智能合约开发</div>
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
            POG历史记录工具：扩展对区块链
            历史记录数据的访问
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
            POG历史记录工具：扩展对区块链
            历史记录数据的访问
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
  data(){
    return{

    }
  },
  methods:{
    toDetails(){
      this.$router.push({
        name: 'newDetails'
      });
    }
  }
};
</script>

<style scoped>
.bagin {
  width: 60%;
  margin: 60px auto 0;
  position: relative;
}
.bagin img {
  position: absolute;
  right: 0;
  width: 38px;
  top: -10px;
}
input {
  width: 100%;
  height: 30px;
  display: block;
  margin: 0 auto;
  background-image: url("../assets/search.png");
  background-position: 100% 100%;
  background: none;
  outline: none;
  border: none;
  color: #fff;
  border-bottom: 1px solid rgba(555, 555, 555, 0.85);
}
.end_color {
  margin: 40px auto;
  padding: 10px;
  width: 100px;
  color: 12px;
  text-align: center;
  font-size: 16px;
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
/* 今日推荐 */
.mid_top {
  margin-top: 120px;
  margin-bottom: 110px;
  font-size: 32px;
  color: rgba(176, 214, 251, 1);
}
.mid_content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.mid_right,
.mid_left {
  width: 50%;
}
.title,
.time,
.txt {
  width: 65%;
}
.title {
  font-size: 18px;
  margin-top: 60px;
}
.txt {
  margin: 40px 0;
  line-height: 30 px;
  font-size: 16px;
}
.opac {
  color: rgba(555, 555, 555, 0.6);
}
.time {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.mid_right img {
  width: 100%;
  display: block;
}
.add {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
/* 全部新闻 */
.time_sort {
  font-size: 12px;
  color: #fff;
}
.time_sort img {
  width: 17px;
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
.msg_mid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>