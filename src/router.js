import VueRouter from 'vue-router';
import Test from '@/components/page/Test';
import SwiperExample from '@/components/page/SwiperExample';
import MyPageMain from '@/components/page/mypage/MyPageMain';
import ProfileCardA from "@/components/page/mypage/ProfileCardA";
import ProfileCardB from "@/components/page/mypage/ProfileCardB";
import Privacy from "@/components/page/mypage/Privacy";
import PhoneEdit from "@/components/page/mypage/PhoneEdit";
import ProfileEdit from "@/components/page/mypage/ProfileEdit";
import Alarm from "@/components/page/mypage/Alarm";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path : '/test', component : Test},
        {path : '/swiper_example', component : SwiperExample},
        {path : '/mypage_main', component : MyPageMain},
        {path : '/profile_card_a', component : ProfileCardA},
        {path : '/profile_card_b', component : ProfileCardB},
        {path : '/privacy', component : Privacy},
        {path : '/phone_edit', component : PhoneEdit},
        {path : '/profile_edit', component : ProfileEdit},
        {path : '/alarm', component : Alarm},
    ]
});

//페이지화면에서 로그인, 혹은 권한 체크시
router.beforeEach((to, from,next) => {

    next();
});


export default router;