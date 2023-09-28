<template>
  <div card-add >

    <div class="top-cont">
      <div class="top-btns">
        <RouterLink to="/mypage_main" class="back" >뒤로가기 </RouterLink>
        <h4>카드 정보 추가</h4>
      </div>
    </div>

    <div class="card-wrap">
      <div class="logos">
        <img src="@/assets/images/mypage/ico-visa.png" alt="">
        <img src="@/assets/images/mypage/ico-amex.png" alt="">
        <img src="@/assets/images/mypage/ico-card-xs.png" alt="">
      </div>
      <ul>
        <!-- 검증되면 li에 active-->
        <li class="step3">
          <!-- 검증되면 label on-->
          <label>
            <span>비밀번호</span>
            <input type="number" placeholder="**">
          </label>
        </li>

        <!-- li하위 전부 검증되면 li에 active-->
        <li class="step2">
          <!-- 검증되면 label on-->
          <label>
            <span>만료일</span>
            <input type="number" placeholder="월 (MM) / 연도 (YY)">
          </label>
          <!-- 검증되면 label on-->
          <label>
            <span>CVV</span>
            <input type="number" placeholder="000">
          </label>
        </li>

        <li class="step1 active" >
          <!-- 검증되면 label on-->
          <label class="">
            <span>카드번호</span>
            <input type="number" placeholder="0000 0000 0000 0000">
          </label>
          <div class="credit"><img src="@/assets/images/mypage/ico-credit-gray.png" alt=""></div>
          <div class="logo"><img src="@/assets/images/mypage/ico-card-xs.png" alt=""></div>
        </li>
      </ul>
      <div class="cancel">
        <RouterLink  to="/payment">취소</RouterLink>
      </div>

      <!-- 전체 검증되면 comp on-->
      <div class="comp">
        <RouterLink to="/payment">완료</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardAdd",
  data() {
    return {

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

  [card-add] { overflow: hidden; margin-top: 60px; height: 100%; }

  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; }

  .top-btns { height: 60px; border-bottom: 1px solid; border-color: #F5F5F5; padding-top: 7px; box-sizing: border-box; text-align: center; }
  .top-btns h4 { font-size: 16px; padding: 0; display: inline-block; border-bottom: none; line-height: 53px; }
  .top-btns a.back { font-size: 0; width:65px; height:53px; position: absolute; left: 0; top:7px; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:12px; }

  .card-wrap { padding: 40px 20px 50px; box-sizing: border-box; }
  .card-wrap .logos { margin-bottom: 10px; }
  .card-wrap .logos img { margin-right: 5px; vertical-align: middle; }
  .card-wrap ul li { margin-bottom: 10px; position: relative; height: 0; opacity: 0; transition: height 0.7s, opacity 0.7s; animation-timing-function: ease-out; }
  .card-wrap ul li.active { height: auto; opacity: 1; }
  .card-wrap ul li label { padding: 10px 12px; box-sizing: border-box; border: 1px solid #BBBBBB; border-radius: 5px; display: block; text-align: left; }
  .card-wrap ul li label span { font-size: 12px; color:#606060; line-height: 15px; }
  .card-wrap ul li label input { display: block; border: none; width: 100%; line-height: 15px; height: 15px; }
  .card-wrap ul li label input::placeholder { font-size: 12px; color:#bbb; }
  .card-wrap ul li.step2 { display: flex; justify-content: space-between; }
  .card-wrap ul li.step2 label:first-child { margin-right: 10px; }
  .card-wrap ul li label + .credit { position: absolute; right:13px; top:16px; }
  .card-wrap ul li label.on { border-color: var(--color-main); }
  .card-wrap ul li.step1 label + .credit + .logo { display: none; }
  .card-wrap ul li.step1 label.on + .credit { display: none; }
  .card-wrap ul li.step1 label.on + .credit + .logo { border: 1px solid #BBBBBB; border-radius: 3px; display: inline-block;width: 40px; height: 28px; text-align: center; position: absolute; right:13px; top:13px; }
  .card-wrap ul li.step1 label.on + .credit + .logo img { position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }
  .card-wrap .cancel { text-align: right; margin-top: 20px; }
  .card-wrap .cancel a { font-size: 14px; color:#101014; text-decoration: underline; }

  .comp { width: calc(100% - 40px); height: 50px; background: #BBBBBB; border-radius: 5px; text-align: center; position: fixed; left:20px; bottom:50px; }
  .comp a { font-size: 16px; line-height: 50px; color:#fff; font-weight: 500; width: 100%; height: 100%; pointer-events: none; }
  .comp.on { background: var(--color-main); }
  .comp.on a { pointer-events: auto; }
</style>