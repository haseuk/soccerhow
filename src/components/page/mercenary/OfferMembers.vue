<template>
  <div offer-members :class="{dimOpen:isDim}">

    <div class="dim"></div>

    <div class="top-cont">
      <div class="top-btns">
        <RouterLink to="/my_mercenary" class="back" >뒤로가기 </RouterLink>
        <h2>용병 제안</h2>
        <a class="btn alarm"></a>
      </div>
    </div>

    <section :class="{'selected':selected}">
      <div class="profile-wrap">
        <p class="tit">용병 프로필</p>
        <a class="btn change">변경</a>
        <div class="profile-inner">
          <div class="profile">
            <div class="info-wrap">
              <div class="thumb-wrap">
                <div class="thumb">
                  <img src="~@/assets/images/mercenary/noodles.png" alt="">
                </div>
                <p class="name"><b>{{info[0].name}}</b> {{info[0].pos}}</p>
                <a class="btn profile-view">프로필 보기</a>
              </div>
              <div class="info">
                <p class="height">{{info[0].height}}cm</p>
                <p class="foot">{{info[0].foot}}</p>
                <p class="pos">{{info[0].posKr}}</p>
                <p class="addr">{{info[0].addr}}</p>
                <p class="exp">{{info[0].exp}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="inner">
        <div class="schedule-info">
          <p class="tit">스케줄 정보</p>
          <p class="sub-tit" v-if="!selected">함께 할 스케줄을 선택해주세요</p>

          <div class="activating" :class="{on:trigger}" v-if="!selected">
            <ul>
              <li><span class="w1"></span></li>
              <li><span class="w2"></span></li>
              <li><span class="w3"></span></li>
              <li><span class="w4"></span></li>
            </ul>

            <a class="btn select" @click="scheduleOpen">스케줄 선택</a>
          </div>
        </div>
        <ul v-if="selected">
          <li>
            <div class="cont">
              <img src="~@/assets/images/mercenary/ico-calendar.svg" alt="">
              <div class="c-txt">
                <p>마포초 주말 경기</p>
                <span>마포초에서 주말마다 열리는 친선경기입니다 (풀 코트로 진행해요)</span>
              </div>
            </div>
          </li>
          <li>
            <div class="cont">
              <img src="~@/assets/images/mercenary/ico-schedule.svg" alt="">
              <div class="c-txt">
                <p>2023년 7월 8일 (토) 09:00 ~ 11:00</p>
                <span>예상 소요 시간 120분</span>
              </div>
            </div>
          </li>
          <li>
            <div class="cont">
              <img src="~@/assets/images/mercenary/ico-loacation.svg" alt="">
              <div class="c-txt">
                <p>마포초등학교축구장</p>
                <span>서울특별시 마포구 도화2길 64</span>
              </div>
            </div>
          </li>
          <li>
            <div class="cont">
              <img src="~@/assets/images/mercenary/ico-court.svg" alt="">
              <div class="c-txt">
                <p>풀 코트 11 vs 11</p>
                <span>스케줄 참여 환경에 따라 인원 변동이 있을 수 있어요</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="msg">
        <p class="tit">전달 메시지</p>
        <textarea placeholder="용병에게 초대될 스케줄에 대해서 간략하게 설명해주시고, 요청 사항이 있으시다면 요청사항도 함께 적어주세요." v-model="textarea"></textarea>
      </div>
    </section>

    <div class="bottom-btns" :class="{on:offerBtnOn}">
      <div class="btns">
        <a class="btn" @click="active = 'offer-pop'">용병 제안하기</a>
      </div>
    </div>



    <!--스케줄 선택-->
    <section class="edit-page" :class="{open:isScheduleList}">
      <div class="top-btns type2">
        <h3>스케줄 선택</h3>
        <a class="close" @click="close">닫기</a>
      </div>

      <div class="schedule-list">
        <p class="tit">스케줄 리스트</p>
        <ul>
          <li v-for="(item,i) in scheduleList" :key="i">
            <label>
              <input type="checkbox">
              <i></i>
            </label>
            <div class="list-cont">
              <span class="status">{{item.status}}</span>
              <p class="tit">{{item.tit}}</p>
              <p class="date"><img src="@/assets/images/mercenary/ico-filter-schedule.svg" alt=""> {{item.date}}</p>
              <p class="person">참여 인원 : {{item.person}}/4명</p>
              <p class="place">장소 : {{item.place}}</p>
              <p class="join-tag">조인 태그 : <span>{{item.join}}</span></p>
            </div>
          </li>
        </ul>
      </div>

      <div class="btns">
        <a class="btn" @click="selectSchedule">선택하기</a>
      </div>
    </section>


    <div class="pop" v-if="active === 'offer-pop'">
      <div class="dim"></div>
      <div class="inner">
        <p class="tit">용병 제안</p>
        <p class="txt">우리의 스케줄이 더 좋아지는 순간!<br> {{info[0].name}}님에게 용병을 제안할까요?</p>
        <div class="btns">
          <a class="offer" @click="active = ''">제안하기</a>
          <a class="cancel" @click="active = ''">취소하기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfferMembers",
  data() {
    return {
      info: [
        { name:'짜파게띠', pos:'WF', height: 178, foot: '양발', posKr: '레프트 윙 포워드', addr: '서울시 마포구', exp: '76,500,000' },
      ],
      trigger: false,
      isDim: false,
      isScheduleList: false,
      active: '',
      selected: false,
      scheduleList: [
        {status: '모집하고 있어요1', tit: '마포초등학교 어셈블 하는 날', date: '2023년 7월 8일 (토) 09:00 ~ 11:00', estimated:'예상 소요 시간 120분', place: '마포초등학교축구장', join: '스터디', category: 'study'},
        {status: '모집하고 있어요2', tit: '마포초등학교 어셈블 하는 날', date: '2023년 7월 8일 (토) 09:00 ~ 11:00', estimated:'예상 소요 시간 120분', place: '마포초등학교축구장', join: '그룹', category: 'group'},
        {status: '모집하고 있어요3', tit: '마포초등학교 어셈블 하는 날', date: '2023년 7월 8일 (토) 09:00 ~ 11:00', estimated:'예상 소요 시간 120분', place: '마포초등학교축구장', join: '경기', category: 'game'},
        {status: '모집하고 있어요4', tit: '마포초등학교 어셈블 하는 날', date: '2023년 7월 8일 (토) 09:00 ~ 11:00', estimated:'예상 소요 시간 120분', place: '마포초등학교축구장', join: '경기관람', category: 'preview'},
        {status: '모집하고 있어요5', tit: '마포초등학교 어셈블 하는 날', date: '2023년 7월 8일 (토) 09:00 ~ 11:00', estimated:'예상 소요 시간 120분', place: '마포초등학교축구장', join: '기타', category: 'etc'}
      ],
      textarea: '',
      msgPush: false,
      offerBtnOn: false,
    }
  },
  mounted() {
    setTimeout(()=> {
      this.trigger = true;
    }, 500);
  },
  methods: {
    scheduleOpen() {
      this.isScheduleList = true;
      this.isDim = true;
    },
    selectSchedule() {
      this.isScheduleList = false;
      this.isDim = false;
      this.selected = true;
    },
    close() {
      this.isScheduleList = false;
      this.isDim = false;
    },
    offerBtnActive() {
      if(this.selected === true && this.msgPush === true) {
        this.offerBtnOn = true;
      }
    }
  },
  watch: {
    selected() {
      this.offerBtnActive();
    },
    textarea(val) {
      if(val.length >= 0) {
        this.msgPush = true;
        this.offerBtnActive();
      }
    }
  }
}
</script>

<style scoped>
  *{font-family:var(--global-font-family); color: #101014;}
  h2, h3, h4, p, ul { margin: 0; padding: 0; list-style: none; margin-block: 0; margin-inline: 0; }
  a { display: inline-block; text-decoration: none; color: #101014; }
  h2 { font-size: 24px; font-weight: 500; line-height: 35px; padding: 18px 20px 10px 20px; box-sizing: border-box; }
  h3 { font-size: 20px; line-height: 29px; font-weight: 500; display: inline-block; }

  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; border-bottom: 1px solid #F5F5F5; }
  section {position: relative; margin-top:60px; padding-bottom: 140px; box-sizing: border-box; }

  .top-btns { height: 60px; padding-top: 7px; box-sizing: border-box; text-align: center; display: flex; justify-content: space-between; }
  .top-btns h2 { padding: 0; display: inline-block; border-bottom: none; line-height: 53px; }
  .top-btns a { font-size: 0; width:65px; height:53px; position: relative; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }
  .top-btns a.alarm:after { content: ''; width:17px; height:20px; background: url("~@/assets/images/mercenary/ico-bell.svg")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); display: none; }

  .profile-wrap, .schedule-info, .msg { position: relative; padding: 30px 20px 20px; box-sizing: border-box; border-bottom: 1px solid #F5F5F5; }
  .profile-wrap .tit, .schedule-info .tit, .msg .tit { font-size: 16px; line-height: 23px; font-weight: 500; margin-bottom: 20px; }
  .profile-wrap .change { font-size:14px; font-weight: 500; color:#BBBBBB; position: absolute; right:20px; top:30px; }
  .profile-wrap .profile-inner { width: 100%; height: 180px;  border-radius: 15px; overflow:hidden; margin-top: 20px; border: 1px solid #D9D9D9; }
  .profile-wrap .profile { background: #fff; margin: 1px; padding:10px 0 10px 20px; box-sizing: border-box; }
  .profile-wrap .info-wrap { display: flex; }
  .profile-wrap .thumb-wrap { text-align: center; padding: 6px 20px 6px 0; box-sizing: border-box; border-right: 1px solid #F5F5F5; }
  .profile-wrap .thumb-wrap .thumb { width: 90px; height: 90px; border-radius: 50%; overflow: hidden; }
  .profile-wrap .thumb-wrap .thumb img { object-fit: cover; object-position: 50% 50%; }
  .profile-wrap .thumb-wrap .name { font-size: 11px; line-height: 17px; color:#808080; font-weight: 900; margin-top: 10px; }
  .profile-wrap .thumb-wrap .name b { font-size: 12px; color:#101014; font-weight: 700; }
  .profile-wrap .thumb-wrap .btn { font-size: 12px; line-height: 17px; text-decoration: underline; margin-top: 13px; }

  .inner { border-bottom: 1px solid #F5F5F5; padding: 30px 20px; box-sizing: border-box; }
  .inner:last-child { border-bottom: none; }
  .inner > ul li { position: relative; border-bottom: 1px solid #D9D9D9; box-sizing: border-box; padding: 20px 0 25px; }
  .inner > ul li:first-child { padding-top: 0; }
  .inner > ul li:last-child { border-bottom: none; padding-bottom: 0; }
  .inner .tit { font-size: 16px; line-height: 23px; font-weight: 500; margin-bottom: 30px; }
  .inner > ul li .cont img, .inner ul li .cont .c-txt { display: inline-block; vertical-align: top; }
  .inner > ul li .cont .c-txt { width: 80%; margin-left: 20px; }
  .inner > ul li .cont .c-txt p { font-size: 14px; margin-bottom: 5px; }
  .inner > ul li .cont .c-txt span { font-size: 12px; color:#808080; }

  .info-wrap .info { text-align: left; padding: 13px 0 0 20px; box-sizing: border-box; }
  .info-wrap .info p { font-size: 14px; line-height: 20px; font-weight: 500; padding-left: 26px; box-sizing: border-box; color: #101014; position: relative; margin-bottom: 5px; }
  .info-wrap .info p:last-child { margin-bottom: 0; }
  .info-wrap .info p:after { content: ''; position: absolute; left:0; top:50%; transform: translateY(-50%); background-size: contain; }
  .info-wrap .info p.height:after { width:11px; height: 12px; background: url("~@/assets/images/mercenary/ico-height.svg")0 0 no-repeat; left:2px; }
  .info-wrap .info p.foot:after { width: 15px; height: 8px; background: url("~@/assets/images/mercenary/ico-foot.svg")0 0 no-repeat;}
  .info-wrap .info p.pos:after { width: 12px; height: 14px; background: url("~@/assets/images/mercenary/ico-pos.svg")0 0 no-repeat;}
  .info-wrap .info p.addr { margin-bottom: 16px; }
  .info-wrap .info p.addr:after { width: 12px; height: 13px; background: url("~@/assets/images/mercenary/ico-addr.svg")0 0 no-repeat;}
  .info-wrap .info p.exp:after { width: 12px; height: 12px; background: url("~@/assets/images/mercenary/ico-exp.svg")0 0 no-repeat;}
  .info-wrap .info p.exp { font-size: 16px; font-weight: 700; padding-left: 20px; }

  .activating li span { width:18px; height: 18px; background: #F5F5F5; border-radius: 9px; display: block; }
  .activating.on li span.w1 { width:200px; transition: width 1s; animation-timing-function: ease-out; }
  .activating.on li span.w2 { width:180px; transition: width 1s; animation-timing-function: ease-in-out; }
  .activating.on li span.w3 { width:100px; transition: width 1s; transition-delay: 0.2s; animation-timing-function: linear; }
  .activating.on li span.w4 { width:120px; transition: width 1s; transition-delay: 0.4s; animation-timing-function: ease-in; }

  .schedule-info { padding:0; }
  .schedule-info .tit { margin-bottom: 10px; }
  .schedule-info .sub-tit { font-size: 12px; font-weight: 500; color:#606060; margin-bottom: 30px; }
  .schedule-info .activating { padding: 20px; box-sizing: border-box; box-shadow: 0 0 5px 0 rgba(0,0,0,0.3); border-radius: 12px; }
  .schedule-info .activating li { margin-bottom: 11px; }
  .schedule-info .activating li:last-child { margin-bottom: 0; }
  .schedule-info .activating li:nth-child(2) { margin-bottom: 23px; }
  .schedule-info .activating li:nth-child(3) { margin-bottom: 5px; }
  .schedule-info .activating .select { font-size: 16px; line-height: 23px; text-align: center; padding: 4px 21px; box-sizing: border-box; border-radius:16px; margin-top: 40px; border: 1px solid; border-color: var(--color-main); }

  .msg { border-bottom: none; }
  .msg textarea { font-size: 14px; line-height: 18px; padding: 8px 10px; box-sizing: border-box; width: 100%; height: 150px; overflow-y: scroll; border: 1px solid #bbb; border-radius: 9px; outline: none; }

  .bottom-btns { position: fixed; left:0; bottom: 0; width: 100%; text-align: center; padding: 5px 30px 40px; box-sizing: border-box; background:#fff; z-index: 10; border-top: 1px solid; border-color: #F5F5F5; }
  .bottom-btns p { font-size: 14px; line-height: 20px; margin-bottom: 15px; }
  .bottom-btns p span { color:var(--color-main); }
  .bottom-btns .btns div { display: flex; justify-content: space-between; }
  .bottom-btns a { font-size:16px; line-height: 40px; color:#fff; font-weight: 500; width:100%; text-align: center; display: inline-block; vertical-align: middle; border-radius: 20px; margin: 0 5px; background: #BBBBBB; pointer-events: none; }
  .bottom-btns.on a { background: var(--color-main); pointer-events: auto; }

  .selected .schedule-info { border-bottom: none; }
  .selected .schedule-info .tit { margin-bottom: 30px; }
  .selected .inner {  border-bottom: 10px solid #F5F5F5; }

  .edit-page { position: fixed; left:0; bottom:0; width:100%; height:90%; z-index: 10; background: #fff; transform: translateY(100%); transition: transform 0.5s; animation-timing-function: ease-out; border-top-left-radius: 25px; border-top-right-radius: 25px; box-sizing: border-box; overflow: hidden; }
  .edit-page .top-btns.type2 { height: auto; line-height: 66px; text-align: center; position: relative; border-bottom: none; padding-top: 0; z-index: 1; display: block; border-bottom: 1px solid #F5F5F5; }
  .edit-page .top-btns.type2 .close { font-size: 0; width: 45px; height:45px; background: url("~@/assets/images/mypage/ico-x.png")0 0 no-repeat; background-size: contain; position: absolute; right: 15px; top:15px; }
  .edit-page .btns { text-align: center; padding: 24px 0 38px; box-sizing: border-box; border-top: 1px solid #F5F5F5; position: absolute; left:0; bottom: 0; width: 100%; background: #fff; z-index: 1; }
  .edit-page .btn { font-size: 16px; font-weight: 500; text-align: center; color:#fff; background: var(--color-main); line-height: 41px; width: 200px; height: 41px; border-radius: 21px; cursor:pointer; }
  .edit-page.open { transform: translateY(0); }
  .dim { background: rgba(0,0,0,0.3); position: fixed; left:0; top:0; width:100%; height:100%; opacity: 0; transition: opacity 0.3s; animation-timing-function: ease-out; }
  .dimOpen .dim { opacity:0.5; z-index: 5; }

  .schedule-list { padding: 30px 20px 70px; box-sizing: border-box; height: 100%; overflow-y: scroll; }
  .schedule-list > .tit { margin-bottom: 30px; }
  .schedule-list li { padding: 20px; box-sizing: border-box; border-radius: 12px; box-shadow: 0 0 10px 0 rgba(0,0,0,0.2); margin-bottom: 30px; position: relative; overflow: hidden; }
  .schedule-list li:last-child { margin-bottom: 0; }
  .schedule-list li .list-cont { z-index: 1; position: relative; pointer-events: none; }
  .schedule-list li span { color:var(--color-main); display: inline-block; }
  .schedule-list li p { font-size: 16px; line-height: 23px; font-weight: 500; color:#606060; margin-bottom: 5px; }
  .schedule-list li .person, .schedule-list li .place, .schedule-list li .join-tag { font-size: 14px; }
  .schedule-list li p:last-of-type { margin-bottom: 0; }
  .schedule-list .status { font-size: 14px; margin-bottom: 15px; }
  .schedule-list .tit { color:#101014; }
  .schedule-list .date { margin-bottom: 20px; }
  .schedule-list label input[type=checkbox] + i { width: 100%; height: 100%; position: absolute; left:0; top:0; transition: background 0.3s; animation-timing-function: ease-out; }
  .schedule-list label input[type=checkbox]:checked + i { background: #FFF3EC; }
  .schedule-list label input[type=checkbox]:checked + i:after { content:''; width: 19px; height: 14px;  background: url("~@/assets/images/mercenary/ico-schedule-chk.svg")0 0 no-repeat; background-size: contain; position: absolute; right:20px; top:24px; }
  .schedule-list label input[type=checkbox] { display: none; }

  .pop { position: fixed; left:0; top:0; width: 100%; height: 100%; z-index: 10; }
  .pop .dim { background: rgba(0,0,0,0.3); position: absolute; left:0; top:0; width: 100%; height: 100%; opacity: 1; }
  .pop .inner { width: 280px; background: #fff; border-radius: 12px; text-align: left; box-shadow: 0 10px 10px 0 rgba(0,0,0,0.5); position: absolute; left:50%; margin-left: -140px; top:50%; margin-top: -100px; padding: 20px; box-sizing: border-box; z-index: 10; }
  .pop .tit { font-size: 16px; line-height: 23px; font-weight: 500; margin-bottom: 8px; color:#000; }
  .pop .txt { font-size: 15px; line-height: 22px; color:#606060; margin-bottom: 20px; }
  .pop .btns { display: flex; justify-content: space-between; }
  .pop .btns a { font-size: 15px; font-weight: 500; width:116px; height: 40px; line-height: 40px; text-align: center; border-radius: 20px; border: 1px solid #D9D9D9; box-sizing: border-box; }
  .pop .btns a.offer { border-color:var(--color-main); }
</style>