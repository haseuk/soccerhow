import VueRouter from 'vue-router';
import MyPageMain from '@/components/page/mypage/MyPageMain';
import ProfileCardA from "@/components/page/mypage/ProfileCardA";
import ProfileCardB from "@/components/page/mypage/ProfileCardB";
import Privacy from "@/components/page/mypage/Privacy";
import PhoneEdit from "@/components/page/mypage/PhoneEdit";
import ProfileEdit from "@/components/page/mypage/ProfileEdit";
import Alarm from "@/components/page/mypage/Alarm";
import Login from "@/components/page/mypage/Login";
import Account from "@/components/page/mypage/Account";
import Withdrawal from "@/components/page/mypage/Withdrawal";
import Event from "@/components/page/mypage/Event";
import Notification from "@/components/page/mypage/Notification";
import Report from "@/components/page/mypage/Report";
import Payment from "@/components/page/mypage/Payment";
import CardAdd from "@/components/page/mypage/CardAdd";
import Mercenary from "@/components/page/mercenary/Mercenary";
import MercenarySettings from "@/components/page/mercenary/MercenarySettings";
import MyMercenary from "@/components/page/mercenary/MyMercenary";
import MercenaryProposal from "@/components/page/mercenary/MercenaryProposal";
import MercenaryApply from "@/components/page/mercenary/MercenaryApply";
import MercenaryRecord from "@/components/page/mercenary/MercenaryRecord";
import ScheduleFind from "@/components/page/mercenary/ScheduleFind";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path : '/mypage_main', component : MyPageMain},
        {path : '/profile_card_a', component : ProfileCardA},
        {path : '/profile_card_b', component : ProfileCardB},
        {path : '/privacy', component : Privacy},
        {path : '/phone_edit', component : PhoneEdit},
        {path : '/profile_edit', component : ProfileEdit},
        {path : '/alarm', component : Alarm},
        {path : '/login', component : Login},
        {path : '/account', component : Account},
        {path : '/withdrawal', component : Withdrawal},
        {path : '/event', component : Event},
        {path : '/notification', component : Notification},
        {path : '/report', component : Report},
        {path : '/payment', component : Payment},
        {path : '/card_add', component : CardAdd},
        {path : '/mercenary', component : Mercenary},
        {path : '/mercenary_settings', component : MercenarySettings},
        {path : '/my_mercenary', component : MyMercenary},
        {path : '/mercenary_proposal', component : MercenaryProposal},
        {path : '/mercenary_apply', component : MercenaryApply},
        {path : '/mercenary_reocrd', component : MercenaryRecord},
        {path : '/schedule_find', component : ScheduleFind},
    ]
});

//페이지화면에서 로그인, 혹은 권한 체크시
router.beforeEach((to, from,next) => {

    next();
});


export default router;