<template>
  <div class="header wrap">
    <div class="pic">
      <img src="../assets/system.png" alt @click="toIndex" />
    </div>
    <div class="item about" @click="toAbout" :class="[toindex==0 ? 'active':'']">关于我们</div>
    <div class="item" @click="toChange" :class="[toindex==1 ? 'active':'']">为什么选择POG</div>
    <div class="item" @click="toFuture" :class="[toindex==2 ? 'active':'']">战略愿景</div>
    <div class="item" @click="toPogBuild" :class="[toindex==3 ? 'active':'']">在POG上构建</div>
    <div class="item" @click="toNews" :class="[toindex==4 ? 'active':'']">新闻</div>
    <div class="pic">
      <img src="../assets/search.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toindex: -1
    };
  },
  methods: {
    toIndex() {
      this.toindex = -1;
      this.$router.push({
        name: "index"
      });
    },
    toAbout() {
      this.toindex = 0;
      this.$router.push({
        name: "about"
      });
    },
    toChange() {
      this.toindex = 1;
      this.$router.push({
        name: "whyChange"
      });
    },
    toFuture() {
      this.toindex = 2;
      this.$router.push({
        name: "future"
      });
    },
    toPogBuild() {
      this.toindex = 3;
      this.$router.push({
        name: "pogBuild"
      });
    },
    toNews() {
      this.toindex = 4;
      this.$router.push({
        name: "news"
      });
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  color: #fff;
  height: 75px;
  line-height: 75px;
}
.wrap {
  width: 1200px;
  margin: -2px auto 0;
}
.about {
  margin-left: 275px;
}
.pic {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  margin-right: 70px;
}
.active {
  color: #4c8beb;
}
.active::after {
  content: "";
  margin: 0 auto;
  display: block;
  width: 20px;
  height: 2px;
  border-bottom: 2px solid #4c8beb;
}
</style>