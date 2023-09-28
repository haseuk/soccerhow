<template>
  <div login :class="{dimOpen:isDim}">
    <div class="dim"></div>
    <div class="top-cont">
      <div class="top-btns type1">
        <RouterLink to="/mypage_main" class="back" >뒤로가기 </RouterLink>
        <h2>로그인/보안</h2>
      </div>
    </div>

    <section class="login">
      <div class="content-detail">
        <ul>
          <li>
            <h3>로그인</h3>
            <p class="tit">계정</p>
            <span>{{email}}</span>
          </li>
          <li>
            <p class="tit">비밀번호</p>
            <a class="change" @click="editPageOpen('change')">변경</a>
            <span>마지막 수정일 : {{lastDate}}년 전</span>
          </li>
          <li>
            <h3>계정</h3>
            <RouterLink to="/account">계정 비활성화</RouterLink>
            <RouterLink to="/withdrawal">회원 탈퇴</RouterLink>
            <a class="log-toggle" @click="logToggle">{{logStatus}}</a>
          </li>
        </ul>
      </div>
    </section>

    <div class="pop" v-if="active === 'logout'">
      <div class="dim"></div>
      <div class="inner">
        <p class="tit">로그아웃</p>
        <p class="txt">잠시 로그아웃할까요?<br> 언제든 다시 로그인할 수 있어요</p>
        <div class="btns">
          <a class="logout" @click="logToggle">로그아웃</a>
          <a class="cancel" @click="active = ''">취소하기</a>
        </div>
      </div>
    </div>

    <!--비밀번호변경-->
    <section class="edit-page" :class="{open:isChange}">
      <div class="inner">
        <div class="top-btns type2">
          <a class="back" @click="close('change')">닫기</a>
          <h3>비밀번호 변경</h3>
        </div>
      </div>

      <div class="content-detail">
        <h4>새로운 비밀번호로 변경할게요</h4>

        <p class="tit">현재 비밀번호</p>
        <label>
          <input type="password" placeholder="비밀번호를 입력하세요">
        </label>

        <p class="tit">새 비밀번호</p>
        <label>
          <input type="password" placeholder="비밀번호를 입력하세요">
        </label>

        <p class="tit">비밀번호 확인</p>
        <label>
          <input type="password" placeholder="비밀번호를 입력하세요">
        </label>

        <div class="btn-wrap">
          <a class="btn save" @click="close('change')">저장하기</a>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isDim: false,
      isChange: false,
      email: 'h******5@gamil.com',
      lastDate: 1,
      logStatus: '로그아웃',
      active: '',

    }
  },
  methods: {
    editPageOpen(v) {
      if(v === 'change') this.isChange = true;
      this.isDim = true;
    },
    close(v) {
      if(v === 'change') this.isChange = false;
      this.isDim = false;
    },
    logToggle() {
      if(this.active === '') {
        this.active = 'logout';
      } else {
        this.active = '';
        this.logStatus = '로그인';
      }
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

  [login] { overflow: hidden; }
  .dim { background: rgba(0,0,0,0.3); position: fixed; left:0; top:0; width:100%; height:100%; opacity: 0; transition: opacity 0.3s; animation-timing-function: ease-out; }

  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; }
  .top-btns { height: 100px; border-bottom: 1px solid; border-color: #F5F5F5; position: relative; }
  .top-btns .back { font-size: 0; width:65px; height:53px; display: block; }
  .top-btns.type1 .back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:12px; }
  .top-btns.type1 h2 { padding-top: 0; }

  .top-btns.type2 { height:70px; }
  .top-btns.type2 .back { position: absolute; left: 0; top: 17px; }
  .top-btns.type2 .back:after { content: ''; width:22px; height:22px; background: url("~@/assets/images/mypage/ico-close.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:16px; }
  .top-btns.type2 h3 { text-align: center; display: block; padding-top: 30px; }

  .login { margin-top: 100px; }
  .login .content-detail ul li { font-size: 14px; padding: 20px 0; box-sizing: border-box; position: relative; border-bottom: 1px solid #F5F5F5; }
  .login .content-detail ul li:last-child { border-bottom:none; }
  .login .content-detail ul li h3 { margin-bottom: 25px; }
  .login .content-detail ul li p, .login .content-detail ul li span, .login .content-detail ul li a { color:#606060; line-height: 20px; font-weight: 500; }
  .login .content-detail ul li span { color:#808080; font-weight: 400; }
  .login .content-detail ul li a { display: block; margin-bottom: 20px; }
  .login .content-detail ul li a:last-child { margin-bottom: 0; text-decoration: underline; }
  .login .content-detail ul li .change { position: absolute; right:0; top:20px; text-decoration: underline; }

  .content-detail { padding: 30px 20px; box-sizing: border-box; }
  .content-detail h4 { margin-bottom: 40px; }
  .content-detail .tit { font-size: 16px; line-height: 23px; font-weight: 500; color:#606060; margin-bottom: 6px; }
  .content-detail label { border: 1px solid rgb(229,229,229); border-radius: 5px; padding:10px 12px; box-sizing: border-box; display: block; margin-bottom: 16px; }
  .content-detail label:first-of-type { margin-bottom: 35px; }
  .content-detail label input { font-size: 16px; border: none; }
  .content-detail label input::placeholder { color:#bbb; }

  .pop { position: fixed; left:0; top:0; width: 100%; height: 100%; z-index: 10; }
  .pop .dim { background: rgba(0,0,0,0.3); position: absolute; left:0; top:0; width: 100%; height: 100%; opacity: 1; }
  .pop .inner { width: 280px; background: #fff; border-radius: 12px; text-align: left; box-shadow: 0 10px 10px 0 rgba(0,0,0,0.5); position: absolute; left:50%; margin-left: -140px; top:50%; margin-top: -100px; padding: 20px; box-sizing: border-box; }
  .pop .tit { font-size: 16px; line-height: 23px; font-weight: 500; margin-bottom: 8px; color:#000; }
  .pop .txt { font-size: 15px; line-height: 22px; color:#606060; margin-bottom: 20px; }
  .pop .btns { display: flex; justify-content: space-between; }
  .pop .btns a { font-size: 15px; font-weight: 500; width:116px; height: 40px; line-height: 40px; text-align: center; border-radius: 20px; border: 1px solid #D9D9D9; box-sizing: border-box; }
  .pop .btns a.logout { border-color:var(--color-main); }

  .edit-page { position: fixed; left:0; bottom:0; width:100%; min-height:70%; z-index: 10; background: #fff; transform: translateY(100%); transition: transform 0.5s; animation-timing-function: ease-out;  border-top-left-radius: 25px; border-top-right-radius: 25px; padding-bottom: 70px; box-sizing: border-box; }
  .btn-wrap { width: 100%; position: absolute; left:0; bottom: 30px; text-align: center; }
  .btn { font-size: 20px; font-weight: 500; text-align: center; border: 1px solid; border-color: var(--color-main); line-height: 44px; width:274px; height:46px; border-radius: 23px; cursor:pointer; }
  .btn.update { color:var(--color-main); margin-bottom: 15px; }
  .edit-page.open { transform: translateY(0); }
  .dimOpen .dim { opacity:0.5; z-index: 5; }
</style>