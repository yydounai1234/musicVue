<template>
      <div>
        <h3> <span @click="back" class="back"><</span>歌单</h3>
            <ul>
              <li v-for="(item,index) in arr" @click="fn(item,index)">
                    <span>{{index+1}}</span>
                    <p>{{item.name}}</p>
                    <p>{{item.ar[0].name}}</p>
              </li>
            </ul>
      </div>
</template>
<script>
  export default  {
      name:"item",
      data(){
          return {
              arr:[]
          }
      },
      methods:{
          fn(value,index){
            this.$root.show=true;
            this.$root.a=value.ar[0].name;
            this.$root.b=value.al.picUrl;
            this.$root.c=value.name;
            this.$root.curretSong=index;
            this.axios.get("http://musicapi.duapp.com/api.php?type=url&id="+value.id).then((resolve) =>{
              this.$root.url=resolve.data.data[0].url;
            });
          },
          back(){
              this.$router.push("/home")
          }
      },
      mounted(){
        var that=this;
        this.axios.get("https://api.imjad.cn/cloudmusic?type=playlist&id="+that.$route.query.num).then((resolve) =>{
          that.arr=resolve.data.playlist.tracks;
          this.$root.arr=resolve.data.playlist.tracks;
        });
      }
  }
</script>

<style scoped>
    h3{padding:0.2rem 0;position:relative}
    div{position:absolute;top:0;left:0;background:white;z-index: 100;width:100vw}
    ul{padding-top:1rem}
    li{padding:0.1rem 0 0.1rem 0.4rem;text-align: left;border-bottom: 0.01rem solid #eee;position:relative}
    li span{position:absolute;left:3%;top:17%}
    li p:nth-of-type(2){margin-top:0.07rem}
    .back{position:absolute;left:0;top:-5%;font-size:0.3rem;color:red;padding:0.2rem}
</style>
