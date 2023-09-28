<template>
  <div apply>
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
            <h2>용병 신청</h2>
            <div class="top-txt">
              <span>{{nick}}</span> 스케줄에 용병 신청을 보냈어요!
              신청 내용과 상태를 확인하세요
            </div>

            <p class="tit">진행 상황</p>
            <div class="cont status">
              <img src="~@/assets/images/mercenary/ico-status.svg" alt="">
              <div class="c-txt" v-if="status === 'wait'">
                <p>대기중</p>
                <span>현재 수락 대기중이예요</span>
              </div>
              <div class="c-txt" v-if="status === 'accept'">
                <p>수락</p>
                <span>용병 제안을 수락했어요</span>
              </div>
              <div class="c-txt" v-if="status === 'refuse'">
                <p>거절</p>
                <span>용병 제안을 거절했어요</span>
              </div>
              <div class="c-txt" v-if="status === 'end'">
                <p>종료</p>
                <span>이미 끝난 스케줄이거나, 제안을 취소했어요</span>
              </div>
              <a class="btn cancel" @click="active = 'cancel'">신청 취소</a>
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
            <p class="tit">신청 메시지</p>
            <div class="cont">
              <img src="~@/assets/images/mercenary/ico-msg.svg" alt="">
              <div class="c-txt">
                <span>안녕하세요 용병님 저희가 이번 토요일에 중요한 경기가 있는데 용병님 같은 분을 꼭 찾고 있었습니다. 참여해주실 수 있을까요?? 사례금은 모아서 전달드리도록 하겠습니다 감사합니다</span>
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
      <p v-if="status === 'wait'">😎 상대방이 용병 신청을 <span>확인했어요</span></p>
      <p v-if="status === 'accept'">👏 상대방이 용병 신청을 수락했어요!</p>
      <p v-if="status === 'refuse'">😢 상대방이 용병 신청을 거절했어요</p>
      <p v-if="status === 'end'">👋 이미 끝난 스케줄이거나, 취소된 신청이예요</p>
      <div class="btns">
        <a v-if="status === 'wait'" class="cancel" @click="active = 'cancel'">신청취소</a>
        <a v-else-if="status === 'accept'">스케줄로 이동</a>
        <a v-else>확인</a>
      </div>
    </div>




    <!--취소-->
    <div class="pop" v-if="active === 'cancel'">
      <div class="dim"></div>
      <div class="inner">
        <p class="tit">용병 신청을 취소할까요?</p>
        <p class="txt">신청을 취소하고 나면 해당 스케줄에 대한 용병 신천이 삭제됩니다.</p>
        <div class="btns">
          <a class="off" @click="cancel">취소하기</a>
          <a class="cancel" @click="active = ''">돌아가기</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "MercenaryApply",
  data() {
    return {
      nick:'마포초 주말 경기',
      status: 'wait',
      popUp: false,
      active: '',
    }
  },
  methods: {
    cancel() {
      this.active = '';
    },
    refuse() {
      this.active = '';
    },
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
  section { position: relative; margin-top:60px; padding-bottom: 120px; }

  .top-btns { height: 60px; border-bottom: 1px solid; border-color: #F5F5F5; padding-top: 7px; box-sizing: border-box; text-align: center; display: flex; justify-content: space-between; }
  .top-btns h2 { padding: 0; display: inline-block; border-bottom: none; line-height: 53px; }
  .top-btns a { font-size: 0; width:65px; height:53px; position: relative; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }
  .top-btns a.alarm:after { content: ''; width:17px; height:20px; background: url("~@/assets/images/mercenary/ico-bell.svg")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }

  .inner { border-bottom: 10px solid #F5F5F5; padding: 30px 20px; box-sizing: border-box; }
  .inner h2 { padding: 0 0 20px 0;}
  .inner:last-child { border-bottom: none; }
  .inner ul li { position: relative; border-bottom: 1px solid #D9D9D9; box-sizing: border-box; padding: 20px 0 25px; }
  .inner ul li:first-child { padding-top: 0; }
  .inner ul li:last-child { border-bottom:none; padding-bottom: 0; }
  .top-txt { font-size: 14px; line-height: 22px; word-break: keep-all; margin-bottom: 45px; }
  .top-txt span { font-weight: 700; }
  .inner ul li .tit { font-size: 16px; line-height: 23px; font-weight: 500; margin-bottom: 30px; }
  .inner ul li .cont img, .inner ul li .cont .c-txt { display: inline-block; vertical-align: top; }
  .inner ul li .cont .c-txt { width: 80%; margin-left: 20px; }
  .inner ul li .cont .c-txt p { font-size: 14px; margin-bottom: 5px; }
  .inner ul li .cont .c-txt span { font-size: 12px; color:#808080; }
  .inner ul li.head .cont .c-txt p { color:var(--color-main); }
  .inner ul li .cont { position: relative; }
  .inner ul li .cont .cancel { font-size: 14px; position: absolute; right: 0; top:0; text-decoration: underline; }

  .bottom-btns { position: fixed; left:0; bottom: 0; width: 100%; text-align: center; padding: 5px 30px 40px; box-sizing: border-box; background: #f9f9f9; backdrop-filter: blur(15px); z-index: 10; border-top: 1px solid; border-color: #F5F5F5; }
  .bottom-btns p { font-size: 14px; line-height: 20px; margin-bottom: 15px; }
  .bottom-btns p span { color:var(--color-main); }
  .bottom-btns .btns div { display: flex; justify-content: space-between; }
  .bottom-btns a { font-size:16px; line-height: 40px; color:#F9F9F9; font-weight: 500; width:160px; text-align: center; display: inline-block; vertical-align: middle; border-radius: 20px; margin: 0 5px; background: var(--color-main); }
  .bottom-btns a.cancel { background: #bbb; }

  .pop { position: fixed; left:0; top:0; width: 100%; height: 100%; z-index: 10; }
  .pop .dim { background: rgba(0,0,0,0.3); position: absolute; left:0; top:0; width: 100%; height: 100%; opacity: 1; }
  .pop .inner { width: 280px; background: #fff; border-radius: 12px; text-align: left; box-shadow: 0 10px 10px 0 rgba(0,0,0,0.5); position: absolute; left:50%; margin-left: -140px; top:50%; margin-top: -100px; padding: 20px; box-sizing: border-box; z-index: 10; }
  .pop .tit { font-size: 16px; line-height: 23px; font-weight: 500; margin-bottom: 8px; color:#000; }
  .pop .txt { font-size: 15px; line-height: 22px; color:#606060; margin-bottom: 20px; }
  .pop .btns { display: flex; justify-content: space-between; }
  .pop .btns a { font-size: 15px; font-weight: 500; width:116px; height: 40px; line-height: 40px; text-align: center; border-radius: 20px; border: 1px solid #D9D9D9; box-sizing: border-box; }
  .pop .btns a.off { border-color:var(--color-main); }
</style>