import VueRouter from 'vue-router';
import Test from '@/components/page/Test';
import SwiperExample from '@/components/page/SwiperExample';
import MyPageMain from '@/components/page/mypage/MyPageMain';
import ProfileCard from "@/components/page/mypage/ProfileCard";
import Privacy from "@/components/page/mypage/Privacy";
import PhoneEdit from "@/components/page/mypage/PhoneEdit";
import ProfileEdit from "@/components/page/mypage/ProfileEdit";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path : '/test', component : Test},
        {path : '/swiper_example', component : SwiperExample},
        {path : '/mypage_main', component : MyPageMain},
        {path : '/profile_card', component : ProfileCard},
        {path : '/privacy', component : Privacy},
        {path : '/phone_edit', component : PhoneEdit},
        {path : '/profile_edit', component : ProfileEdit},
    ]
});

//페이지화면에서 로그인, 혹은 권한 체크시
router.beforeEach((to, from,next) => {

    next();
});


export default router;