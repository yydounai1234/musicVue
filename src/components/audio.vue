<template>
    <div class="song">
        <div class="songlist">
          <img :src="songimg">
          <div>
            <p style="padding-top:0.02rem">{{songer}}</p>
            <p>{{song}}</p>
          </div>
        </div>
        <audio :src="url" id="audio" autoplay></audio>
      <img :src="control" @click="fn">
      <img src="../assets/images/playbar_btn_next.png" @click="next">
      <img src="../assets/images/playbar_btn_playlist.png">
    </div>
</template>
<script>
  export default  {
    name:"audio",
    data(){
        return {
            control:require('../assets/images/playbar_btn_pause.png'),
        }
    },
    methods:{
      next(){
          var value=this.$root.arr;
          value=value[this.$root.curretSong+1];
        this.$root.a=value.ar[0].name;
        this.$root.b=value.al.picUrl;
        this.$root.c=value.name;
        this.$root.curretSong=this.$root.curretSong+1;
        this.axios.get("http://musicapi.duapp.com/api.php?type=url&id="+value.id).then((resolve) =>{
          this.$root.url=resolve.data.data[0].url;
        });
      },
        fn(){
          var audio = document.querySelector('#audio');
          if(this.control===require('../assets/images/playbar_btn_pause.png')){
                audio.pause();
                this.control=require('../assets/images/playbar_btn_play.png')
            }else{
                audio.play();
                this.control=require('../assets/images/playbar_btn_pause.png')
            }
        }
    },
    computed:{
      url(){
        return this.$root.url
      },
      songer(){
          return this.$root.a
      },
      song(){
        return this.$root.c
      },
      songimg(){
        return this.$root.b
      },
    },

  }
</script>

<style scoped>
    .song{height:0.5rem;}
    .songlist{float:left}
    img{height:100%;float:right;width:0.4rem}
    .songlist img{float:left;height:0.5rem;width:0.5rem}
    .songlist div{float:left;text-align: left;margin-left:0.15rem;line-height:0.25rem;font-size:0.12rem}
</style>
