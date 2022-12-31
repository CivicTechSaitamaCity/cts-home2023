<template>
  <swiper @swiper="onSwiper" @slideChange="onSlideChange" :options="swiperOptions">
    <swiper-slide v-for="item in items" :key="item.id">
      <img :src="item.img" alt="alt" />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    const items = [
      { img: '/images/event230115seniorIdeathon.jpg' },
      { img: '/images/project/project_shindan.jpg' },
      { img: '/images/project/project_table.jpg' },
      { img: '/images/project/project_kyouzai.jpg' },
    ]
    const swiperOptions = {
      speed: 2000,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      loop: true,
      loopAdditionalSlides: 1,
      watchSlidesProgress: true,
      nextButton: true,
      prevButton: true,
      effect: 'fade',
    }
    return {
      onSwiper,
      onSlideChange,
      items,
      swiperOptions,
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 400px;
  width: 100%;
  max-width: 100%;

  .swiper-slide {
    &:not(.swiper-slide-visible) {
      .slide {
        pointer-events: none;
        opacity: 0.3;
      }
    }

    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
  }
}
</style>
