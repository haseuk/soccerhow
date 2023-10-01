<template>
  <div mercenary-complete>
    <div class="top-cont">
      <div class="top-btns">
        <RouterLink to="/my_mercenary" class="back" >뒤로가기 </RouterLink>
        <a class="btn alarm"></a>
      </div>
    </div>

    <section>
      <div class="inner">
        <ul>
          <li class="head">
            <h2>스케줄이 끝났어요!<br> 수고하셨어요 🎉</h2>

            <p class="tit">진행 상황</p>
            <div class="cont status">
              <img src="~@/assets/images/mercenary/ico-status.svg" alt="">
              <div class="c-txt">
                <p>완료</p>
                <span>용병 활동이 끝났어요<br> 다음에도 멋진 활약을 보여주세요</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="inner eva-list" :class="{on: eva}">
        <ul>
          <li class="review">
            <p class="tit">내가 받은 평가</p>
            <div class="eva-wrap">
              <div class="eva" :class="`eva${i+1}`" v-for="(item, i) in evaList" :key="i">
                <div class="badge"></div>
                <p v-if="eva">{{item.badge}}</p>
                <p v-else>0</p>
              </div>
            </div>
          </li>
          <li>
            <div class="eva-active-wrap">
              <div class="cont" v-if="membEvaActive === 'memb'">
                <p>스케줄을 함께한 멤버들을 평가해주세요</p>
                <a class="btn memb" @click="evaActive('memb')">멤버 평가하기</a>
              </div>
              <div class="cont after" v-else>
                <p>멤버 평가를 완료했어요 <span>평가한 사람 : 1/4</span></p>
                <a class="btn memb">멤버 평가 보기</a>
              </div>
              <div class="cont" v-if="groundEvaActive === 'ground'">
                <p>스케줄을 진행한 운동장을 평가해주세요</p>
                <a class="btn ground" @click="evaActive('ground')">운동장 평가하기</a>
              </div>
              <div class="cont after" v-else>
                <p>운동장 평가를 완료했어요</p>
                <a class="btn ground">운동장 평가 보기</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="inner">
        <ul>
          <li>
            <p class="tit">스케줄 정보</p>
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

      <div class="inner">
        <ul>
          <li>
            <p class="tit">조인 정보</p>
            <div class="cont">
              <img src="~@/assets/images/mercenary/ico-msg.svg" alt="">
              <div class="c-txt">
                <p>마포구 축신 협회 · 13명</p>
                <span>마포구 축신들입니다. 선출도 있고 선출 아닌 분들도 섞여 있는데 대부분 재밌게 어울려서 축구하고 있어요 ~</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <div class="bottom-btns">
      <p>👋 용병 활동이 <span>완료된 스케줄이예요</span></p>
      <div class="btns">
        <a class="btn">확인</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mercenaryComplete",
  data() {
    return {
      evaList: [
        {id: 1, badge: 2, },
        {id: 2, badge: 0, },
        {id: 3, badge: 0, }
      ],
      eva: false,
      membEvaActive: 'memb',
      groundEvaActive: 'ground',
    }
  },
  methods: {
    evaActive(v) {
      if(v === 'memb') this.membEvaActive = '';
      if(v === 'ground') this.groundEvaActive = '';
      this.eva = true;
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

  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1;  }
  section {position: relative; margin-top:60px; padding-bottom: 140px; box-sizing: border-box; }

  .top-btns { height: 60px; padding-top: 7px; border-bottom: 1px solid; border-color: #F5F5F5; box-sizing: border-box; text-align: center; display: flex; justify-content: space-between; }
  .top-btns a { font-size: 0; width:65px; height:53px; position: relative; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }
  .top-btns a.alarm:after { content: ''; width:17px; height:20px; background: url("~@/assets/images/mercenary/ico-bell.svg")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }

  .inner { border-bottom: 10px solid #F5F5F5; padding: 30px 20px; box-sizing: border-box; }
  .inner h2 { padding: 0 0 45px 0;}
  .inner:last-child { border-bottom: none; }
  .inner ul li { position: relative; border-bottom: 1px solid #D9D9D9; box-sizing: border-box; padding: 20px 0 25px; }
  .inner ul li:first-child { padding-top: 0; }
  .inner ul li:last-child { border-bottom:none; padding-bottom: 0; }
  .top-txt span { font-weight: 700; }
  .inner ul li .tit { font-size: 16px; line-height: 23px; font-weight: 500; margin-bottom: 30px; }
  .inner ul li .cont img, .inner ul li .cont .c-txt { display: inline-block; vertical-align: top; }
  .inner ul li .cont .c-txt { width: 80%; margin-left: 20px; }
  .inner ul li .cont .c-txt p { font-size: 14px; margin-bottom: 5px; }
  .inner ul li .cont .c-txt span { font-size: 12px; color:#808080; }
  .inner ul li.head .cont .c-txt p { color:var(--color-main); }
  .inner ul li .cont { position: relative; }
  .eva-list { padding: 30px 0; }
  .eva-list .tit { padding-left: 20px; }
  .eva-wrap { text-align: center; max-width: 340px; display: flex; justify-content: space-between; margin: 0 auto; overflow-x: scroll; -ms-overflow-style: none; scrollbar-width: none; }
  .eva-wrap::-webkit-scrollbar { display: none; }
  .eva { display: inline-block; }
  .eva1 .badge { width: 109px; height: 119px; background: url("~@/assets/images/mercenary/eva1-off.png")0 0 no-repeat; background-size: contain; }
  .eva2 .badge { width: 110px; height: 119px; background: url("~@/assets/images/mercenary/eva2-off.png")0 0 no-repeat; background-size: contain; }
  .eva3 .badge { width: 109px; height: 119px; background: url("~@/assets/images/mercenary/eva3-off.png")0 0 no-repeat; background-size: contain; }

  .eva-list.on .eva1 .badge { background: url("~@/assets/images/mercenary/eva1-on.png")0 0 no-repeat; background-size: contain; }
  .eva-list .review { border-bottom: none; padding-bottom: 0; }
  .eva-active-wrap { padding: 0 20px; box-sizing: border-box; }
  .eva-active-wrap .cont:first-child { border-top: 1px solid #D9D9D9; margin-bottom: 11px; padding-top: 30px; }
  .eva-active-wrap .cont { display: flex; justify-content: space-between; align-items: center; }
  .eva-active-wrap .cont p { font-size: 14px; line-height: 17px; color:#808080; word-break: keep-all; }
  .eva-active-wrap .cont p span { color:#808080; }
  .eva-active-wrap .cont .btn { font-size: 16px; line-height: 40px; color:#fff; min-width: 140px; width: 160px; height: 40px; text-align: center; border-radius: 21px; background: var(--color-main); }
  .eva-active-wrap .cont .btn.ground { background:#101014; }
  .eva-active-wrap .cont.after .btn { font-size: 14px; color:#606060; background: none; text-align: right; text-decoration: underline; }

  .bottom-btns { position: fixed; left:0; bottom: 0; width: 100%; text-align: center; padding: 5px 30px 40px; box-sizing: border-box; background: #f9f9f9; backdrop-filter: blur(15px); z-index: 10; border-top: 1px solid; border-color: #F5F5F5; }
  .bottom-btns p { font-size: 14px; line-height: 20px; margin-bottom: 15px; }
  .bottom-btns p span { color:var(--color-main); }
  .bottom-btns .btns div { display: flex; justify-content: space-between; }
  .bottom-btns a { font-size:16px; line-height: 40px; color:#F9F9F9; font-weight: 500; width:160px; text-align: center; display: inline-block; vertical-align: middle; border-radius: 20px; margin: 0 5px; background: var(--color-main); }
</style>