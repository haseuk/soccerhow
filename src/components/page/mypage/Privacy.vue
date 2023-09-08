<template>
  <div privacy :class="{dimOpen:isDim}">

    <div class="dim"></div>

    <section>
      <div class="top-btns type1">
        <RouterLink to="/mypage_main" class="back" >뒤로가기 </RouterLink>
        <h2>개인정보</h2>
        <p class="status-txt">수정 완료</p>
      </div>

      <div class="wrap">
        <div class="inp-wrap">
          <label>
            <span>이름</span>
            <input type="text" :value="name" readonly>
          </label>
        </div>
        <ul class="user-info">
          <li v-for="(info, i) in infoList" :key="i">
            <p class="tit">{{info.tit}}</p>
            <p class="info-txt">{{info.text}}</p>
            <a class="edit" @click="editPageOpen(i)">수정하기</a>
          </li>
        </ul>
      </div>
    </section>

    <section class="email-edit edit-page" :class="{open:isEmail}" :style="`height:${this.winH - 100 }px`">
      <div class="inner">
        <div class="top-btns type2">
          <a class="back" @click="close('email')">닫기</a>
          <h3>이메일 수정</h3>
        </div>

        <div class="wrap">
          <div class="inp-wrap">
            <p class="tit">새로운 이메일 주소로 변경할게요</p>
            <label>
              <span>이메일</span>
              <input type="text" :placeholder="this.infoList[0].text">
            </label>
          </div>

          <div class="btn-wrap">
            <a class="btn save">저장하기</a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Privacy",
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
      isEmail: false,
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
    editPageOpen(v) {
      if(v === 0) this.isEmail = true;
      else this.$router.push('phone_edit')
      this.isDim = true;
    },
    close(v) {
      if(v === 'email') this.isEmail = false;
      if(v === 'phone') this.isPhone = false;
      if(v === 'cert') this.isCert = false;
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

  .wrap .inp-wrap { padding-bottom: 30px; border-bottom: 1px solid rgb(245,245,245); }
  .wrap .inp-wrap .tit { font-size: 16px; line-height: 23px; font-weight: 500; margin-bottom: 40px; }
  .wrap .inp-wrap label { border: 1px solid rgb(229,229,229); border-radius: 5px; padding:10px 12px; box-sizing: border-box; display: block; }
  .wrap .inp-wrap label span { font-size: 12px; color:#808080; display: block; }
  .wrap .inp-wrap label input { font-size: 16px; color:#606060; font-weight: 500; display: block; border: none; }

  .wrap .user-info li { padding: 30px 0 20px; box-sizing: border-box; border-bottom: 1px solid rgb(245,245,245); position: relative; }
  .wrap .user-info li p, .wrap .user-info li .edit { font-size: 14px; line-height: 20px; color:#606060; }
  .wrap .user-info li .tit { font-size: 16px; line-height: 23px; margin-bottom: 15px; }
  .wrap .user-info li .info-txt { color:var(--color-main); }
  .wrap .user-info li .edit { position: absolute; right:0; top:30px; border-bottom: 1px solid rgb(96,96,96); }
  .wrap .user-info li:nth-child(3) .edit, .wrap .user-info li:nth-child(4) .edit { display: none; }

  .top-btns.type2 { height:70px; }
  .top-btns.type2 .back { position: absolute; left: 0; top: 17px; }
  .top-btns.type2 .back:after { content: ''; width:22px; height:22px; background: url("~@/assets/images/mypage/ico-close.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:16px; }
  .top-btns.type2 h3 { text-align: center; display: block; padding-top: 30px; }

  .email-edit .inner { width: 100%; height: 100%; position: absolute; left:0; bottom: 0; }
  .email-edit .inp-wrap label input { font-weight: 400; }

  .edit-page { position: fixed; left:0; bottom:0; width:100%; height:100%; z-index: 10; background: #fff; transform: translateY(100%); transition: transform 0.5s; animation-timing-function: ease-out;  border-top-left-radius: 25px; border-top-right-radius: 25px; }
  .btn-wrap { width: 100%; position: absolute; left:0; bottom: 65px; text-align: center; }
  .btn { font-size: 20px; font-weight: 500; text-align: center; border: 1px solid; border-color: var(--color-main); line-height: 44px; padding: 0 100px; box-sizing: border-box; border-radius: 23px; cursor:pointer; }
  .edit-page.open { transform: translateY(0); }
  .dimOpen .dim { opacity:0.5; z-index: 5; }
  .error { border-color: var(--color-main) !important; }
</style>