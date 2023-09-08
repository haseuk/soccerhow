<template>
    <div>
        <swiper ref="filterSwiper" :options="swiperOption" role="tablist" @slideChange="detectSlideChanged">
            <swiper-slide role="tab" v-for="each, i in list" :key="i" >
                <div style="height:100px; " :style="{backgroundColor : i % 2 === 0 ? 'blue' : 'red'}">스와이퍼테스트 {{i}}</div>
            </swiper-slide>
            <div class="swiper-pagination paging_text" slot="pagination" style="width:100%; font-size:12px; display:inline-block;"></div>
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.min.css'

    export default {
        name: "SwiperExample",
        components : {swiper, swiperSlide},
        data(){
            return {
                list : [
                    1,2,3,4,5,6
                ],
                swiperOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 6, // swiper-slide 사이의 간격 지정
                    slidesOffsetBefore: 0, // slidesOffsetBefore는 첫번째 슬라이드의 시작점에 대한 변경할 때 사용
                    slidesOffsetAfter: 0, // slidesOffsetAfter는 마지막 슬라이드 시작점 + 마지막 슬라이드 너비에 해당하는 위치의 변경이 필요할 때 사용
                    freeMode: false, // freeMode를 사용시 스크롤하는 느낌으로 구현 가능
                    centerInsufficientSlides: true, // 컨텐츠의 수량에 따라 중앙정렬 여부를 결정함
                    loop : false,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets'
                    },
                    autoplay : {
                        delay : 5000
                    },
                    curIndex : 0,
                },
            }
        },
        methods : {
            detectSlideChanged() {
                console.log(this.$refs.filterSwiper.swiper.realIndex);
            },
        }
    }
</script>

<style scoped>

</style>