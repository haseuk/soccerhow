<template>
  <div event>
    <div class="top-cont">
      <div class="top-btns">
        <RouterLink to="/mypage_main" class="back" >뒤로가기 </RouterLink>
        <h2>이벤트</h2>
      </div>
    </div>

    <section>
      <div class="content-detail">
        <ul>
          <li v-for="(item, i) in list" :key="i">
            <span>이벤트</span>
            <p class="tit" v-html="item.tit"></p>
            <p class="txt" v-html="item.txt"></p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Event",
  data() {
    return {
      list: [
        {tit: '레슨 리뷰하고 애플워치 받을 수 있다?', txt: '오병이어 축구교실 도곡점 신규 입점'},
        {tit: '강남 전지역 개인레슨 5% DOWN!', txt: '강남 지역에서 개인레슨 받아요'},
        {tit: '나이키 앱 쿠폰 증정은 오늘까지', txt: '나이키 앱 제품 최대 20% 할인 쿠폰 제공'},
        {tit: '사커하우 공식 풋볼 센터 오픈', txt: '여의도 더 현대 서울에서 만나보세요'},
        {tit: '사커하우 X GOALSTUDIO', txt: '한정판 굿즈를 만나보세요 #LIVETHEGOAL'},
        {tit: '포지션 찾기 2.0 이벤트!', txt: '포지션 찾기 2.0이 오픈했어요.<br>포지션 찾기 하고 선물 받아가세요 :)'},
        {tit: '카페 인필드 아메리카노 할인 이벤트', txt: '손흥민 체육공원에 방문하고 아메리카노도 마셔요<br>오병이어 축구교실 도곡점 신규 입점'},
      ]
    }
  },
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

  [event] { overflow: hidden; }
  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; }

  section {position: relative; margin-top:60px; }
  .top-btns { height: 60px; border-bottom: 1px solid; border-color: #F5F5F5; padding-top: 7px; box-sizing: border-box; text-align: center; }
  .top-btns h2 { padding: 0; display: inline-block; border-bottom: none; line-height: 53px; }
  .top-btns a.back { font-size: 0; width:65px; height:53px; position: absolute; left: 0; top:7px; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:12px; }

  ul li { border-bottom: 1px solid #F6F6F6; padding:20px; box-sizing: border-box; }
  ul li span { font-size: 14px; color:#808080; margin-bottom: 3px; display: block; }
  ul li p { font-size: 16px; line-height: 23px; font-weight: 500; }
  ul li p.txt { font-weight: 400; color:#606060; }

</style>