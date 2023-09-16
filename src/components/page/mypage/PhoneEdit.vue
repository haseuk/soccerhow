<template>
  <div phone_edit :class="{dimOpen:isDim}" :style="`height:${this.winH}px`">

    <div class="dim"></div>

    <section class="phone-edit">
      <div class="top-btns type1">
        <RouterLink to="/privacy" class="back">뒤로가기 </RouterLink>
        <h2>전화번호 수정</h2>
      </div>

      <div class="wrap">
        <p class="tit">알림, 푸시, 로그인을 할 때<br> 전화번호가 큰 도움이 돼요</p>

        <span>전화번호</span>
        <div class="phone-wrap">
          <label>
            <input type="number" placeholder="+82">
          </label>
          <label>
            <input type="number" placeholder="010-0000-0000">
          </label>
        </div>

        <div class="btn-wrap">
          <a class="btn save" @click="editPageOpen">다음</a>
        </div>
      </div>
    </section>

    <section class="phone-cert edit-page" :class="{open:isCert}" :style="`height:${this.winH - 100 }px`">
      <div class="inner">
        <div class="top-btns type2">
          <a class="back" @click="close('cert')">닫기</a>
          <h3>전화번호 인증하기</h3>
        </div>

        <div class="wrap">
          <div class="inp-wrap">
            <p class="tit">문자 메시지를 통해 <span>{{this.infoList[1].text}}</span> 번호로<br> 보내드린 인증 코드를 입력해주세요</p>

            <div class="cert-wrap error">
              <label><input type="number" placeholder="ㅡ"></label>
              <label><input type="number" placeholder="ㅡ"></label>
              <label><input type="number" placeholder="ㅡ"></label>
              <label><input type="number" placeholder="ㅡ"></label>
              <label><input type="number" placeholder="ㅡ"></label>
            </div>

            <div class="msg">
              <p>문자 메시지가 오지 않았나요?</p>
              <a class="code-send">다시 보내기</a>
            </div>
          </div>

          <div class="btn-wrap">
            <a class="btn save">계속</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PhoneEdit",
  data() {
    return {
      name: '홍길동',
      infoList: [
        {tit: '이메일', text: 'hyg9305@gmail.com'},
        {tit: '전화번호', text: '+82  10 - 3070 - 9305'},
        {tit: '생년월일', text: '2000. 7. 21.'},
        {tit: '성별', text: '남성'},
      ],
      isDim: false,
      isCert: false,
      winH: 0,
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.winH = window.innerHeight;
    },
    editPageOpen() {
      this.isCert = true;
      this.isDim = true;
    },
    close() {
      this.isCert = false;
      this.isDim = false;
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
  section .wrap { padding: 30px 20px; box-sizing: border-box; }
  input { outline: none; }
  input[type=number]::-webkit-outer-spin-button,input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0;}

  [privacy] { overflow: hidden; }
  .dim { background: rgba(0,0,0,0.3); position: fixed; left:0; top:0; width:100%; height:100%; opacity: 0; transition: opacity 0.3s; animation-timing-function: ease-out; }

  section { background: #fff; position: relative; }
  .top-btns { height: 100px; border-bottom: 1px solid; border-color: #F5F5F5; position: relative; }
  .top-btns .back { font-size: 0; width:65px; height:53px; display: block; }
  .top-btns.type1 .back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:12px; }
  .top-btns.type1 h2 { padding-top: 0; }
  .top-btns.type1 .status-txt { font-size: 16px; font-weight: 500; color:#bbb; position: absolute; right:20px; bottom: 15px; }

  .top-btns.type2 { height:70px; }
  .top-btns.type2 .back { position: absolute; left: 0; top: 17px; }
  .top-btns.type2 .back:after { content: ''; width:22px; height:22px; background: url("~@/assets/images/mypage/ico-close.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:16px; }
  .top-btns.type2 h3 { text-align: center; display: block; padding-top: 30px; }

  .wrap .inp-wrap { padding-bottom: 30px; border-bottom: 1px solid rgb(245,245,245); }
  .wrap .inp-wrap .tit { font-size: 16px; line-height: 23px; font-weight: 500; margin-bottom: 40px; }
  .wrap .inp-wrap label { border: 1px solid rgb(229,229,229); border-radius: 5px; padding:10px 12px; box-sizing: border-box; display: block; }
  .wrap .inp-wrap label span { font-size: 12px; color:#808080; display: block; }
  .wrap .inp-wrap label input { font-size: 16px; color:#606060; font-weight: 500; display: block; border: none; }

  .phone-edit { height: 100%; }
  .phone-edit .wrap .tit { font-size: 20px; line-height: 29px; color:#606060; font-weight: 500; margin-bottom: 30px; }
  .phone-edit .wrap span { font-size: 14px; color:#808080; font-weight: 500; display: block; }
  .phone-edit .wrap .phone-wrap { margin-top: 10px; padding: 6px 0; border-bottom: 1px solid rgb(245,245,245); box-sizing: border-box; }
  .phone-edit .wrap .phone-wrap label { display: inline-block; box-sizing: border-box; position: relative; }
  .phone-edit .wrap .phone-wrap label input { padding: 0 26px 0 12px; box-sizing: border-box; border: none; }
  .phone-edit .wrap .phone-wrap label:nth-child(1) { width: 70px; }
  .phone-edit .wrap .phone-wrap label:nth-child(1):after { content:''; width:1px; height:25px; background: #F5F5F5; position: absolute; right: 0; top: 0; }
  .phone-edit .wrap .phone-wrap label:nth-child(1) input { font-size: 16px; color:#606060; }
  .phone-edit .wrap .phone-wrap label:nth-child(2) input { font-size: 20px; color:var(--color-main); }
  .phone-edit .wrap .phone-wrap label:nth-child(2) input::placeholder { font-size: 20px; color:var(--color-main); }

  .phone-cert .wrap .tit span { color:var(--color-main); }
  .phone-cert .wrap .cert-wrap { width: 232px; height: 54px; border: 1px solid rgb(245,245,245); border-radius: 5px; display: block; padding: 0; text-align: center; overflow: hidden; }
  .phone-cert .wrap .cert-wrap label { display: inline-block; vertical-align: middle; border: none; padding: 0; }
  .phone-cert .wrap .cert-wrap input { width: 30px; height: 52px; line-height: 52px; text-align: center; border: none; }
  .phone-cert .wrap .cert-wrap.error input::placeholder { color:var(--color-main); }
  .phone-cert .wrap .inp-wrap .msg { margin-top: 30px; }
  .phone-cert .wrap .inp-wrap .msg p, .phone-cert .wrap .inp-wrap .code-send { font-size:16px; color:#ADADAD; display: inline-block; }
  .phone-cert .wrap .inp-wrap .code-send { color:#101014; border-bottom: 1px solid; border-color: #101014; margin-left: 8px; }

  .edit-page { position: fixed; left:0; bottom:0; width:100%; height:100%; z-index: 10; background: #fff; transform: translateY(100%); transition: transform 0.5s; animation-timing-function: ease-out;  border-top-left-radius: 25px; border-top-right-radius: 25px; }
  .btn-wrap { width: 100%; position: absolute; left:0; bottom: 30px; text-align: center; }
  .btn { font-size: 20px; font-weight: 500; text-align: center; border: 1px solid; border-color: var(--color-main); line-height: 44px; padding: 0 100px; box-sizing: border-box; border-radius: 23px; cursor:pointer; }
  .edit-page.open { transform: translateY(0); }
  .dimOpen .dim { opacity:0.5; z-index: 5; }
  .error { border-color: var(--color-main) !important; }
</style>