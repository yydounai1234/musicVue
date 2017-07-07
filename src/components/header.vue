<template>
    <div class="header">
        <ul>
          <li @click="fn(`home?id=0`,0)">时下流行</li>
          <li @click="fn(`songlist?id=1`,1)">歌单</li>
          <li @click="fn(`hot?id=2`,2)">热行榜</li>
          <li @click="fn(`singer?id=3`,3)">热门歌手</li>
        </ul>
        <div class="ac" :style="{left:num*25+'vw'}"></div>
    </div>
</template>
<script>
export default {
  name: 'header',
  data(){
      return {
          num:0
      }
  },
  methods:{
      fn(value,num){
          this.$router.push(`/${value}`);
          this.num=num

      }
  }
}
</script>
<style>
  .header ul{height:0.5rem;padding-top:0.5rem}
  .header li{float:left;width:25vw;text-align: center;height:0.5rem;line-height:0.5rem}
  .header{position:fixed;background:white;z-index:90;width:100%}
  .header .ac{height:0.02rem;width:25vw;background:red;position:absolute;bottom: 0;transition: all 1s}
</style>
