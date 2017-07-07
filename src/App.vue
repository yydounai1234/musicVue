<template>
  <div id="app">
    <h2>网易云音乐</h2>
    <MyHeader></MyHeader>
    <transition :name="transitionName">
        <router-view class="child"></router-view>
    </transition>
    <div >
        <div class="global" v-show="show">
            <MyAudio></MyAudio>
        </div>
    </div>
    <Lodding v-show="lodding"></Lodding>
  </div>
</template>
<script>
import MyHeader from "./components/header.vue"
import Lodding from "./components/lodding.vue"
import MyAudio from "./components/audio.vue"
export default {
  name: 'app',
  data(){
      return {
        transitionName: 'slide-left'
      }
  },
  computed:{
      show(){
          return this.$root.show
      },
      url(){
          return this.$root.url
      },
      lodding(){
        return this.$root.lodding
      }
  },
  watch: {
    '$route' (to, from) {
      if((to.query.id-from.query.id)>0){
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    },
  },
  components:{MyHeader,Lodding,MyAudio}
}
</script>
<style>
*{margin:0 auto;padding:0}
a{text-decoration: none}
li{list-style:none}
h2{text-align: center;line-height:0.5rem;height:0.5rem;width:100vw;position:fixed;z-index: 95}
audio{background:none}
.child{position: absolute;left: 0;top: 0;transition: all .5s}
.slide-left-enter, .slide-right-leave-active {opacity:1;transform: translate(100%, 0)}
.slide-left-leave-active, .slide-right-enter {opacity:0;transform: translate(-100%, 0)}
.global{position:fixed;bottom:0;background:white;height:0.5rem;width:100%;z-index:200}
#app{font-family:'Avenir',Helvetica,Arial,sans-serif;text-align:center;color:#2c3e50;font-size:0.14rem}
</style>
