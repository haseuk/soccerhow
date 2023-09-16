<template>
  <div alarm :class="{dimOpen:isDim}">

    <div class="dim"></div>
    <div class="top-cont">
      <div class="top-btns type1">
        <RouterLink to="/mypage_main" class="back" >뒤로가기 </RouterLink>
        <h2>알림 설정</h2>
      </div>
    </div>

    <section class="alarm-wrap">
      <div class="wrap">
        <ul class="alarm-list">
          <li>
            <h4>계정 / 활동 알림</h4>
            <div class="list-inner">
              <p class="tit">활동</p>
              <div class="set">
                <p>설정됨 : 모든 활동, 푸시 알림 </p>
                <a class="set-btn" @click="editPageOpen('select-a')">설정</a>
              </div>
            </div>
            <div class="list-inner">
              <p class="tit">메시지</p>
              <div class="set">
                <p>설정됨 : 모든 채팅, 푸시 알림 </p>
                <a class="set-btn" @click="editPageOpen('select-b')">설정</a>
              </div>
            </div>
            <div class="list-inner">
              <p class="tit">결제 정보</p>
              <div class="set">
                <p>설정됨 : 모든 결제 내용, 푸시 알림 </p>
                <a class="set-btn" @click="editPageOpen('select-c')">설정</a>
              </div>
            </div>
          </li>
        </ul>

        <ul class="alarm-list">
          <li>
            <h4>혜택 / 시스템 알림</h4>
            <div class="list-inner">
              <p class="tit">이벤트 / 혜택</p>
              <div class="set">
                <p>설정됨 : 모든 이벤트 및 혜택, 푸시 알림 </p>
                <a class="set-btn" @click="editPageOpen('select-d')">설정</a>
              </div>
            </div>
            <div class="list-inner">
              <p class="tit">소식 / 시스템</p>
              <div class="set">
                <p>설정됨 : 푸시 알림 </p>
                <a class="set-btn" @click="editPageOpen('select-e')">설정</a>
              </div>
            </div>
          </li>
        </ul>

        <ul class="alarm-list">
          <li>
            <div class="list-inner">
              <p class="tit">모든 알림 설정하기</p>
              <div class="set">
                <p>설정됨 : 모든 알림 켜기</p>
                <a class="set-btn" @click="editPageOpen('select-f')">설정</a>
              </div>
            </div>
            <div class="list-inner">
              <p class="tit">마케팅 정보 수신 동의</p>
              <div class="set">
                <p>설정됨 : 푸시 알림 수신 동의</p>
                <a class="set-btn" @click="editPageOpen('select-g')">설정</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>


    <!--활동알림-->
    <section class="edit-page" :class="{open:isA}">
      <div class="top-btns type2">
        <a class="close" @click="close('close-a')">닫기</a>
        <h3>활동 알림</h3>
        <h4>알림을 받으실 활동 범위를 선택해주세요</h4>
      </div>
      <div class="content-detail">
        <div class="inner">
          <div class="top">
            <p class="tit">사커하우</p>
            <span>푸시 알림</span>
          </div>
          <ul>
            <li>
              <p>게시물 알림 받기</p>
              <a class="switch" :class="{active:isSwitchA1}" @click="switchToggle('a1')"><span></span></a>
            </li>
            <li>
              <p>댓글 및 답변 알림 받기</p>
              <a class="switch" :class="{active:isSwitchA2}" @click="switchToggle('a2')"><span></span></a>
            </li>
            <li>
              <p>좋아요 알림 받기</p>
              <a class="switch" :class="{active:isSwitchA3}" @click="switchToggle('a3')"><span></span></a>
            </li>
            <li>
              <p>인기게시물 알림 받기</p>
              <a class="switch" :class="{active:isSwitchA4}" @click="switchToggle('a4')"><span></span></a>
            </li>
          </ul>
        </div>
        <div class="inner">
          <div class="top">
            <p class="tit">조인 / 스케줄</p>
            <span>푸시 알림</span>
          </div>
          <ul>
            <li>
              <p>조인 알림 받기 <span>조인 참여, 새로운 멤버, 공지사항, 커뮤니티</span></p>
              <a class="switch" :class="{active:isSwitchA5}" @click="switchToggle('a5')"><span></span></a>
            </li>
            <li>
              <p>스케줄 알림 받기 <span>새로운 스케줄, 참여 멤버, 용병, 스케줄 수정</span></p>
              <a class="switch" :class="{active:isSwitchA6}" @click="switchToggle('a6')"><span></span></a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!--메시지-->
    <section class="edit-page" :class="{open:isB}">
      <div class="top-btns type2">
        <a class="close" @click="close('close-b')">닫기</a>
        <h3>메시지</h3>
        <h4>알림을 받으실 내용을 선택해주세요</h4>
      </div>
      <div class="content-detail">
        <div class="inner">
          <div class="top">
            <p class="tit">채팅</p>
            <span>푸시 알림</span>
          </div>
          <ul>
            <li>
              <p>1:1 채팅 알림 받기</p>
              <a class="switch" :class="{active:isSwitchB1}" @click="switchToggle('b1')"><span></span></a>
            </li>
            <li>
              <p>댓글 및 답변 알림 받기</p>
              <a class="switch" :class="{active:isSwitchB2}" @click="switchToggle('b2')"><span></span></a>
            </li>
            <li>
              <p>좋아요 알림 받기</p>
              <a class="switch" :class="{active:isSwitchB3}" @click="switchToggle('b3')"><span></span></a>
            </li>
            <li>
              <p>인기게시물 알림 받기</p>
              <a class="switch" :class="{active:isSwitchB4}" @click="switchToggle('b4')"><span></span></a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!--결제-->
    <section class="edit-page" :class="{open:isC}">
      <div class="top-btns type2">
        <a class="close" @click="close('close-c')">닫기</a>
        <h3>결제 정보</h3>
      </div>
      <div class="content-detail">
        <div class="inner">
          <div class="top">
            <p class="tit">결제</p>
            <span>푸시 알림</span>
          </div>
          <ul>
            <li>
              <p>모든 결제 내용 알림 받기</p>
              <a class="switch" :class="{active:isSwitchC1}" @click="switchToggle('c1')"><span></span></a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!--이벤트혜택-->
    <section class="edit-page" :class="{open:isD}">
      <div class="top-btns type2">
        <a class="close" @click="close('close-d')">닫기</a>
        <h3>이벤트/혜택</h3>
        <h4>알림을 받으실 내용을 선택해주세요</h4>
      </div>
      <div class="content-detail">
        <div class="inner">
          <div class="top">
            <p class="tit">이벤트 및 혜택</p>
            <span>푸시 알림</span>
          </div>
          <ul>
            <li>
              <p>광고/홍보성 이벤트 알림 받기 <span>추천 콘텐츠, 추천 상품, 증정 이벤트 등</span></p>
              <a class="switch" :class="{active:isSwitchD1}" @click="switchToggle('d1')"><span></span></a>
            </li>
            <li>
              <p>혜택성 이벤트 알림 받기 <span>쿠폰 제공, 포인트 적립, 응모 이벤트 등</span></p>
              <a class="switch" :class="{active:isSwitchD2}" @click="switchToggle('d2')"><span></span></a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!--결제-->
    <section class="edit-page" :class="{open:isE}">
      <div class="top-btns type2">
        <a class="close" @click="close('close-e')">닫기</a>
        <h3>소식/시스템</h3>
      </div>
      <div class="content-detail">
        <div class="inner">
          <div class="top">
            <p class="tit">시스템 알림</p>
            <span>푸시 알림</span>
          </div>
          <ul>
            <li>
              <p>소식 알림 받기 <span>사커하우 홍보 콘텐츠, 업데이트 소식, 콘텐츠 소개 등</span></p>
              <a class="switch" :class="{active:isSwitchE1}" @click="switchToggle('e1')"><span></span></a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!--모든알림-->
    <section class="edit-page" :class="{open:isF}">
      <div class="top-btns type2">
        <a class="close" @click="close('close-f')">닫기</a>
        <h3>모든 알림</h3>
      </div>
      <div class="content-detail">
        <div class="inner">
          <div class="top">
            <p class="tit">앱의 모든 알림</p>
            <span>푸시 알림</span>
          </div>
          <ul>
            <li>
              <p>모든 알림 켜기 <span>활동, 시스템, 이벤트, 메시지 등</span></p>
              <a class="switch" :class="{active:isSwitchF1}" @click="switchToggle('f1')"><span></span></a>
            </li>
          </ul>
        </div>
      </div>

      <div class="pop" v-if="active === 'all-off'">
        <p class="tit">모든 알림을 꺼둘까요?</p>
        <p class="txt">언제든 다시 켤 수 있으며, 원하는 알림만 켜둘 수도 있습니다. 결제 내용과 같은 중요한 알림은 꼭 켜두는 게 좋아요. </p>
        <div class="btns">
          <a class="off" @click="allOff">알림 끄기</a>
          <a class="cancel" @click="active = ''">취소하기</a>
        </div>
      </div>
    </section>

    <!--마케팅 정보 수신 동의-->
    <section class="edit-page" :class="{open:isG}">
      <div class="top-btns type2">
        <a class="close" @click="close('close-g')">닫기</a>
        <h3>마케팅 정보 수신 동의</h3>
      </div>
      <div class="content-detail">
        <div class="inner">
          <div class="top">
            <p class="tit">앱의 모든 알림</p>
            <span>푸시 알림</span>
          </div>
          <ul>
            <li>
              <p>마케팅 푸시 알림 동의</p>
              <a class="switch" :class="{active:isSwitchG1}" @click="switchToggle('g1')"><span></span></a>
            </li>
            <li>
              <p>마케팅 SMS 수신 동의</p>
              <a class="switch" :class="{active:isSwitchG2}" @click="switchToggle('g2')"><span></span></a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div class="edit-page marketing" v-if="active === 'marketing'">
      <p class="tit">마케팅 알림을 받지 않으실 건가요?</p>
      <p class="txt">마케팅 정보 수신 시 회원님을 위한 다양한 쿠폰과 포인트를 제공해드립니다.<br>
        보다 나은 축구 활동을 위해 마케팅 알림을 계속 받아보시는 건 어떨까요?</p>
      <div class="btns">
        <a class="not">수신 받지 않기</a>
        <a class="cancel" @click="active = ''">취소하기</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alarm",
  data() {
    return {
      isDim: false,
      isSwitchA1: false,
      isSwitchA2: false,
      isSwitchA3: false,
      isSwitchA4: false,
      isSwitchA5: false,
      isSwitchA6: false,
      isSwitchB1: false,
      isSwitchB2: false,
      isSwitchB3: false,
      isSwitchB4: false,
      isSwitchC1: false,
      isSwitchD1: false,
      isSwitchD2: false,
      isSwitchE1: false,
      isSwitchF1: true,
      isSwitchG1: true,
      isSwitchG2: true,
      isA: false,
      isB: false,
      isC: false,
      isD: false,
      isE: false,
      isF: false,
      isG: false,
      active: 'marketing'
    }
  },
  methods:{
    switchToggle(v) {
      if(v === 'a1') this.isSwitchA1 = !this.isSwitchA1;
      if(v === 'a2') this.isSwitchA2 = !this.isSwitchA2;
      if(v === 'a3') this.isSwitchA3 = !this.isSwitchA3;
      if(v === 'a4') this.isSwitchA4 = !this.isSwitchA4;
      if(v === 'a5') this.isSwitchA5 = !this.isSwitchA5;
      if(v === 'a6') this.isSwitchA6 = !this.isSwitchA6;
      if(v === 'b1') this.isSwitchB1 = !this.isSwitchB1;
      if(v === 'b2') this.isSwitchB2 = !this.isSwitchB2;
      if(v === 'b3') this.isSwitchB3 = !this.isSwitchB3;
      if(v === 'b4') this.isSwitchB4 = !this.isSwitchB4;
      if(v === 'c1') this.isSwitchC1 = !this.isSwitchC1;
      if(v === 'd1') this.isSwitchD1 = !this.isSwitchD1;
      if(v === 'd2') this.isSwitchD2 = !this.isSwitchD2;
      if(v === 'e1') this.isSwitchE1 = !this.isSwitchE1;
      if(v === 'f1') {
        this.isSwitchF1 = !this.isSwitchF1;
        if(this.isSwitchF1 === false) {
          this.active = 'all-off';
        }
      }
      if(v === 'g1') this.isSwitchG1 = !this.isSwitchG1;
      if(v === 'g2') this.isSwitchG2 = !this.isSwitchG2;
    },
    editPageOpen(v) {
      if(v === 'select-a') this.isA = true;
      if(v === 'select-b') this.isB = true;
      if(v === 'select-c') this.isC = true;
      if(v === 'select-d') this.isD = true;
      if(v === 'select-e') this.isE = true;
      if(v === 'select-f') this.isF = true;
      if(v === 'select-g') this.isG = true;
      this.isDim = true;
    },
    close(v) {
      if(v === 'close-a') this.isA = false;
      if(v === 'close-b') this.isB = false;
      if(v === 'close-c') this.isC = false;
      if(v === 'close-d') this.isD = false;
      if(v === 'close-e') this.isE = false;
      if(v === 'close-f') this.isF = false;
      if(v === 'close-f') this.isG = false;
      this.isDim = false;
    },
    allOff() {
      this.isSwitchF1 = false;
      this.active = '';
    }
  }
}
</script>

<style scoped>
  *{font-family:var(--global-font-family); color: #101014;}
  h2, h3, h4, p, ul { margin: 0; padding: 0; list-style: none; margin-block: 0; margin-inline: 0; }
  a { display: inline-block; text-decoration: none; color: #101014; }
  h2 { font-size: 24px; font-weight: 500; line-height: 35px; padding: 18px 20px 10px 20px; box-sizing: border-box; border-bottom:1px solid; border-color: #F5F5F5; }
  h3 { font-size: 20px; line-height: 29px; font-weight: 500; display: inline-block; }
  input { outline: none; }
  input[type=number]::-webkit-outer-spin-button,input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0;}

  [alarm] { overflow: hidden; }
  .dim { background: rgba(0,0,0,0.3); position: fixed; left:0; top:0; width:100%; height:100%; opacity: 0; transition: opacity 0.3s; animation-timing-function: ease-out; }

  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; }
  .alarm-wrap {margin-top: 100px; }

  section { background: #fff; position: relative; }
  .top-btns { height: 100px; border-bottom: 1px solid; border-color: #F5F5F5; position: relative; }
  .top-btns .back { font-size: 0; width:65px; height:53px; display: block; }
  .top-btns.type1 .back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:12px; }
  .top-btns.type1 h2 { padding-top: 0; }

  .edit-page { position: fixed; left:0; bottom:0; width:100%; min-height:70%; z-index: 10; background: #fff; transform: translateY(100%); transition: transform 0.5s; animation-timing-function: ease-out;  border-top-left-radius: 25px; border-top-right-radius: 25px; box-sizing: border-box; }
  .edit-page .top-btns.type2 { height: auto; text-align: right; padding: 20px 10px 20px 20px; box-sizing: border-box; }
  .edit-page .top-btns.type2 .close { font-size: 0; width: 45px; height:45px; background: url("~@/assets/images/mypage/ico-x.png")0 0 no-repeat; background-size: contain; vertical-align: top; }
  .edit-page .top-btns.type2 h3 { text-align: left; display: block; }
  .edit-page .top-btns.type2 h4 { font-weight: 500; line-height: 23px; display: block; text-align: left; color:#606060; word-break: keep-all; }
  .btn-wrap { width: 100%; position: absolute; left:0; bottom: 30px; text-align: center; }
  .btn { font-size: 20px; font-weight: 500; text-align: center; border: 1px solid; border-color: var(--color-main); line-height: 44px; padding: 0 100px; box-sizing: border-box; border-radius: 23px; cursor:pointer; }
  .edit-page.open { transform: translateY(0); }
  .dimOpen .dim { opacity:0.5; z-index: 5; }
  .error { border-color: var(--color-main) !important; }

  .switch { width:46px; height:27px; border-radius: 14px; background: #C7C7C7; position: relative; transition: background-color 0.3s; animation-timing-function: ease-out; }
  .switch span { width:23px; height:23px; border-radius: 50%; background: #ffffff; position: absolute; left:2px; top:2px; transition: left 0.3s; animation-timing-function: ease-out; }
  .switch.active { background: var(--color-main); }
  .switch.active span { left:21px; }

  .alarm-list { padding: 30px 20px; box-sizing: border-box; border-bottom: 10px solid #F5F5F5; }
  .alarm-list:last-child { border-bottom: none; }
  .alarm-list li h4 { font-weight: 500; margin-bottom: 20px; }
  .alarm-list li .list-inner { margin-bottom: 30px; }
  .alarm-list li .list-inner:last-child { margin-bottom: 0; }
  .alarm-list li .list-inner .tit { font-size: 14px; line-height: 20px; margin-bottom: 2px; }
  .alarm-list li .list-inner .set { display: flex; justify-content: space-between; }
  .alarm-list li .list-inner .set p { font-size: 12px; color:var(--color-main); }
  .alarm-list li .list-inner .set a { font-size: 14px; text-decoration: underline; }

  .content-detail .inner { padding: 30px 20px 40px; box-sizing: border-box; border-bottom: 10px solid #F5F5F5; }
  .content-detail .inner:last-child { border-bottom: none; }
  .content-detail .inner .top { display: flex; justify-content: space-between; margin-bottom: 15px; }
  .content-detail .inner .top .tit { font-size: 16px; font-weight: 500; }
  .content-detail .inner .top span { font-size: 14px; }
  .content-detail .inner ul li { display: flex; justify-content: space-between; margin-bottom: 30px; }
  .content-detail .inner ul li:last-child { margin-bottom: 0; }
  .content-detail .inner ul li p { font-size: 14px; line-height: 27px; }
  .content-detail .inner ul li p span { font-size: 12px; color:#606060; display: block; }
  .content-detail .inner ul li p, .content-detail .inner ul li a { vertical-align: middle; }

  .pop { width: 280px; height: 200px; background: #fff; border-radius: 5px; text-align: left; box-shadow: 0 10px 10px 0 rgba(0,0,0,0.5); position: absolute; left:50%; margin-left: -140px; top:50%; margin-top: -100px; padding: 20px; box-sizing: border-box; }
  .pop .tit { font-size: 16px; font-weight: 500; margin-bottom: 8px; color:#000; }
  .pop .txt { font-size: 15px; line-height: 22px; color:#606060; margin-bottom: 20px; }
  .pop .btns { display: flex; justify-content: space-between; }
  .pop .btns a { font-size: 15px; font-weight: 500; width:116px; height: 40px; line-height: 40px; text-align: center; border-radius: 20px; border: 1px solid #D9D9D9; box-sizing: border-box; }
  .pop .btns a.off { border-color:var(--color-main); }

</style>