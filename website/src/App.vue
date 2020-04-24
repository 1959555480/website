<template>
  <div id="app">
    <div class="canvas-warapper">
      <canvas id="canvas"></canvas>
    </div>
    <HeadView></HeadView>
    <router-view class="wrap"/>
    <FootView></FootView>
  </div>
</template>

<script>
import HeadView from './components/headView'
import FootView from './components/footView'

import { bootstrapmb } from "./js/bootstrapmb.com";

export default {
  name: 'App',
  components:{
    HeadView,
    FootView
  },
  created() {
    this.$nextTick(() => {
      bootstrapmb(window)();
    });
  }
}
</script>

<style>
.canvas-warapper {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: -10;
}
.bagin_txt {
  position: relative;
  height: 610px;
}
[class^="letter"] {
  -webkit-transition: opacity 3s ease;
  -moz-transition: opacity 3s ease;
  transition: opacity 3s ease;
}

.letter-0 {
  transition-delay: 0.2s;
}

.letter-1 {
  transition-delay: 0.4s;
}

.letter-2 {
  transition-delay: 0.6s;
}

.letter-3 {
  transition-delay: 0.8s;
}

.letter-4 {
  transition-delay: 1s;
}

.letter-5 {
  transition-delay: 1.2s;
}

.letter-6 {
  transition-delay: 1.4s;
}

.letter-7 {
  transition-delay: 1.6s;
}

.letter-8 {
  transition-delay: 1.8s;
}

.letter-9 {
  transition-delay: 2s;
}

.letter-10 {
  transition-delay: 2.2s;
}

.letter-11 {
  transition-delay: 2.4s;
}

.letter-12 {
  transition-delay: 2.6s;
}

.letter-13 {
  transition-delay: 2.8s;
}

.letter-14 {
  transition-delay: 3s;
}
#canvas {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#stats {
  position: absolute;
  z-index: 10;
  left: 10px;
  top: 10px;
}

.dg.ac {
  z-index: 100 !important;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
  font-size: 12px;
  color: #fff;
}
*{
  margin:0;
  padding:0;
}
ul{list-style:none}
a{text-decoration: none;} 
img{vertical-align:top;border:none}
 
.clearf:after,
.clearf:before{
    content:"";
    display:block;
    clear:both;
}
#app{
  width: 100%;
  height: 100%;
  /* background-image: url('./assets/bg.png'); */
  background-size: 110% 100%;
  background-position: 5% 0%;
  background-repeat: repeat-y;
  z-index: 0;
}
.wrap{
  width: 1200px;
  margin: 0 auto;
}
</style>
