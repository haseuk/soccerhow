<template>
  <div report :class="{dimOpen:isDim}">

    <div class="dim"></div>
    <div class="top-cont">
      <div class="top-btns">
        <RouterLink to="/login" class="back" >뒤로가기 </RouterLink>
        <h2><img src="@/assets/images/mypage/ico-account.png" alt=""></h2>
      </div>
    </div>

    <section class="report">
      <div>
        <h2>신고내역</h2>

        <p class="txt">계정 비활성화는 일시적으로 계정 사용을 안 하는 방법 입니다. 비활성화를 진행하면 다시 로그인 후 활성화를 하기까지 프로필이 숨겨지게 됩니다.</p>

        <div class="tab-wrap">
          <a class="tab" @click="all" :class="{on:currentFilter === null}">전체보기</a>
          <a class="tab" @click="setFilter('post')" :class="{on:currentFilter === 'post'}">게시물</a>
          <a class="tab" @click="setFilter('member')" :class="{on:currentFilter === 'member'}">회원</a>
        </div>

        <ul class="list">
          <li v-for="item in setFiltered" :key="item.id" >
            <p class="date">신고날짜:{{item.date}}</p>
            <p class="tit">{{item.tit}}</p>
            <a @click="popOpen">팝업열기</a>
          </li>
        </ul>
      </div>
    </section>

    <!--피드백-->
    <section class="edit-page" :class="{open:isFeed}">
      <div class="top-btns type2">
        <a class="close" @click="close">닫기</a>
        <h3>신고 피드백</h3>
      </div>
      <div class="content-detail">
        <div class="inner">
          <div class="top">
            <img src="@/assets/images/mypage/ico-account.png" alt="">
            <p class="tit">피드백</p>
            <p class="txt">신고한 내용이 확인되어 이용 제한 조치를 적용했습니다. 신고해주셔서 감사합니다!</p>
          </div>
          <div class="complete">
            <p class="c-tit">[음바페 진짜 거북이처럼 생겼네] - 조치 완료</p>
            <p class="c-txt">게시물 내용 : “음바페 진짜 거북이처럼 생겼네ㅋㅋ 거북이가 사람되면 그게 음바페 아니냐고”</p>
            <p class="txt">신고날짜 : 2023.08.18. 17:14</p>
            <p class="txt">신고 대상 : 사커하우커뮤니티 게시물</p>
            <p class="txt">신고 사유 : 욕설 / 비난</p>
            <p class="txt">신고 대상 : 거북이밥해</p>
          </div>
        </div>
      </div>
      <div class="btns">
        <a class="btn" @click="close">확인</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Report",
  data() {
    return {
      list: [
        {date: '2023.08.18 / 17:14', tit: '[음바페 진짜 거북이처럼 생겼네] - 조치 완료', category: 'post'},
        {date: '2023.08.18 / 17:14', tit: '[박란드] 프로필 신고  - 조치 완료', category: 'post'},
        {date: '2023.08.18 / 17:14', tit: '[딥페이크케인] 프로필 신고 - 조치 완료', category: 'member'}
      ],
      currentFilter: null,
      isDim: false,
      isFeed: false,
    }
  },
  methods: {
    setFilter: function(category) {
      this.currentFilter = category;
    },
    all() {
      this.currentFilter = null;
    },
    popOpen() {
      this.isFeed = true;
      this.isDim = true;
    },
    close() {
      this.isFeed = false;
      this.isDim = false;
    }
  },
  computed: {
    setFiltered() {
      let data = this.currentFilter
        ? this.list.filter((item) => item.category === this.currentFilter)
        : this.list;
      return data;
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

  [report] { overflow: hidden; }
  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; }
  .dim { background: rgba(0,0,0,0.3); position: fixed; left:0; top:0; width:100%; height:100%; opacity: 0; transition: opacity 0.3s; animation-timing-function: ease-out; }
  section {position: relative; margin-top:60px; }
  .top-btns { height: 60px; border-bottom: 1px solid; border-color: #F5F5F5; padding-top: 7px; box-sizing: border-box; text-align: center; }
  .top-btns h2 { padding: 0; display: inline-block; border-bottom: none; }
  .top-btns a.back { font-size: 0; width:65px; height:53px; position: absolute; left: 0; top:7px; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:12px; }

  .report h2 { margin-bottom: 12px; }
  .report .txt { font-size: 14px; line-height: 20px; color:#606060; margin-bottom: 30px; padding: 0 20px; box-sizing: border-box; }
  .report .tab-wrap { padding: 0 20px; box-sizing: border-box; border-bottom: 1px solid #F5F5F5; }
  .report .tab-wrap .tab { font-size: 12px; margin-right: 40px; color:#808080; padding-bottom: 7px; box-sizing: border-box; }
  .report .tab-wrap .tab.on { color:#101014; border-bottom: 1px solid; border-color: var(--color-main); }
  .report .list li { padding: 20px; box-sizing: border-box; position: relative; border-bottom: 1px solid #F6F6F6; }
  .report .list li:last-child { border-bottom: none; }
  .report .list li .date { font-size: 14px; line-height: 20px; color:#606060; margin-bottom: 5px; }
  .report .list li .tit { font-size: 16px; line-height: 23px; color:#101014; font-weight: 500; }
  .report .list li a { font-size: 0; position: absolute; left:0; top:0; width: 100%; height: 100%; }

  .edit-page { position: fixed; left:0; bottom:0; width:100%; min-height:70%; z-index: 10; background: #fff; transform: translateY(100%); transition: transform 0.5s; animation-timing-function: ease-out;  border-top-left-radius: 25px; border-top-right-radius: 25px; box-sizing: border-box; }
  .edit-page .top-btns.type2 { height: auto; text-align: right; padding: 20px 10px 20px 20px; box-sizing: border-box; position: relative; }
  .edit-page .top-btns.type2 .close { font-size: 0; width: 45px; height:45px; background: url("~@/assets/images/mypage/ico-x.png")0 0 no-repeat; background-size: contain; position: absolute; right: 20px; top:50%; transform: translateY(-50%); }
  .edit-page .top-btns.type2 h3 { text-align: center; display: block; }
  .edit-page .top-btns.type2 h4 { font-weight: 500; line-height: 23px; display: block; text-align: left; color:#606060; word-break: keep-all; }
  .btns { text-align: center; margin-bottom: 30px; }
  .btn { font-size: 20px; font-weight: 500; text-align: center; border: 1px solid; border-color: var(--color-main); line-height: 44px; padding: 0 100px; box-sizing: border-box; border-radius: 23px; cursor:pointer; }
  .edit-page.open { transform: translateY(0); }
  .dimOpen .dim { opacity:0.5; z-index: 5; }

  .edit-page .content-detail .top { border-bottom: 1px solid #F5F5F5; box-sizing: border-box; padding: 30px 20px 20px; }
  .edit-page .content-detail .top img { margin: 0 auto 30px; display: block; }
  .edit-page .content-detail .top .tit { margin-bottom: 20px; }
  .edit-page .content-detail .inner p { font-size: 14px; line-height: 20px; color:#606060; padding-left: 10px; box-sizing: border-box; position: relative;margin-bottom: 10px; }
  .edit-page .content-detail .inner p:last-child { margin-bottom: 0; }
  .edit-page .content-detail .inner p:after { content:''; width: 3px; height:3px; background:#606060; border-radius: 50%; position: absolute; left:0; top:9px; }
  .edit-page .content-detail .top .txt { padding-left: 0; color:#101014; }
  .edit-page .content-detail .top .txt:after { display: none; }
  .edit-page .content-detail .complete { padding: 30px 20px 50px; box-sizing: border-box; }
  .edit-page .content-detail .complete .c-tit { font-size: 16px; color:#101014; padding-left: 0; }
  .edit-page .content-detail .complete .c-tit:after { display: none; }
  .edit-page .content-detail .complete .c-txt { color:#101014; margin-bottom: 20px; }

</style>