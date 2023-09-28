<template>
  <div notification :class="{dimOpen:isDim}">
    <div class="dim"></div>
    <div class="top-cont">
      <div class="top-btns">
        <RouterLink to="/mypage_main" class="back" >뒤로가기 </RouterLink>
        <h2>공지사항</h2>
      </div>
    </div>

    <section>
      <div class="content-detail">
        <ul>
          <li v-for="(item, i) in list" :key="i">
            <p class="date">등록일: {{item.date}}</p>
            <p class="tit">{{item.tit}}</p>
            <a @click="editPageOpen('noti')">팝업열기</a>
          </li>
        </ul>
      </div>
    </section>

    <section class="edit-page" :class="{open:isNoti}">
      <div class="top-btns type1">
        <a class="close" @click="close('noti')">닫기</a>
        <span>공지사항</span>
      </div>

      <div class="content">
        <p class="tit">1.0 업데이트 소식 안내</p>
        <p class="date">등록일 : 2023.08.18 / 17:14</p>

        <p class="txt">
          안녕하세요 사커하우입니다. 8월 17일 1.0 버전의 일부 기능이 수정되었습니다.<br>
          <br>
          수정 내용은 아래와 같습니다.
        </p>
        <ol>
          <li>사커하우 UI</li>
          <li>조인 - 조인방 내부 UI</li>
          <li>일부 다른 것도 다 수정함</li>
        </ol>
        <p class="txt">아래 이미지를 참조하세요</p>
        <div class="img-box">
          <img src="@/assets/images/mypage/dummy.png" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Notification",
  data() {
    return {
      list: [
        {date: '2023.08.18 / 17:14', tit: '1.0 업데이트'},
        {date: '2023.08.18 / 17:14', tit: '용병 기능 수정 소식'},
        {date: '2023.08.18 / 17:14', tit: '사커하우 빠른답변 업데이트'},
        {date: '2023.08.18 / 17:14', tit: '조인 기능 수정 소식'},
        {date: '2023.08.18 / 17:14', tit: '[이벤트 당첨자 공지] 사커래플 1회차 당첨자 안내'},
        {date: '2023.08.18 / 17:14', tit: '포지션 찾기 2.0 업데이트'},
        {date: '2023.08.18 / 17:14', tit: '0.7 업데이트'},
      ],
      isDim: false,
      isNoti: true,
    }
  },
  methods: {
    editPageOpen(v) {
      if(v === 'noti') this.isNoti = true;
      this.isDim = true;
    },
    close(v) {
      if(v === 'noti') this.isNoti = false;
      this.isDim = false;
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

  [notification] { overflow: hidden; }
  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; }
  .dim { background: rgba(0,0,0,0.3); position: fixed; left:0; top:0; width:100%; height:100%; opacity: 0; transition: opacity 0.3s; animation-timing-function: ease-out; }

  section {position: relative; margin-top:60px; }
  .content-detail { padding: 30px 12px; box-sizing: border-box; }
  .top-btns { height: 60px; border-bottom: 1px solid; border-color: #F5F5F5; padding-top: 7px; box-sizing: border-box; text-align: center; }
  .top-btns h2 { padding: 0; display: inline-block; border-bottom: none; line-height: 53px; }
  .top-btns a.back { font-size: 0; width:65px; height:53px; position: absolute; left: 0; top:7px; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:12px; }

  ul li { padding:12px 45px 12px 20px; box-sizing: border-box; border-radius: 15px; box-shadow: 0 5px 10px 0 rgba(16, 16, 20, 0.2); margin-bottom: 20px; position: relative; }
  ul li:after { content: ''; width:13px; height: 23px; background: url("~@/assets/images/mypage/ico-arrow.png")0 0 no-repeat; background-size: contain; position: absolute; right:20px; top:50%; transform: translateY(-50%); }
  ul li .date { font-size: 14px; color:#888; line-height: 20px; margin-bottom: 15px; }
  ul li .tit { font-size: 16px; line-height: 23px; }
  ul li a { font-size: 0; position: absolute; left: 0; top: 0; width: 100%; height: 100%; }

  .edit-page { position: fixed; left:0; top:0; width:100%; height:100%; z-index: 10; background: #fff; transform: translateY(100%); transition: transform 0.5s; animation-timing-function: ease-out; padding-bottom: 70px; box-sizing: border-box; margin-top: 0; }
  .btn-wrap { width: 100%; position: absolute; left:0; bottom: 30px; text-align: center; }
  .btn { font-size: 20px; font-weight: 500; text-align: center; border: 1px solid; border-color: var(--color-main); line-height: 44px; width:274px; height:46px; border-radius: 23px; cursor:pointer; }
  .btn.update { color:var(--color-main); margin-bottom: 15px; }
  .edit-page.open { transform: translateY(0); }
  .dimOpen .dim { opacity:0.5; z-index: 5; }

  .edit-page .top-btns.type1 { height:70px; border-bottom: 1px solid #F5F5F5; text-align: left; position: fixed; width: 100%; left:0; top:0; }
  .edit-page .top-btns.type1 .close { font-size: 0; width: 45px; height:45px; position: relative; vertical-align: middle; }
  .edit-page .top-btns.type1 .close:after { content: ''; width:22px; height:22px; background: url("~@/assets/images/mypage/ico-close.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:16px; }
  .edit-page .top-btns.type1 span { font-size: 16px; line-height: 53px; font-weight: 500; vertical-align: middle; display: inline-block; margin-left: 25px; margin-top: 6px; }

  .content { text-align: left; padding: 20px; margin-top: 70px; height: 100%; overflow: auto; }
  .content .tit { font-size: 20px; line-height: 29px; }
  .content .date { font-size: 14px; line-height: 20px; color:#808080; margin-bottom: 30px; }
  .content .txt { font-size: 14px; line-height: 20px; }
  .content ol { padding-left: 20px; box-sizing: border-box; }
  .content ol li { font-weight: 700; line-height: 20px; }
  .content .img-box { width: 100%; height: 280px; margin-top: 30px; border-radius: 5px; box-shadow: 0 5px 10px 0 rgba(16, 16, 20, 0.2); position: relative; }
  .content .img-box img { position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }


</style>