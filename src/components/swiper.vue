<template>
    <div class="swiper-container" :class="koko">
      <div class="swiper-wrapper">
        <slot name="swiped"></slot>
      </div>
      <slot name="pg"></slot>
    </div>
</template>
<script>
  import "../assets/libs/libs/js/swiper.js";
  export default  {
    name: 'Swiper',
    props:{
        koko:{
          default:""
        },
        pagination:{
          default:true
        },
        paginationShow:{
          default:"center"
        },
        effect:{
          default:"slide"
        },
        loop:{
          default:true
        },
        autoplay:{
        },
        direction:{
          default:"horizontal"
        },
        autoplayDisableOnInteraction:{
          default:false
        },
        lazyLoading:{
            default:false
        }

    },
    mounted(){
        var that=this;
        var bb=new Swiper("."+that.koko, {
          loop:that.loop,
          autoplay:that.autoplay,
          pagination:".swiper-pagination",
          direction:"horizontal",
          autoplayDisableOnInteraction:that.autoplayDisableOnInteraction,
          lazyLoading:that.lazyLoading,
        })
    }
  }
</script>

<style>
  @import "../assets/libs/libs/css/swiper.css";
</style>
