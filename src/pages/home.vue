<template>

  <div class="swiper">
    <Swiper koko="koko" autoplay=1000>
      <div class="swiper-slide" slot="swiped" ><img src="../assets/images/banner1.jpg" ></div>
      <div class="swiper-slide" slot="swiped" ><img src="../assets/images/banner2.jpg"></div>
      <div class="swiper-slide" slot="swiped" ><img src="../assets/images/banner3.jpg"></div>
      <div class="swiper-slide" slot="swiped" ><img src="../assets/images/banner4.jpg"></div>
      <div class="swiper-pagination" slot="pg"></div>
    </Swiper>
    <div class="songList">推荐歌单</div>
    <div id="songList">
        <div v-for="(item,index) in arr" @click="fn(item.id)">
              <span>{{item.playCount|fn}}</span>
              <img v-lazy="item.coverImgUrl">
              <p>{{item.description}}</p>
        </div>
    </div>
    <div class="pause"></div>
    <div style="clear:both;height:0.5rem"></div>
  </div>
</template>

<script>
  import Swiper from "../components/swiper.vue";
  export default {
    name: 'home',
    data(){
        return {
          arr:[],
          num:9,
          add:true
        }
    },
    methods:{
        fn(num){
            this.$router.push("/item?num="+num)
        },
        checkCache(){
            if(!sessionStorage.list){
                return false
            }else{
                return true
            }
        }
    },
    components:{Swiper},
    mounted(){
      var that= this;
      var server = "http://musicapi.duapp.com/api.php";
      window.onscroll=function () {
        if(that.add&&document.documentElement.scrollTop+document.documentElement.clientHeight>=document.documentElement.scrollHeight){
          that.add=false;
          that.axios.get(server+"?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit="+that.num).then((resolve) =>{
            var list=JSON.stringify(resolve.data.playlists);
            sessionStorage.list=list;
            that.arr=resolve.data.playlists;
            that.num+=9;
            that.add=true;
          });
        }
      };
      if(sessionStorage.list){
            this.arr=JSON.parse(sessionStorage.list);
      }else{
            this.axios.get(server+"?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit="+that.num).then((resolve) =>{
              var list=JSON.stringify(resolve.data.playlists);
              sessionStorage.list=list;
              that.arr=resolve.data.playlists;
              that.num+=9
            });
      }
    }
  }
</script>
<style>

  .swiper-slide img{width:100%}
  .swiper{padding-top:1rem;width:100vw}
  .songList{position:relative;padding-left:10%;height:0.4rem;line-height:0.4rem}
  .songList:after{content:"";background:url("../assets/images/aei.png");width:0.25rem;height:0.25rem;position:absolute;background-size: cover;left:2%;top:20%}
  #songList{display:flex;padding:0 1.5%;flex-wrap: wrap;position:relative}
  #songList span{position:absolute;width:29%;background:rgba(0,0,0,0.1);padding:0.05rem 0.1rem;text-align:right;color:white;box-sizing: border-box}
  #songList p{position:relative;font-size:0.12rem;line-height:0.2rem;height:0.4rem;overflow:hidden;margin-bottom: 0.2rem;text-overflow:ellipsis; }
  #songList p::after {
    content:"...";
    font-weight:bold;
    position:absolute;
    bottom:0.02rem;
    right:-0.16rem;
    padding:0 20px 1px 2px;
    background-color:white;
    background-image:url(http://css88.b0.upaiyun.com/css88/2014/09/ellipsis_bg.png);
  }
  #songList div{width:30%;flex-grow:1;margin:0 1.5%}
  #songList img{width:100%}
  .pause{background:url("../assets/images/timg2.gif") 0.5rem 0.4rem;width:2rem;height:0.4rem;background-size:cover;}
</style>
