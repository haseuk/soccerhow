<template>
  <div account>
    <div class="top-cont" :class="{on:isOn}">
      <div class="top-btns">
        <RouterLink to="/login" class="back" >뒤로가기 </RouterLink>
        <h2><img src="@/assets/images/mypage/ico-account.png" alt=""></h2>
      </div>
    </div>

    <!--계정비활성화-->
    <section class="account" v-if="active === 'account'">
      <div class="content-detail">
        <h2>계정을 비활성화하려는 이유를<br> 선택해주세요</h2>

        <p class="txt">계정 비활성화는 일시적으로 계정 사용을 안 하는 방법 입니다. 비활성화를 진행하면 다시 로그인 후 활성화를 하기까지 프로필이 숨겨지게 됩니다.</p>
        <ul>
          <li v-for="(item, i) in list" :key="i">
            <label>
              <input type="checkbox">
              <span>{{item}}</span>
              <i></i>
            </label>
          </li>
          <li class="dir">
            <label>
              <input type="checkbox">
              <span>프로필을 숨겨야 하는 이유가 있어요 <s>(직접 입력)</s></span>
              <i @click="dir = 'dir'"></i>
            </label>
            <label v-if="dir === 'dir'">
              <input type="text" placeholder="이유를 입력해주세요">
            </label>
          </li>
        </ul>
      </div>
      <div class="btn-wrap">
        <a class="btn next" @click="active = 'account-step-a'">다음</a>
      </div>
    </section>

    <!--계정비활성화확인-->
    <section class="account-step-a" v-if="active === 'account-step-a'">
      <div class="content-detail">
        <h2>계정 비활성화 확인</h2>

        <p class="txt">
          소중한 의견 감사합니다.<br>
          아래 버튼만 누르면 회원님의 계정은 비활성화됩니다.<br>
          앱을 켜고 <b>[계정 활성화 버튼]</b>을 누르면
          언제든 돌아올 수 있어요. 잘 쉬고 오세요!
        </p>
      </div>
      <div class="btn-wrap">
        <a class="btn disabled" @click="active = 'disabled-account'">계정 비활성화</a>
        <RouterLink class="btn cancel" to="/account">취소</RouterLink>
      </div>
    </section>

    <section class="disabled-account" v-if="active === 'disabled-account'">
      <img src="@/assets/images/mypage/account.png" alt="">
      <h2 class="tit">{{tit}}</h2>
      <p class="txt">활동을 재게하시려면 언제든 계정 활성화 버튼을 눌러서 활동을 다시 할 수 있어요</p>
      <div class="btn-wrap">
        <a class="btn activate" @click="activate">계정 활성화</a>
      </div>
    </section>


    <!--계정활성화중-->
    <section class="activating" :class="{on:trigger}" v-if="active === 'activating'">
      <h2>계정을 활성화하는 중이예요</h2>
      <ul>
        <li><span class="w1"></span></li>
        <li><span class="w2"></span></li>
        <li><span class="w3"></span></li>
        <li><span class="w4"></span></li>
      </ul>
      <ul>
        <li><span class="w5"></span></li>
        <li><span class="w6"></span></li>
        <li><span class="w7"></span></li>
        <li><span class="w8"></span></li>
      </ul>
    </section>

    <!--계정 다시 활성화-->
    <section class="reactivate" v-if="active === 'reactivate'">
      <h2>계정을 활성화했어요!<br> 이제 다시 활동할 수 있어요</h2>

      <div class="cont-wrap">
        <div class="cont-top">
          <h4>나의 프로필</h4>
          <div class="thumb"><img :src="require(`@/assets/images/mypage/${thumbSrc}.png`)" alt=""></div>
          <div class="naming">
            <p class="nick">{{naming.nick}}</p>
            <p class="pos">{{naming.pos}}</p>
            <span class="mark"><img :src="require(`@/assets/images/mypage/${markSrc}.png`)" alt=""></span>
          </div>
        </div>
      </div>
      <div class="btn-wrap">
        <RouterLink class="btn" to="/login">확인</RouterLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {
      list: ['잠시 쉬고 싶어요','한동안 사용을 안 하고 싶어요','사생활 노출 위험이 있어 보여요','삭제하거나 변경해야 할 내용이 있어요','축구를 더이상 하지 않아요'],
      active: 'account',
      isOn: true,
      dir: false,
      tit: '계정을 비활성화 했습니다.',
      step: 0,
      trigger: false,

      naming: {
        nick: '감자튀김볶음밥', pos:'CF'
      },
      thumbSrc: 'thumb',
      markSrc: 'feCheckVerified0',
    }
  },
  methods: {
    activate() {
      if(this.step === 1) {
        this.active = 'activating';
        setTimeout(()=> {
          this.trigger = true;
        }, 300);
        setTimeout(()=> {
          this.active = 'reactivate';
        }, 3000)
      }
      else this.tit = '계정이 비활성화 상태입니다.'; this.step += 1;
    }
  },
  watch: {
    active: function() {
      if(this.active !== 'account' && this.active !== 'account-step-a') this.isOn = false;
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

  [account] { overflow: hidden; }
  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; display: none; }
  .top-cont.on { display: block; }

  section {position: relative; margin-top:60px; }
  .top-btns { height: 60px; border-bottom: 1px solid; border-color: #F5F5F5; padding-top: 7px; box-sizing: border-box; text-align: center; }
  .top-btns h2 { padding: 0; display: inline-block; border-bottom: none; }
  .top-btns a.back { font-size: 0; width:65px; height:53px; position: absolute; left: 0; top:7px; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:12px; }

  .content-detail { padding: 30px 20px 150px; box-sizing: border-box; }
  .content-detail h2 { padding-left: 0; margin-bottom: 12px; }
  .content-detail .txt { font-size: 14px; line-height: 20px; color:#606060; }
  .content-detail ul { margin-top: 20px; }
  .content-detail ul li { border-bottom: 1px solid #F5F5F5; padding: 20px 0; box-sizing: border-box; }
  .content-detail ul li:last-child { border-bottom:none; }
  .content-detail ul li label { display: block; position: relative; }
  .content-detail ul li span { font-size: 16px; color:#606060; font-weight: 500; }
  .content-detail ul li span s { color:#BBBBBB; text-decoration: none; }
  .content-detail ul li label input[type=checkbox] + span + i { width: 100%; height: 100%; display: block; position: absolute; left:0; top:0; }
  .content-detail ul li label input[type=checkbox]:checked + span + i:after { content:''; width: 13px; height: 10px; background: url("~@/assets/images/mypage/ico-chkd.png")0 0 no-repeat; background-size: contain; position: absolute; right:0; top:50%; margin-top: -5px; }
  .content-detail ul li label input::placeholder { color:#bbb; }
  .content-detail ul li label input[type=checkbox] { display: none; }

  .content-detail ul li.dir label input[type=text] { font-size: 16px; width: 100%; height:40px; line-height: 40px; border: 1px solid #e5e5e5; border-radius: 5px; display: block;  padding: 0 10px; box-sizing: border-box; margin-top: 10px; }
  .btn-wrap { width: 100%; position: absolute; left:0; bottom: 30px; text-align: center; }
  .btn { font-size: 20px; font-weight: 500; text-align: center; border: 1px solid; border-color: var(--color-main); line-height: 44px; width:274px; height:46px; border-radius: 23px; cursor:pointer; }
  .btn.disabled { color: var(--color-main); margin-bottom:10px; }

  .disabled-account { text-align: center; padding: 50px 18px; box-sizing: border-box; }
  .disabled-account img { margin: 0 auto; }
  .disabled-account .tit { margin: 50px 0 15px; }
  .disabled-account .txt { font-size: 20px; line-height: 29px; text-align: left; font-weight: 400; color:#606060; margin-bottom: 80px; }
  .disabled-account .btn { color:var(--color-main); }

  .activating ul { padding: 30px 0; box-sizing: border-box; }
  .activating ul:first-of-type { border-bottom: 10px solid #F5F5F5; }
  .activating ul li { padding: 0 20px; box-sizing: border-box; margin-bottom: 10px; }
  .activating ul li:nth-child(2) { margin-bottom: 25px; }
  .activating ul li:last-child { margin-bottom: 0; }
  .activating ul li span { width:18px; height: 18px; background: #F5F5F5; border-radius: 9px; display: block; }
  .activating.on ul li span.w1 { width:200px; transition: width 2s; animation-timing-function: ease-out; }
  .activating.on ul li span.w2 { width:180px; transition: width 2s; animation-timing-function: ease-in-out; }
  .activating.on ul li span.w3 { width:150px; transition: width 2s; transition-delay: 0.2s; animation-timing-function: linear; }
  .activating.on ul li span.w4 { width:180px; transition: width 2s; transition-delay: 0.4s; animation-timing-function: ease-in; }
  .activating.on ul li span.w5 { width:220px; transition: width 2.5s; animation-timing-function: ease-out; }
  .activating.on ul li span.w6 { width:210px; transition: width 2.3s; animation-timing-function: ease-in-out; }
  .activating.on ul li span.w7 { width:160px; transition: width 2s; transition-delay: 0.2s; animation-timing-function: linear; }
  .activating.on ul li span.w8 { width:170px; transition: width 2s; transition-delay: 0.4s; animation-timing-function: ease-in; }

  .reactivate { padding: 0 20px 30px; box-sizing: border-box; text-align: center; }
  .cont-wrap { padding:30px 20px; box-sizing: border-box; border-radius: 20px; background: rgba(255,255,255,1); box-shadow: 0 5px 10px 0 rgba(16, 16, 20, 0.2); margin: 50px 0 100px; }
  .cont-top h4 { text-align: left; }
  .cont-top .thumb { width: 200px; height: 200px; border-radius: 50%; margin: 0 auto; overflow: hidden; box-shadow: 0 5px 10px 0 rgba(16, 16, 20, 0.2); position: relative; }
  .cont-top .thumb img { width: 200px; height: 200px; position: absolute; left: 50%; top:50%; transform: translate(-50%,-50%); }
  .cont-top .naming { margin-top: 20px; text-align: center; }
  .cont-top .naming p,.profile-intro .profile .cont-top .naming span { display: inline-block; vertical-align: middle; margin: 0 3px; }
  .cont-top .naming .nick { font-size: 16px; line-height: 23px; font-weight: 700; }
  .cont-top .naming .pos { font-size: 15px; line-height: 23px; font-weight: 900; color:#808080; }
  .cont-top .naming .mark { width:14px; height:14px; vertical-align: middle; }
</style>