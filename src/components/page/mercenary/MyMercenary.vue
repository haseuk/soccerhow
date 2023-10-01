<template>
  <div my-mercenary :class="{dimOpen:isDim}">

    <div class="dim"></div>

    <div class="top-cont">
      <div class="top-btns">
        <RouterLink to="" class="back" >뒤로가기 </RouterLink>
        <h2>내 용병</h2>
        <a class="btn alarm"></a>
      </div>
    </div>

    <section>
      <div class="content" :class="{offer:proposal}">
        <div class="flip-wrap">
          <div class="flip" v-if="proposal">
            <div class="cards">
              <div class="c-front"><img src="~@/assets/images/mercenary/card-front.png" alt=""></div>
              <div class="c-back"><img src="~@/assets/images/mercenary/card-back.png" alt=""></div>
            </div>
          </div>
          <div class="hand" v-else></div>

          <p class="tit">
            <span v-if="proposal">환상적인 골을 넣을 준비가 됐나요?</span>
            <span v-else>아직 준비중이신가요?</span>
          </p>
          <p class="txt">
            <span v-if="proposal">매력적인 스케줄을 확인하고<br> 축구화 끈을 묶고 그라운드로 나서세요!</span>
            <span v-else>용병을 등록하고 함께하는 팀원들과<br> 멋진 골을 만들어보세요!</span>
          </p>
          <div class="schedule-search">
            <RouterLink to="/schedule_find" class="btn" v-if="proposal">스케줄 찾아보기</RouterLink>
            <RouterLink class="btn" to="/mercenary_settings" v-else>용병 제안 받기</RouterLink>
          </div>
          <a class="btn exp" v-if="!proposal" @click="notiOpen">용병 제안에 대해 설명해드릴까요?</a>
        </div>

        <div class="btn-wrap">
          <div class="tab-wrap" :class="active">
            <a class="btn tab" @click="active = 'receive'">받은 용병 제안</a>
            <a class="btn tab" @click="active = 'sent'">보낸 용병 신청</a>
          </div>
          <RouterLink to="/mercenary_reocrd" class="btn record">용병 기록</RouterLink>
        </div>

        <!--받은 용병 제안 리스트-->
        <div class="list-wrap receive" v-if="active === 'receive'" >
          <ul v-if="proposal">
            <li v-for="(item,i) in receiveList" :key="i" :class="item.status.st">
              <RouterLink to="/mercenary_proposal" class="link" v-if="item.status.st === 'accept' || item.status.st === 'keep' || item.status.st === 'wait'"></RouterLink>
              <div class="text">
                <p class="tit">{{item.playground}}</p>
                <p class="date">{{item.date}}</p>
                <p class="type">{{item.type}}</p>
              </div>
              <span v-html="item.status.ti"></span>
            </li>
          </ul>
          <span class="no-offer" v-else>받은 제안이 없어요</span>
        </div>

        <!--보낸 용병 신청 리스트-->
        <div class="list-wrap sent" v-else>
          <ul>
            <li v-for="(item,i) in receiveList" :key="i" :class="item.status.st">
              <RouterLink to="/mercenary_apply" class="link" v-if="item.status.st === 'accept' || item.status.st === 'keep' || item.status.st === 'wait'"></RouterLink>
              <div class="text">
                <p class="status"><img src="~@/assets/images/mercenary/ico-status.svg" alt=""> <span v-html="item.status.ti"></span></p>
                <p class="tit">{{item.tit}}</p>
                <p><img src="~@/assets/images/mercenary/ico-loacation.svg" alt=""> {{item.playground}}</p>
                <p><img src="~@/assets/images/mercenary/ico-court.svg" alt=""> {{item.type}}</p>
                <p><img src="~@/assets/images/mercenary/ico-schedule.svg" alt=""> {{item.date}}</p>
                <p><img src="~@/assets/images/mercenary/ico-persons.svg" alt=""> 1/4명</p>
              </div>
            </li>
          </ul>
        </div>

        <p class="check-txt">
          모든 제안은 해당 스케줄이 종료되면 자동 삭제되며,
          용병이 성사된 경우에는 용병 기록에서 확인 가능합니다.
        </p>
      </div>
    </section>



    <!--설명팝업-->
    <section class="edit-page" :class="{open:isNotice}">
      <div class="top-btns type2">
        <a class="close" @click="close">닫기</a>
      </div>

      <div class="content-detail">
        <div class="top" :class="{action:trigger}">
          <div class="ground"><img src="~@/assets/images/mercenary/ground-line.png" alt=""></div>
          <div class="player1 player">
            <div class="body"><img src="~@/assets/images/mercenary/player1.png" alt=""></div>
            <div class="ball"><img src="~@/assets/images/mercenary/ball1.png" alt=""></div>
          </div>
          <div class="player2 player">
            <div class="body"><img src="~@/assets/images/mercenary/player2.png" alt=""></div>
            <div class="arm"><img src="~@/assets/images/mercenary/player2-arm.png" alt=""></div>
          </div>
          <div class="player3 player">
            <div class="body"><img src="~@/assets/images/mercenary/player3.png" alt=""></div>
            <div class="ball"><img src="~@/assets/images/mercenary/ball2.png" alt=""></div>
            <div class="foot"><img src="~@/assets/images/mercenary/player3-foot.png" alt=""></div>
          </div>
        </div>

        <div class="noti-txt">
          <p class="tit">푸른 그라운드의<br> 영웅이 되어 보세요!</p>
          <p class="sub-tit">용병 제안 받기</p>
          <p class="txt">용병 제안 받기를 활성화 하면 용병이 필요한 회원들에게 회원님의 프로필이 노출됩니다.</p>
          <p class="sub-tit">매력적인 경기에 참여해요</p>
          <p class="txt">용병 제안을 받기 시작하면 다양한 제안이 도착해요. 여러 제안들을 보며, 마음에 드는 스케줄이 있다면 수락해요!</p>
          <p class="sub-tit">좋은 용병 되기</p>
          <p class="txt">스케줄이 있는 일자에 용병으로 참여해요. 좋은 활약을 선보이면 멤버들이 회원님에게 좋은 평가를 해줄 거예요.</p>
          <p class="sub-tit">다양한 용병 활동을 시작하세요</p>
          <p class="txt">용병을 진행하면 할수록 회원님의 몸값은 올라가요. 회원님에 대한 평가도 좋아지는만큼 매력적인 용병 제안이 많아지게 될 거예요!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MyMercenary",
  data() {
    return {
      isDim: false,
      proposal: true, //용병 제안이 있는 경우 true,
      active: 'receive',
      receiveList: [
        {tit: '마포초 주말 경기',playground: '잠실중학교 운동장', date:'7월 14일(토) 16:00 ~ 18:00', type:'소규모 5 vs 5', status: {st: 'accept', ti: '수락'}},
        {tit: '마포초 주말 경기',playground: '한림예고 운동장', date:'7월 14일(토) 16:00 ~ 18:00', type:'소규모 6 vs 6', status: {st: 'end', ti: '종료'}},
        {tit: '마포초 주말 경기',playground: '잠실 월드컵경기장', date:'7월 14일(토) 16:00 ~ 18:00', type:'풀 코트 11 vs 11', status: {st: 'keep', ti: '보기'}},
        {tit: '마포초 주말 경기',playground: '잠실 월드컵경기장', date:'7월 14일(토) 16:00 ~ 18:00', type:'풀 코트 11 vs 11', status: {st: 'wait', ti: '대기'}},
        {tit: '마포초 주말 경기',playground: '잠실중학교 운동장', date:'7월 14일(토) 16:00 ~ 18:00', type:'소규모 5 vs 5', status: {st: 'refuse', ti: '거절'}},
      ],
      notice: false,
      isNotice: false,
      trigger: false,
    }
  },
  methods: {
    close() {
      this.isNotice = false;
      this.isDim = false;
      this.trigger = false;
    },
    notiOpen() {
      this.isNotice = true;
      this.isDim = true;
      setTimeout(() => {
        this.trigger = true;
      }, 400)
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
  input { outline: none; }
  input[type=number]::-webkit-outer-spin-button,input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }

  [my-mercenary] { overflow:hidden; }
  .dim { background: rgba(0,0,0,0.3); position: fixed; left:0; top:0; width:100%; height:100%; opacity: 0; transition: opacity 0.3s; animation-timing-function: ease-out; }
  .dimOpen .dim { opacity:0.5; z-index: 5; }

  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; }
  section {position: relative; margin-top:60px; }

  .top-btns { height: 60px; border-bottom: 1px solid; border-color: #F5F5F5; padding-top: 7px; box-sizing: border-box; text-align: center; display: flex; justify-content: space-between; }
  .top-btns h2 { padding: 0; display: inline-block; border-bottom: none; line-height: 53px; }
  .top-btns a { font-size: 0; width:65px; height:53px; position: relative; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }
  .top-btns a.alarm:after { content: ''; width:17px; height:20px; background: url("~@/assets/images/mercenary/ico-bell.svg")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }

  .content { padding: 30px 20px; box-sizing: border-box; }
  .flip-wrap { padding: 35px 25px 30px; box-sizing: border-box; text-align: center; perspective: calc(100vw - 50px); box-shadow: 0 0 5px 0 rgba(0,0,0,0.3); border-radius: 15px;}
  .flip-wrap .flip { display: inline-block; animation: flip 3s ease-out infinite; transform-style: preserve-3d; }
  @keyframes flip {
    100% { transform: rotateY(360deg); }
  }
  .flip-wrap .flip .cards { position: relative;  width: 66px; height: 60px; text-align: center; transition: transform 0.8s; transform-style: preserve-3d; }
  .cards .c-front, .cards .c-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; left:50%; top:50%; margin: -30px 0 0 -33px;  }
  .cards .c-front { transform: rotateY(0deg); }
  .cards .c-back { transform: rotateY(180deg); }
  .flip-wrap .tit { font-size: 16px; margin-top: 40px; }
  .flip-wrap .txt { line-height: 20px; margin-top: 10px; }
  .flip-wrap .txt span { font-size: 14px; color:#808080; }
  .flip-wrap .exp { font-size: 14px; text-decoration: underline; margin-top: 30px; }
  .hand { width:62px; height: 69px; transform-origin: left bottom; animation: shake 2.5s ease-out infinite; margin: 0 auto; }
  @keyframes shake {
    0% { transform: rotate(0deg); background: url("~@/assets/images/mercenary/hand1.png")0 0 no-repeat; background-size: contain; }
    50% { transform: rotate(25deg); background: url("~@/assets/images/mercenary/hand2.png")0 0 no-repeat; background-size: contain; }
    100% { transform: rotate(0deg); background: url("~@/assets/images/mercenary/hand1.png")0 0 no-repeat; background-size: contain; }
  }
  .schedule-search { text-align: center; background: var(--color-main); border-radius: 10px; margin: 30px auto 0; display: block; max-width: 300px; }
  .schedule-search .btn { font-size: 16px; color: #fff; text-align: center; font-weight: 500; width: 100%; height: 55px;  line-height: 55px; }

  .btn-wrap { display: flex; justify-content: space-between; margin: 48px 0 30px; }
  .tab-wrap .tab { font-size: 14px; margin-right: 7px; color:#808080; width: 116px; height: 38px; line-height: 36px; text-align: center; border: 1px solid #F5F5F5; border-radius: 19px; }
  .tab-wrap .tab.on { color:#fff; border-color: var(--color-main); background: var(--color-main); }
  .record { font-size: 14px; line-height: 38px; text-decoration: underline; }
  .tab-wrap.receive .tab:nth-child(1) { color:#fff; background: var(--color-main); }
  .tab-wrap.sent .tab:nth-child(2) { color:#fff; background: var(--color-main); }

  .list-wrap ul li { padding: 17px 21px; box-sizing: border-box; border: 1px solid #D9D9D9; border-radius: 15px; margin-bottom:10px; display: flex; justify-content: space-between; align-items: center; position: relative; }
  .list-wrap ul li:last-child { margin-bottom:0; }
  .list-wrap ul li p { font-size:14px; line-height: 20px; margin-bottom: 1px; }
  .list-wrap ul li .tit { font-size:16px; line-height: 23px; font-weight: 500; }
  .list-wrap ul li .date { color:#606060; }
  .list-wrap ul li .type { color:var(--color-main); font-weight: 500; }
  .list-wrap ul li span { font-size: 14px; font-weight: 500; width: 60px; text-align: center; display: inline-block; }
  .list-wrap ul li.accept span { color:var(--color-main); }
  .list-wrap ul li.end, .list-wrap ul li.refuse { opacity: 0.3; }
  .list-wrap ul li.keep span { width: 60px; height: 30px; line-height: 30px; color: #fff; background:#101014; border-radius: 15px; display: inline-block; }
  .list-wrap ul li .link { position: absolute; left:0; top:0; width: 100%; height: 100%; }
  .list-wrap .no-offer { font-size: 12px; color:#606060; text-align: center; display: inline-block; border: 1px solid #D9D9D9; border-radius: 15px; width: 100%; height: 40px; line-height: 40px; box-sizing: border-box; }
  .sent ul li .status img, .sent ul li .status span { vertical-align: middle; font-weight: 400; text-align: left; }
  .sent ul li .status { margin-bottom: 13px; }
  .sent ul li p { margin-bottom: 13px; }
  .sent ul li p:last-child { margin-bottom: 0; }
  .sent ul li p img { width: 14px; margin-right: 12px; }
  .sent ul li .tit { margin-bottom: 9px; }
  .sent ul li.keep span { background: none; color: #101014; }

  .check-txt { font-size: 12px; line-height: 17px; color:#606060; margin-top: 30px; }

  .edit-page { position: fixed; left:0; bottom:0; width:100%; height:90%; z-index: 10; background: #fff; transform: translateY(100%); transition: transform 0.5s; animation-timing-function: ease-out; border-top-left-radius: 25px; border-top-right-radius: 25px; box-sizing: border-box; overflow: hidden; }
  .edit-page .top-btns.type2 { height: auto; text-align: right; position: relative; border-bottom: none; padding-top: 0; z-index: 1; }
  .edit-page .top-btns.type2 .close { font-size: 0; width: 45px; height:45px; background: url("~@/assets/images/mypage/ico-x.png")0 0 no-repeat; background-size: contain; position: absolute; right: 15px; top:15px; }
  .edit-page .btns { text-align: center; margin-bottom: 30px; }
  .edit-page .btn { font-size: 20px; font-weight: 500; text-align: center; border: 1px solid; border-color: var(--color-main); line-height: 44px; padding: 0 100px; box-sizing: border-box; border-radius: 23px; cursor:pointer; }
  .edit-page.open { transform: translateY(0); }
  .dimOpen .dim { opacity:0.5; z-index: 5; }

  .edit-page .top { position: relative; width: 100%; height: 230px; overflow:hidden; }
  .edit-page .ground { width:100%; height:100%; background: rgb(117,212,115); background: linear-gradient(7deg, rgba(85,169,83,0.9) 0%, rgba(55,236,186,0.9) 100%); position: relative; }
  .edit-page .ground img { position: absolute; left:50%; top:50%; transform: translate(-50%,-50%) scale(0.8); transition: transform 1.5s; animation-timing-function: ease-out; }
  .content-detail { height: 100%; overflow-y: auto; }
  .player1 { top:13px; width:181px; height: 207px; transform: translateX(-77px); }
  .player1 .ball { right:-13px; top:48px; width:52px; height: 51px; transition: top 3s; }
  .player1 .body { position: relative; z-index: 1; }
  .player2 { left:50%; top:27px; width:81px; height: 203px; transform: translateX(-50%); }
  .player2 .arm { left:50%; top:66px; width:34px; height: 54px; margin-left: -47px; }
  .player3 { right:0; top:8px; width:132px; height: 236px; transform: translateX(28px); }
  .player3 .ball { right:102px; top:35px; width:72px; height: 72px; }
  .player3 .foot { right:30px; top:135px; width:91px; height: 76px; }
  .player { position: absolute; transition: transform 1.5s; animation-timing-function: ease-out; }
  .player .ball, .player .arm, .player .foot { position: absolute; transition: all 1.5s; animation-timing-function: ease-out; }
  .top.action .ground img { transform: translate(-50%,-50%) scale(1); }
  .top.action .player1 { transform: translateX(-20px); }
  .top.action .player1 .ball { top:70px; }
  .top.action .player2 .arm { transform-origin: 58% 11%; transform: rotateZ(-90deg); top: 55px; }
  .top.action .player3 { transform: translateX(10px);}
  .top.action .player3 .ball { top: 85px; }
  .top.action .player3 .foot { transform-origin: 55% 0%; transform: rotateZ(40deg); top:130px; }
  .noti-txt { padding:24px 22px; box-sizing: border-box; }
  .noti-txt .tit { font-size: 24px; line-height: 35px; font-weight: 700; margin-bottom: 32px; }
  .noti-txt .sub-tit { font-size: 14px; line-height: 20px; font-weight: 500; margin-bottom: 8px; }
  .noti-txt .txt { font-size: 14px; line-height: 20px; color:#606060; margin-bottom: 24px; }
  .noti-txt .txt:last-of-type { margin-bottom: 0; }
</style>