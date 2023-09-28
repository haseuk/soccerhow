<template>
  <div payment :class="{dimOpen:isDim}">

    <div class="dim"></div>

    <div class="top-cont">
      <div class="top-btns type1">
        <RouterLink to="/mypage_main" class="back" >뒤로가기 </RouterLink>
        <h2>결제수단 등록</h2>
      </div>
    </div>

    <section class="payment">
      <div class="wrap">
        <p class="tit">기본 결제수단</p>
        <div class="card-list">
          <div class="info">
            <div class="logo"><img src="@/assets/images/mypage/ico-card.png" alt=""></div>
            <div class="card-info">
              <p class="comp">{{cardList[0].num}}</p>
              <p class="exp">{{cardList[0].exp}}</p>
            </div>
            <span class="set" @click="editPageOpen('set')">설정</span>
          </div>
        </div>

        <p class="tit">등록된 카드 ({{cardList.length}})</p>
        <div class="card-list" v-for="(item, i) in cardList" :key="i">
          <div class="info">
            <div class="logo"><img src="@/assets/images/mypage/ico-card.png" alt=""></div>
            <div class="card-info">
              <p class="comp">{{item.num}} <span v-if="item.type === 'a'">기본</span></p>
              <p class="exp">{{item.exp}}</p>
            </div>
            <span class="set" @click="editPageOpen('set')">설정</span>
          </div>
        </div>
        <div class="btns">
          <a class="btn add" @click="editPageOpen('add')">+ 결제수단 추가</a>
        </div>

        <div class="notice">
          <div class="inner">
            <img src="@/assets/images/mypage/ico-pay.png" alt="">
            <p class="tit">사커하우에서만 결제하세요!</p>
            <p class="txt">
              금전거래는 안전이 우선입니다.<br>
              사커하우의 결제 시스템과 <b>환불 정책</b>의 보호를 받으면서 안전하게 금전거래를 하기 위해서는 꼭 사커하우를 통해서 결제를 진행해주세요.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--설정-->
    <section class="edit-page edit-set" :class="{open:isSet}">
      <div class="inner">
        <div class="top-btns type2">
          <a class="close" @click="close('set')">닫기</a>
          <h3>설정</h3>
        </div>

        <div class="content-detail">
          <ul>
            <li><a @click="active = 'defualt'">기본 결제수단 등록</a></li>
            <li><a @click="active = 'del'">삭제</a></li>
          </ul>
        </div>
      </div>
    </section>

    <!--결제수단추가-->
    <section class="edit-page edit-add" :class="{open:isAdd}">
      <div class="inner">
        <div class="top-btns type2">
          <a class="close" @click="close('add')">닫기</a>
          <h3>결제수단 추가</h3>
        </div>

        <div class="content-detail">
          <ul>
            <li><RouterLink to="/card_add"><img src="@/assets/images/mypage/ico-credit.png" alt=""> 신용/체크카드</RouterLink></li>
          </ul>
        </div>
      </div>
    </section>

    <div class="pop" v-if="active === 'defualt'">
      <div class="dim"></div>
      <div class="inner">
        <p class="tit">기본 결제수단 등록</p>
        <p class="txt">선택하신 결제수단을 기본 결제수단으로 등록할까요?</p>
        <div class="btns">
          <a class="regis" @click="regis">등록하기</a>
          <a class="cancel" @click="active = ''">취소하기</a>
        </div>
      </div>
    </div>

    <div class="pop" v-if="active === 'del'">
      <div class="dim"></div>
      <div class="inner">
        <p class="tit">결제수단 삭제</p>
        <p class="txt">선택하신 결제수단을 삭제할까요?</p>
        <div class="btns">
          <a class="regis" @click="del">삭제하기</a>
          <a class="cancel" @click="active = ''">취소하기</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Payment",
  data() {
    return {
      isDim: false,
      isEmail: false,
      cardList: [
        //기본카드 리스트가 항상 위
        { tit: '기본 결제수단', num: '현대카드(****5410)', exp: '05/2025', type:'a'}, //type = a 기본카드, type = b는 일반카드
        { tit: '등록된 카드', num: '토스뱅크카드(****5410)', exp: '05/2025', type:'b'}
      ],
      isSet: false,
      isAdd: false,
      active: '',
    }
  },
  methods: {
    editPageOpen(v) {
      if(v === 'set') this.isSet = true;
      if(v === 'add') this.isAdd = true;
      this.isDim = true;
    },
    close(v) {
      if(v === 'set') this.isSet = false;
      if(v === 'add') this.isAdd = false;
      this.isDim = false;
    },
    regis() {
      this.active = '';
      this.close('set');
    },
    del() {
      this.active = '';
      this.close('set');
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

  [payment] { overflow: hidden; margin-top: 100px; }
  .dim { background: rgba(0,0,0,0.3); position: fixed; left:0; top:0; width:100%; height:100%; opacity: 0; transition: opacity 0.3s; animation-timing-function: ease-out; }

  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; }
  section { background: #fff; position: relative; }
  .top-btns { height: 100px; border-bottom: 1px solid; border-color: #F5F5F5; position: relative; }
  .top-btns .back { font-size: 0; width:65px; height:53px; display: block; }
  .top-btns.type1 .back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:12px; }
  .top-btns.type1 h2 { padding-top: 0; }
  .top-btns.type1 .status-txt { font-size: 16px; font-weight: 500; color:#bbb; position: absolute; right:20px; bottom: 15px; }

  .edit-page { position: fixed; left:0; bottom:0; width:100%; min-height:40%; z-index: 10; background: #fff; transform: translateY(100%); transition: transform 0.5s; animation-timing-function: ease-out;  border-top-left-radius: 25px; border-top-right-radius: 25px; box-sizing: border-box; }
  .edit-page .top-btns.type2 { height: auto; text-align: right; padding: 20px 10px 20px 20px; box-sizing: border-box; }
  .edit-page .top-btns.type2 .close { font-size: 0; width: 45px; height:45px; background: url("~@/assets/images/mypage/ico-x.png")0 0 no-repeat; background-size: contain; position: absolute; right:10px; top:50%; transform: translateY(-50%); }
  .edit-page .top-btns.type2 h3 { text-align: center; display: block; }
  .btn-wrap { width: 100%; position: absolute; left:0; bottom: 30px; text-align: center; }
  .btn { font-size: 20px; font-weight: 500; text-align: center; border: 1px solid; border-color: var(--color-main); line-height: 44px; padding: 0 100px; box-sizing: border-box; border-radius: 23px; cursor:pointer; }
  .edit-page.open { transform: translateY(0); }
  .dimOpen .dim { opacity:0.5; z-index: 5; }

  .payment .wrap .card-list { padding: 20px 0; box-sizing: border-box; margin-bottom: 10px; border-bottom: 1px solid #F5F5F5; }
  .payment .wrap .card-list:last-of-type { margin-bottom: 0; }
  .payment .wrap .tit { font-size: 14px; line-height: 20px; color:#606060; font-weight: 500; margin-top: 30px; }
  .payment .wrap .tit:first-of-type { margin-top: 0; }
  .payment .wrap .info { position: relative; }
  .payment .wrap .info .logo { width: 60px; height:40px; border:1px solid #d9d9d9; box-sizing: border-box; border-radius: 2px; position: relative; display: inline-block; margin-right: 15px; vertical-align: middle; }
  .payment .wrap .info .logo img { position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }
  .payment .wrap .info .card-info { display: inline-block; vertical-align: middle; }
  .payment .wrap .info .card-info p { font-size: 14px; line-height: 20px; font-weight: 500; }
  .payment .wrap .info .card-info p.exp { font-weight: 400; color:#808080; }
  .payment .wrap .info .card-info .comp span { font-size: 12px; color: #fff; text-align: center; font-weight: 500; width: 40px; line-height: 20px; background: var(--color-main); border-radius: 11px; display: inline-block; }
  .payment .wrap .info .set { font-size: 14px; line-height: 20px; color:#606060; text-decoration: underline; position: absolute; right:0; top:0; }
  .add { font-size: 16px; line-height: 33px; padding: 0 30px; margin-top: 20px; }
  .notice { margin-top: 60px; padding: 30px 20px; box-sizing: border-box; box-shadow: 0 0 10px 0 rgba(16, 16, 20, 0.2); border-radius: 10px; }
  .notice img { margin: 0 auto; display: block; }
  .notice .inner .tit { font-size: 16px; line-height: 23px; margin-top: 20px!important; color: #101014; }
  .notice .inner .txt { font-size: 14px; line-height: 20px; margin-top: 10px; color: #808080; }
  .notice .inner .txt b { color: #101014; text-decoration: underline; }

  .edit-page .content-detail { text-align: center; }
  .edit-page .content-detail ul li { border-bottom: 1px solid #F5F5F5; }
  .edit-page .content-detail ul li a { padding: 30px 0 15px; }
  .edit-page .content-detail ul li:last-child { border-bottom: none; }
  .edit-add .content-detail ul li img { vertical-align: middle; margin-top: -3px; }

  .pop { position: fixed; left:0; top:0; width: 100%; height: 100%; z-index: 10; }
  .pop .dim { background: rgba(0,0,0,0.3); position: absolute; left:0; top:0; width: 100%; height: 100%; opacity: 1; }
  .pop .inner { width: 280px; background: #fff; border-radius: 12px; text-align: left; box-shadow: 0 0 10px 0 rgba(0,0,0,0.5); position: absolute; left:50%; margin-left: -140px; top:50%; margin-top: -100px; padding: 20px; box-sizing: border-box; z-index: 12; }
  .pop .tit { font-size: 16px; font-weight: 500; margin-bottom: 8px; color:#000; }
  .pop .txt { font-size: 15px; line-height: 22px; color:#606060; margin-bottom: 20px; }
  .pop .btns { display: flex; justify-content: space-between; }
  .pop .btns a { font-size: 15px; font-weight: 500; width:116px; height: 40px; line-height: 40px; text-align: center; border-radius: 20px; border: 1px solid #D9D9D9; box-sizing: border-box; }
  .pop .btns a.regis { border-color:var(--color-main); }
</style>