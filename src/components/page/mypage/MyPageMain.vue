<template>
  <div mypage-main>
    <div class="top-cont">
      <h2>마이페이지</h2>
    </div>
    <section class="mypage-main">
      <div class="wrap">
        <div class="main-profile">
          <div class="thumb"><img src="~@/assets/images/mypage/thumb-xs.png" alt=""></div>
          <div class="nick-wrap">
            <p class="nick">{{naming.nick}}</p>
            <p class="pos">{{naming.pos}}</p>
            <span class="mark"><img src="@/assets/images/mypage/feCheckVerified0.png" alt=""></span>
            <RouterLink to="/profile_card_a" class="profile-intro-link">프로필 카드 보기 <img src="~@/assets/images/mypage/ico-profile-arrow.png" alt=""></RouterLink>
          </div>
        </div>
        <ul class="badge">
          <li v-for="(badge, i) in badgeList" :key="i">
            <img :src="require(`@/assets/images/mypage/ico-${badge.img}.png`)" alt="">
            <p>{{badge.tit}}</p>
          </li>
        </ul>

        <div class="p-list alarm-wrap">
          <h3 class="news">알림센터 <i></i></h3><!--새로운정보 있는 항목에 news 클래스 추가되면 주황색 표시 노출됨 -->
          <ul class="alarm-list">
            <li v-for="(alarm, i) in alarmList" :key="i">
              <RouterLink :to="alarm.link"><span class="news">{{alarm.tit}}</span></RouterLink>
            </li>
          </ul>
        </div>

        <div class="p-list preferences-wrap" >
          <h3>환경설정 <i></i></h3>
          <ul class="preferences">
            <li v-for="(preferences, i) in preferencesList" :key="i">
              <RouterLink :to="preferences.link"><span>{{preferences.tit}}</span></RouterLink>
            </li>
          </ul>
        </div>

        <div class="p-list customer-wrap" >
          <h3>고객센터 <i></i></h3>
          <ul class="customer">
            <li v-for="(customer, i) in customerList" :key="i">
              <RouterLink :to="customer.link"><span>{{customer.tit}}</span></RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MyPageMain",
  data() {
    return {
      naming: {
        nick: '감자튀김볶음밥', pos:'CF'
      },
      badgeList: [
        {img:'c1', tit: '수업'},
        {img:'c2', tit: '포인트'},
        {img:'c3', tit: '미션'}
      ],
      alarmList: [
        {tit: '알람'},
        {tit: '채팅'}
      ],
      preferencesList: [
        {tit: '개인정보', link: '/privacy'},
        {tit: '프로필 수정', link: '/profile_edit'},
        {tit: '로그인/보안', link: '/login'},
        {tit: '결제수단 등록', link: '/payment'},
        {tit: '알림 설정', link:'/alarm' }
      ],
      customerList: [
        {tit: '이벤트', link: '/event'},
        {tit: '공지사항', link: '/notification'},
        {tit: '피드백/문의', link: ''},
        {tit: '신고 내역', link: '/report'},
      ],

    }
  },

  methods: {
    infoToggle() {
      this.isOpen = !this.isOpen
    },

  }
}
</script>

<style scoped>
  *{font-family:var(--global-font-family); color: #101014;}
  h2, h3, h4, p, ul { margin: 0; padding: 0; list-style: none; margin-block: 0; margin-inline: 0; }
  a { display: inline-block; text-decoration: none; color: #101014; }
  h2 { font-size: 24px; font-weight: 500; line-height: 35px; padding: 18px 20px 10px 20px; box-sizing: border-box; border-bottom:1px solid; border-color: #F5F5F5; }
  h3 { font-size: 20px; line-height: 29px; font-weight: 500; display: inline-block; }
  section .wrap { padding: 30px 20px; box-sizing: border-box; margin-top: 15px; }
  .mypage-main { margin-top: 64px; }
  .mypage-main .main-profile .thumb, section .main-profile .nick-wrap { display: inline-block; vertical-align: bottom; }
  .mypage-main .main-profile .thumb { width: 72px; height:72px; border-radius: 50%; overflow: hidden; margin-right: 20px; }
  .mypage-main .main-profile .nick-wrap .nick { font-size: 20px; font-weight: 500; display: inline-block; margin-right: 5px; }
  .mypage-main .main-profile .nick-wrap .pos { font-size: 19px; font-weight: 900; color:#808080; display: inline-block; margin-right: 5px; }
  .mypage-main .main-profile .nick-wrap .mark { display: inline-block; vertical-align: bottom; }
  .mypage-main .main-profile .nick-wrap .profile-intro-link { font-size: 14px; line-height: 20px; font-weight: 500; display: block; color:#ADADAD; }
  .mypage-main .main-profile .nick-wrap .profile-intro-link img { pointer-events: none; }
  .mypage-main .badge { width: 190px; height: 84px; padding: 12px 0; box-sizing: border-box; margin-top: 46px; display: flex; flex-direction: row; justify-content: space-between; }
  .mypage-main .badge li { display: flex; flex-direction: column; justify-content: space-between; height: 60px; }
  .mypage-main .badge li p { font-size: 14px; line-height: 20px; color:#606060; }
  .mypage-main .alarm-wrap { margin-top: 36px; }
  .mypage-main .p-list h3 { padding-right: 5px; box-sizing: border-box; position: relative; }
  .mypage-main .p-list h3 i { display: inline-block; }
  .mypage-main .alarm-wrap h3 i { width:15px; height:18px; background: url("~@/assets/images/mypage/ico-bell.png") 0 0 no-repeat; }
  .mypage-main .preferences-wrap h3 i { width:17px; height:17px; background: url("~@/assets/images/mypage/ico-set.png") 0 0 no-repeat; }
  .mypage-main .p-list ul { margin-bottom: 33px; }
  .mypage-main .p-list ul li { font-size: 14px; line-height: 53px; border-bottom: 1px solid; border-color: #F5F5F5; }
  .mypage-main .p-list ul li a { display: inline-block; width: 100%; line-height: 53px; }
  .mypage-main .p-list ul li span { display: inline-block; position: relative; padding-right: 10px; box-sizing: border-box; }
  .mypage-main .p-list ul li:last-child { border-bottom: none; }
  .mypage-main .news:after { content:''; width: 5px; height:5px; background: var(--color-main); border-radius: 50%; position: absolute; right:0; top:4px; }

  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; }

  .cont-wrap { padding:30px 20px; box-sizing: border-box; border-radius: 20px; background: rgba(255,255,255,1); box-shadow: 0 5px 10px 0 rgba(16, 16, 20, 0.2); margin-bottom: 30px; }
  .cont-wrap:last-child { margin-bottom: 0; }
  .cont-wrap .cont-top h4 { font-size: 16px; line-height: 23px; font-weight: 500; margin-bottom: 20px; text-align: left; }
  .profile-intro .top-btns { height: 60px; display: flex; justify-content: space-between; border-bottom: 1px solid; border-color: #F5F5F5; padding-top: 7px; box-sizing: border-box;  }
  .profile-intro .top-btns a { font-size: 14px; line-height: 53px; font-weight: 500; }
  .profile-intro .top-btns a.back { font-size: 0; width:65px; height:53px; position: relative; }
  .profile-intro .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:12px; }
  .profile-intro .top-btns a.edit { text-decoration: underline; padding-right: 20px; box-sizing: border-box; }
  .profile-intro .wrap { padding: 30px 20px; box-sizing: border-box; background: rgba(251,251,251,0.9); }
  .profile-intro .profile { text-align: center; padding: 0 0 10px 0; box-sizing: border-box; }
  .profile-intro .profile .cont-top { padding: 30px 20px 20px 20px; box-sizing: border-box; }
  .profile-intro .profile .cont-top h4 { margin-bottom: 4px; }
  .profile-intro .profile .cont-top .thumb { width: 200px; height: 200px; border-radius: 50%; margin: 0 auto; overflow: hidden; box-shadow: 0 5px 10px 0 rgba(16, 16, 20, 0.2); position: relative; }
  .profile-intro .profile .cont-top .thumb img { width: 200px; height: 200px; position: absolute; left: 50%; top:50%; transform: translate(-50%,-50%); }
  .profile-intro .profile .cont-top .naming { margin-top: 20px; text-align: center; }
  .profile-intro .profile .cont-top .naming p,.profile-intro .profile .cont-top .naming span { display: inline-block; vertical-align: middle; margin: 0 3px; }
  .profile-intro .profile .cont-top .naming .nick { font-size: 16px; line-height: 23px; font-weight: 700; }
  .profile-intro .profile .cont-top .naming .pos { font-size: 15px; line-height: 23px; font-weight: 900; color:#808080; }
  .profile-intro .profile .cont-top .naming .mark { width:14px; height:14px; }
  .profile-intro .profile .cont-top .naming img { width:100%; }
  .profile-intro .profile .cont-top .intro { font-size: 14px; line-height: 21px; font-weight: 400; margin-top: 20px; text-align: left; }

  .profile-intro .profile .info { border-top: 1px solid; border-color:#F5F5F5; display: none; }
  .profile-intro .profile .info ul { max-width: 350px; padding: 20px 0; box-sizing: border-box; margin: 0 auto; height: 200px; display: flex; justify-content: space-around; flex-wrap: wrap; border-bottom: 1px solid; border-color: #F5F5F5; }
  .profile-intro .profile .info ul li { width: 30%; text-align: center; }
  .profile-intro .profile .info ul li img { width: auto; }
  .profile-intro .profile .info ul li p { font-size: 14px; line-height: 21px; font-weight: 500; margin-top: 9px; }
  .profile-intro .profile .info ul li p:nth-child(-n+4) {  margin-bottom: 5px; }
  .profile-intro .profile .info .skill { padding: 20px 10px 15px 35px; box-sizing: border-box; text-align: left; }
  .profile-intro .profile .info .skill img { width: auto; }
  .profile-intro .profile .info .skill img, .profile-intro .profile .info .skill .skill-cont { display: inline-block; vertical-align: middle; }
  .profile-intro .profile .info .skill .skill-cont { padding-left: 20px; box-sizing: border-box; }
  .profile-intro .profile .info .skill p { font-size: 14px; line-height: 21px; font-weight: 500; }
  .profile-intro .profile .info .skill p:nth-child(1) { margin-bottom: 5px; }
  .profile-intro .profile .toggle { font-size: 12px; line-height: 18px; font-weight: 500; color:#808080; display: inline-block; text-decoration:underline; }
  .profile-intro .profile.open .info { display: block; }
  .profile-intro .profile.open .toggle { font-size: 0;}
  .profile-intro .profile.open .toggle:after { content:'접어두기'; font-size: 12px; line-height: 18px; }

  .profile-intro .hobby .cont-top .sub-tit { font-size: 12px; line-height: 18px; font-weight: 500; }
  .profile-intro .hobby .cont-top .list li { padding: 20px 0; box-sizing: border-box; border-bottom: 1px solid; border-color: #F5F5F5; position: relative; }
  .profile-intro .hobby .cont-top .list li:after {content: ''; width: 12px; height: 22px; background: url("~@/assets/images/mypage/ico-arrow.png")0 0 no-repeat; background-size: contain; position: absolute; right:0; top:50%; transform: translateY(-50%); }
  .profile-intro .hobby .cont-top .list li:last-child { border-bottom: 0; padding: 0; margin-top: 20px; }
  .profile-intro .hobby .cont-top .list li .thumb { width: 75px; height:75px; margin-right: 12px; display: inline-block; vertical-align: middle; }
  .profile-intro .hobby .cont-top .list li .thumb img { width:100%; }
  .profile-intro .hobby .cont-top .list li .cont { display: inline-block; vertical-align: middle; }
  .profile-intro .hobby .cont-top .list li .cont p { font-size: 16px; line-height: 23px; font-weight: 500; display: inline-block; vertical-align: middle; }
  .profile-intro .hobby .cont-top .list li .cont p.person { font-weight: 400;position: relative; margin-left: 20px; }
  .profile-intro .hobby .cont-top .list li .cont p.person:after { content: ''; width: 2px; height:2px; background-color:#101014; position: absolute; left:-10px; top:50%; transform: translateY(-50%); border-radius: 50%; }
  .profile-intro .hobby .cont-top .list li .cont p.add, .profile-intro .hobby .cont-top .list li .cont p.tag { font-size: 14px; line-height: 20px; font-weight: 400; color:#808080; display: block; }
  .profile-intro .hobby .cont-top .list li .cont p.tag { font-size: 12px; margin-top: 10px; }
  .profile-intro .hobby .cont-top .list li .cont p.tag span { font-size: 12px; line-height: 18px; font-weight: 400; display: inline-block; vertical-align: middle; margin-right: 12px; color:#808080; }
  .profile-intro .hobby .cont-top .list li .hobby-link { position: absolute; left:0; top:0; width:100%; height:100%; }

  .profile-intro .history ul li { font-size: 14px; line-height: 21px; font-weight: 500; padding-left: 40px; box-sizing: border-box; position: relative; margin-bottom: 10px; }
  .profile-intro .history ul li:last-child { margin-bottom: 0; }
  .profile-intro .history ul li:after { content:''; width:14px; height:10px; background: url("~@/assets/images/mypage/ico-chk.png")0 0 no-repeat; background-size: contain; position: absolute; left:0; top:50%; transform: translateY(-50%); }

  .profile-intro .evaluation { position: relative; }
  .profile-intro .evaluation .cont-top h4 { margin-bottom: 0; }
  .profile-intro .evaluation .hex-swiper { padding-top: 89px; box-sizing: border-box; margin-top: -35px; position: relative; overflow: hidden; }
  .profile-intro .evaluation .hex-swiper .swiper-slide { text-align: center; }
  .profile-intro .evaluation .hex-swiper .swiper-slide .hex { max-width: 254px; margin-bottom: 19px; }
  .profile-intro .evaluation .hex-swiper .swiper-slide .data li { margin-bottom: 10px; }
  .profile-intro .evaluation .hex-swiper .swiper-slide .data li i { width: 14px; display: inline-block; vertical-align: middle; margin-right: 4px; }
  .profile-intro .evaluation .hex-swiper .swiper-slide .data li i img { width: 100%; }
  .profile-intro .evaluation .hex-swiper .swiper-slide .data li p { font-size: 14px; line-height: 21px; font-weight: 500; display: inline-block; vertical-align: middle; }
  .profile-intro .evaluation .hex-swiper .swiper-slide .data li p b { font-weight: 700; }
  .profile-intro .evaluation .hex-swiper .swiper-slide .data li:last-child { margin-bottom: 0; }
  .profile-intro .evaluation .hex-swiper .swiper-slide .data li:last-child p { color:#FF7111; display: block; }
  .profile-intro .evaluation .swiper-btn { font-size: 0; position: absolute; left:auto; right:20px; top:20px; width:45px; height:45px; opacity: 1; margin-top: 0; background: none; }
  .profile-intro .evaluation .swiper-btn:after { content:''; width: 100%; height:100%; display: inline-block; }
  .profile-intro .evaluation .swiper-btn.swiper-button-next:after { background:url("~@/assets/images/mypage/ico-swiper-next.png")0 0 no-repeat; background-size:contain; }
  .profile-intro .evaluation .swiper-btn.swiper-button-prev { right:65px; }
  .profile-intro .evaluation .swiper-btn.swiper-button-prev:after { background:url("~@/assets/images/mypage/ico-swiper-prev.png")0 0 no-repeat; background-size:contain; }

  .profile-intro .how .cont-top ul li { padding-left: 40px; box-sizing: border-box; position: relative; margin-bottom: 20px; }
  .profile-intro .how .cont-top ul li:last-child { margin-bottom: 0; }
  .profile-intro .how .cont-top ul li:nth-child(3) i { width:16px; height: 16px; }
  .profile-intro .how .cont-top ul li:nth-child(4) i { width:14px; height: 12px; }
  .profile-intro .how .cont-top ul li i { width:13px; height: 12px; position: absolute; left:0; top:0; padding-top: 4px; box-sizing: border-box; }
  .profile-intro .how .cont-top ul li i img { width:100%; }
  .profile-intro .how .cont-top ul li p { font-size: 14px; line-height: 21px; font-weight: 500; display: inline-block; vertical-align: middle; text-decoration: underline; }

  .profile-intro .mission { padding-right: 15px; }
  .profile-intro .mission .cont-top h4 ~ h4 { margin-top: 20px; }
  .profile-intro .mission .cont-top h4 ~ h4 b { color:#FF7111; }
  .profile-intro .mission .cont-top ul { display: flex; flex-wrap: wrap; }
  .profile-intro .mission .cont-top ul li { width:53px; height:53px; background:#F4F3F5; border-radius: 20px; position: relative; margin: 0 10px 10px 0; }
  .profile-intro .mission .cont-top ul li img { width:auto; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }

  .profile-intro .interest .cont-top .tit { font-size: 14px; line-height: 21px; margin-bottom: 20px; }
  .profile-intro .interest .cont-top ul { margin-bottom: 30px; }
  .profile-intro .interest .cont-top ul:last-child { margin-bottom: 0; }
  .profile-intro .interest .cont-top ul li {  font-size: 14px; line-height: 33px; font-weight: 500; padding:0 33px; box-sizing: border-box; border-radius: 22px; border: 1px solid; border-color:#FF7111; display: inline-block; vertical-align: middle; margin: 0 6px 6px 0; }

  .profile-intro .btt-text { border-top: 1px solid; border-color: #D9D9D9; padding: 20px 0 140px 40px; box-sizing: border-box; }
  .profile-intro .btt-text p { font-size: 12px; line-height: 17px; font-weight: 500; margin-bottom: 20px; }
  .profile-intro .btt-text a { font-size: 14px; line-height: 20px; font-weight: 500; text-decoration: underline; }

</style>