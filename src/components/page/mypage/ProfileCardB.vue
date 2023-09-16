<template>
  <div profile-card-b>
    <div class="top-cont">
      <div class="top-btns">
        <h3>프로필 카드</h3>
        <RouterLink to="/mypage-main" class="back">닫기</RouterLink>
      </div>
    </div>
    <section class="profile-intro">
      <div class="wrap">
        <div class="profile cont-wrap" :class="{open:isOpen}">
          <div class="cont-top">
            <h4>프로필 소개</h4>
            <div class="thumb"><img :src="require(`@/assets/images/mypage/${thumbSrc}.png`)" alt=""></div>
            <div class="naming">
              <p class="nick">{{naming.nick}}</p>
              <p class="pos">{{naming.pos}}</p>
              <span class="mark"><img :src="require(`@/assets/images/mypage/${markSrc}.png`)" alt=""></span>
            </div>
            <p class="intro">{{intro}}</p>
          </div>
          <div class="info">
            <ul>
              <li v-for="(info, i) in infoList" :key="info" :class="i">
                <img :src="require(`@/assets/images/mypage/ico-${i}.png`)" alt="">
                <p>{{info}}</p>
              </li>
            </ul>
            <div class="skill">
              <img src="@/assets/images/mypage/ico-skill.png" alt="">
              <div class="skill-cont">
                <p class="specialty">주특기: {{skill.specialty}}</p>
                <p class="play-style">플레이 스타일: {{skill.playStyle}}</p>
              </div>
            </div>
          </div>
          <a class="toggle" @click="infoToggle">펼치기</a>
        </div>

        <div class="hobby cont-wrap">
          <div class="cont-top">
            <h4>내가 참여중인 조인</h4>
            <p class="sub-tit">{{hobbyList.length}}개의 조인에 참여중</p>
            <ul class="list">
              <li v-for="(hobby, i) in hobbyList" :key="i">
                <div class="thumb"><img :src="require(`@/assets/images/mypage/${hobby.img}.png`)" alt=""></div>
                <div class="cont">
                  <p class="tit">{{hobby.tit}}</p>
                  <p class="person">{{hobby.person}}명</p>
                  <p class="add">{{hobby.add}}</p>
                  <p class="tag">
                    <span v-for="(tag, i) in hobby.tags" :key="i">{{tag}}</span>
                  </p>
                </div>
                <RouterLink to="" class="hobby-link"/>
              </li>
            </ul>
          </div>
        </div>

        <div class="history cont-wrap">
          <div class="cont-top">
            <h4>나의 조인/용병 활동</h4>
            <ul>
              <li>용병 횟수 : {{history[0]}}건</li>
              <li>스카웃 활동 : {{history[1]}}건</li>
              <li>조인 스케줄 참여 : {{history[2]}}회</li>
            </ul>
          </div>
        </div>

        <div class="evaluation cont-wrap">
          <div class="cont-top">
            <h4>내가 받은 역대 평가</h4>
          </div>
          <swiper class="hex-swiper" ref="filterSwiper" :options="swiperOption" role="tablist" @slideChange="detectSlideChanged">
            <swiper-slide role="tab" v-for="(eva, i) in evaluation" :key="i" >
              <img :src="require(`@/assets/images/mypage/${eva.img}.png`)" alt="" class="hex">
              <ul class="data">
                <li>
                  <i><img :src="require(`@/assets/images/mypage/ico-${eva.img}.png`)" alt=""></i>
                  <p>{{eva.tit}} <b>{{eva.pt}}개</b></p>
                </li>
                <li>
                  <p>{{eva.tit2}} <b>{{eva.num}}회</b></p>
                </li>
              </ul>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-next swiper-btn">이전</div>
          <div class="swiper-button-prev swiper-btn">다음</div>
        </div>

        <div class="how cont-wrap">
          <div class="cont-top">
            <h4>나의 사커하우</h4>
            <ul>
              <li>
                <i><img src="~@/assets/images/mypage/ico-how1.png" alt=""></i>
                <p>누구나 답변: {{howAnswer[0]}}개</p>
              </li>
              <li>
                <i><img src="~@/assets/images/mypage/ico-how2.png" alt=""></i>
                <p>코치만 답변 : {{howAnswer[1]}}개</p>
              </li>
              <li>
                <i><img src="~@/assets/images/mypage/ico-how3.png" alt=""></i>
                <p>빠른 답변 : {{howAnswer[2]}}개</p>
              </li>
              <li>
                <i><img src="~@/assets/images/mypage/ico-how4.png" alt=""></i>
                <p>작성한 댓글 : {{howAnswer[3]}}개</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="mission cont-wrap">
          <div class="cont-top">
            <h4>나의 미션</h4>
            <h4>완료한 미션 <b>{{mission.length}}</b></h4>
            <ul>
              <li v-for="(miss, i) in mission" :key="i" >
                <i><img :src="require(`@/assets/images/mypage/ico-${miss}.png`)" alt=""></i>
              </li>
            </ul>
          </div>
        </div>

        <div class="interest cont-wrap">
          <div class="cont-top">
            <p class="tit">나의 관심 분야</p>
            <ul class="interest-list">
              <li v-for="(interest, i) in interestList" :key="i">{{interest}}</li>
            </ul>

            <p class="tit">사커하우 이용 목적</p>
            <ul class="purpose-list">
              <li v-for="(purpose, i) in purposeList" :key="i">{{purpose}}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="btt-text">
        <p>위 프로필은 모두 직접 설정한 내용이며,<br> 사실과 다르지 않습니다.</p>
        <RouterLink to="" >프로필 신고</RouterLink>
      </div>
    </section>


    <div class="communication-wrap">
      <a class="chat">1:1 채팅</a>
      <a class="offer">용병 제안</a>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: "ProfileCardB",
  components : {swiper, swiperSlide},
  data() {
    return {
      naming: {
        nick: '나도봐찌', pos:'WF'
      },
      badgeList: [
        {img:'c1', tit: '수업'},
        {img:'c2', tit: '포인트'},
        {img:'c3', tit: '미션'}
      ],
      alarmList: [
        {tit: '알람' },
        {tit: '채팅' }
      ],
      preferencesList: [
        {tit: '개인정보', link: ''},
        {tit: '프로필 수정', link: ''},
        {tit: '로그인/보안', link: ''},
        {tit: '결제수단 등록', link: ''},
        {tit: '알림 설정', link: ''}
      ],
      customerList: [
        {tit: '이벤트', link: ''},
        {tit: '공지사항', link: ''},
        {tit: '문의', link: ''},
        {tit: '신고 내역', link: ''},
      ],

      thumbSrc: 'thumb4',
      markSrc: 'feCheckVerified2',
      intro: '축구 직관 보는 거 좋아합니다 케이리그 좋아해요 :)',
      infoList: { age: '20대', height: '175cm', cm: 'CM', foot: '왼발', point: '1,230,230,200', add: '서울시 마포구' },
      skill: { specialty: '스탭오버, 킬패스', playStyle: '인버티드 윙어, 크랙' },
      isOpen: false,
      hobbyList: [
        {img:'thumb2', tit: '자동문 축구단', person: '13', add: '마포구 공덕동', },
        {img:'thumb3', tit: '리버풀 응원방', person: '67', add: '마포구 공덕동', tags: ['#유소년', '#팬클럽', '#친목']}
      ],
      history: [2, 1, 6],

      evaluation:[
        {img: 'eva1', tit: '매너', pt: 2, tit2: '매너 플레이어', num: 0},
        {img: 'eva2', tit: '팀워크', pt: 10, tit2: '커뮤니케이터', num: 4},
        {img: 'eva3', tit: '실력', pt: 7, tit2: '실력', num: 1}
      ],
      howAnswer: [2,1,5,16],
      mission: ['ms1', 'ms2', 'ms3', 'ms4', 'ms5', 'ms6', 'ms7'],
      interestList: ['국내축구', '축구 밈/유머'],
      purposeList: ['스터디', '축구 경기 관람'],


      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    }
  },

  methods: {
    infoToggle() {
      this.isOpen = !this.isOpen
    },

    detectSlideChanged() {
      console.log(this.$refs.filterSwiper.swiper.realIndex);
    },
  }
}
</script>

<style scoped>
  *{font-family:var(--global-font-family); color: #101014; }
  h2, h3, h4, p, ul { margin: 0; padding: 0; list-style: none; margin-block: 0; margin-inline: 0; }
  a { display: inline-block; text-decoration: none; color: #101014; }
  h2 { font-size: 24px; font-weight: 500; line-height: 35px; padding: 18px 20px 10px 20px; box-sizing: border-box; border-bottom:1px solid; border-color: #F5F5F5; }
  h3 { font-size: 20px; line-height: 29px; font-weight: 500; display: inline-block; }
  section .wrap { padding: 30px 20px; box-sizing: border-box; }

  .cont-wrap { padding:30px 20px; box-sizing: border-box; border-radius: 20px; background: rgba(255,255,255,1); box-shadow: 0 5px 10px 0 rgba(16, 16, 20, 0.2); margin-bottom: 30px; }
  .cont-wrap:last-child { margin-bottom: 0; }
  .cont-wrap .cont-top h4 { font-size: 16px; line-height: 23px; font-weight: 500; margin-bottom: 20px; text-align: left; }

  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; }
  .top-cont .top-btns { height: 66px; border-bottom: 1px solid; border-color: #F5F5F5; text-align: center; position: relative; }
  .top-cont .top-btns h3 { line-height: 66px; }
  .top-cont .top-btns .back { font-size:0; width: 45px; height:45px; position: absolute; right: 15px; top: 15px; background: url("~@/assets/images/mypage/ico-x.png")0 0 no-repeat; background-size: contain; }

  .profile-intro { margin-top: 64px; }
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

  .communication-wrap { position: fixed; left:0; bottom: 0; width: 100%; height:88px; text-align: center; padding-top: 9px; box-sizing: border-box;  background: #F9F9F9; z-index: 10; border-top: 1px solid; border-color: #F5F5F5; }
  .communication-wrap a { font-size:16px; line-height: 40px; color:#F9F9F9; font-weight: 500; width:160px; text-align: center; display: inline-block; vertical-align: middle; border-radius: 20px; margin: 0 5px; }
  .communication-wrap a.chat { background: #101014; }
  .communication-wrap a.offer { background: var(--color-main); }

  .profile-intro .btt-text { border-top: 1px solid; border-color: #D9D9D9; padding: 20px 0 140px 40px; box-sizing: border-box; }
  .profile-intro .btt-text p { font-size: 12px; line-height: 17px; font-weight: 500; margin-bottom: 20px; }
  .profile-intro .btt-text a { font-size: 14px; line-height: 20px; font-weight: 500; text-decoration: underline; }

</style>