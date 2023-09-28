<template>
  <div withdrawal>
    <div class="top-cont">
      <div class="top-btns">
        <RouterLink to="/login" class="back" >뒤로가기 </RouterLink>
        <h2><img src="@/assets/images/mypage/ico-account.png" alt=""></h2>
      </div>
    </div>

    <section class="withdrawal" v-if="active === 'withdrawal'">
      <div class="content-detail">
        <h2>회원을 탈퇴하려는 이유를<br> 선택해주세요</h2>

        <p class="txt">회원 탈퇴시 계정이 <b>영구적</b>으로 삭제됩니다. 결제 내역, 활동 이력, 개인정보 등 모든 정보가 삭제되오니 신중히 선택해주시기 바랍니다. 잠시 사커하우에서의 활동을 쉬어가시려면 계정 비활성화를 진행해보는 건 어떨까요?</p>
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
              <span>삭제해야만 하는 이유가 있어요 <s>(직접 입력)</s></span>
              <i @click="dir = 'dir'"></i>
            </label>
            <label v-if="dir === 'dir'">
              <input type="text" placeholder="이유를 입력해주세요">
            </label>
          </li>
        </ul>
      </div>
      <div class="btn-wrap">
        <a class="btn next" @click="active = 'notice'">다음</a>
      </div>
    </section>

    <!--계정비활성화확인-->
    <section class="notice" v-if="active === 'notice'">
      <div class="content-detail">
        <h2>주의사항을 꼭 확인해주세요!</h2>

        <p class="txt">현재 보유 중인 포인트는 자동 소멸되며, 탈퇴 후 재가입하더라도 사용이 불가합니다.</p>
        <p class="txt">모든 게시물은 탈퇴 시 자동 삭제되지 않습니다.<br> 탈퇴 후에는 계정 정보가 삭제되어 본인 확인이 불가하므로, 탈퇴 신청 전에 사커하우 댓글 및 게시글을 삭제해주시기 바랍니다.</p>
        <div class="info-wrap">
          <div class="info">
            <ul>
              <li>
                <p>진행 중인 레슨건</p>
                <span>0건</span>
              </li>
              <li>
                <p>잔여 포인트</p>
                <span>3,160원</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="notice-txt">
          <p>사커하우 프로필, 메시지, 게시물, 결제 내역, 포인트 등 모든 정보가 삭제되며, 되돌릴 수 없습니다.</p>
          <p><b>계정을 비활성화하여 프로필을 숨겨두는 방법</b>도 있으니 잠시 활동을 쉬어가는 것은 어떨까요?</p>
          <p><img src="@/assets/images/mypage/ico-notice.png" alt=""> 계정을 정말로 삭제할까요?</p>
        </div>
        <label>
          <input type="checkbox" @click="onToggle">
          <i></i>
          <span>주의사항을 모두 인지하였습니다.</span>
        </label>
      </div>
      <div class="btn-wrap">
        <a class="btn disabled" @click="active = 'account-step-a'">계정 비활성화</a>
        <RouterLink class="btn del" :class="{on:isOn}" to="/login">계정 삭제</RouterLink>
      </div>
    </section>


    <!--계정비활성화-->
    <section class="account-step-a" v-if="active === 'account-step-a'">
      <div class="content-detail">
        <h2>계정 비활성화</h2>

        <p class="txt">
          감사합니다! 계정 비활성화를 도와드릴게요. 아래의 버튼을 누르면 바로 계정이 비활성화됩니다.<br>
          <br>
          이후 앱을 켜고 <b>[계정 활성화 버튼]</b>을 누르면  언제든 사커하우로 돌아올 수 있어요. 푹 쉬시고 금방 돌아오길 바랄게요!
        </p>
      </div>
      <div class="btn-wrap">
        <RouterLink class="btn disabled" to="/login">계정 비활성화</RouterLink>
        <RouterLink class="btn cancel" to="/login">취소</RouterLink>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Withdrawal",
  data() {
    return {
      active: 'notice',
      dir: false,
      list: ['회원이나 코치가 마음에 들지 않아요','사커하우의 서비스가 마음에 들지 않아요','계정 삭제 후 다시 만들고 싶어요','개인정보나 사생활 침해가 우려돼요','앞으로 축구를 절대 하지 않을 거예요'],
      isOn: false,
    }
  },
  methods: {
    onToggle() {
      this.isOn =! this.isOn;
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
  input[type=number]::-webkit-outer-spin-button,input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0;}

  [withdrawal] { overflow: hidden; }
  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; }

  section {position: relative; margin-top:60px; }
  .top-btns { height: 60px; border-bottom: 1px solid; border-color: #F5F5F5; padding-top: 7px; box-sizing: border-box; text-align: center; }
  .top-btns h2 { padding: 0; display: inline-block; border-bottom: none; }
  .top-btns a.back { font-size: 0; width:65px; height:53px; position: absolute; left: 0; top:7px; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:12px; }

  .content-detail { padding: 30px 20px 150px; box-sizing: border-box; }
  .content-detail h2 { padding-left: 0; margin-bottom: 12px; }
  .content-detail .txt { font-size: 14px; line-height: 20px; color:#606060; }
  .content-detail .txt b { font-weight: 500; }
  .content-detail ul { margin-top: 20px; }
  .content-detail ul li { border-bottom: 1px solid #F5F5F5; padding: 20px 0; box-sizing: border-box; }
  .content-detail ul li:last-child { border-bottom:none; }
  .content-detail ul li label { display: block; position: relative; }
  .content-detail ul li span { font-size: 16px; color:#606060; font-weight: 500; }
  .content-detail ul li span s { color:#BBBBBB; text-decoration: none; }
  .content-detail ul li label input[type=checkbox] + span + i { width: 100%; height: 100%; display: block; position: absolute; left:0; top:0; }
  .content-detail ul li label input[type=checkbox]:checked + span + i:after { content:''; width: 13px; height: 10px; background: url("~@/assets/images/mypage/ico-chkd.png")0 0 no-repeat; background-size: contain; position: absolute; right:0; top:50%; margin-top: -5px; }
  .content-detail ul li label input[type=checkbox] { display: none; }

  .content-detail ul li.dir label input[type=text] { font-size: 16px; width: 100%; height:40px; line-height: 40px; border: 1px solid #e5e5e5; border-radius: 5px; display: block;  padding: 0 10px; box-sizing: border-box; margin-top: 10px; }
  .btn-wrap { width: 100%; position: absolute; left:0; bottom: 30px; text-align: center; }
  .btn { font-size: 20px; font-weight: 500; text-align: center; border: 1px solid; border-color: var(--color-main); line-height: 44px; width:274px; height:46px; border-radius: 23px; cursor:pointer; }
  .btn.disabled { margin-bottom:10px; }
  .btn.del { border: 1px solid #808080; color:#808080; pointer-events: none; }
  .btn.del.on { color:var(--color-main); border-color: var(--color-main); pointer-events: auto; }

  .notice .txt { font-size: 16px; line-height: 22px; color:#000; margin-bottom: 20px; position: relative; padding-left: 10px; box-sizing: border-box; }
  .notice .txt:after { content:''; width: 3px; height: 3px; border-radius: 50%; background: #000; position: absolute; left: 0; top:11px; }
  .info-wrap { padding-bottom: 25px; box-sizing: border-box; border-bottom: 1px solid #F5F5F5; }
  .info { padding:15px; box-sizing: border-box; background: #F8F8F8; border: 1px solid #E9E9E9; }
  .info ul { margin-top: 0; }
  .info ul li { border-bottom: none; padding:0; margin-bottom: 9px; display: flex; justify-content: space-between; }
  .info ul li:last-child { margin-bottom: 0; }
  .info ul li p, .info ul li span { font-size: 16px; line-height: 23px; color:#545454; font-weight: 400; }
  .info ul li span { font-weight: 700; }
  .notice-txt { margin: 20px 0; }
  .notice-txt p { font-size: 16px; line-height: 23px; color:#606060; margin-bottom: 23px; }
  .notice-txt p b { font-weight: 500; }
  .notice-txt p img { width: 5px; height: 23px; vertical-align: sub; margin-right: 5px; }
  .notice label { text-align: center; display: block; margin:0 auto; }
  .notice label input[type=checkbox] + i { width: 22px; height: 22px; border: 1px solid #C5C5C5; border-radius: 2px; display: inline-block; vertical-align: middle; box-sizing: border-box; position: relative; }
  .notice label input[type=checkbox]:checked + i { border: 1px solid; border-color: var(--color-main); }
  .notice label input[type=checkbox]:checked + i:after { content:''; width: 13px; height: 10px; background: url("~@/assets/images/mypage/ico-chkd.png")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }
  .notice label span { color:#B9B9B9; display: inline-block; vertical-align: middle; margin-left: 8px; }
  .notice label input[type=checkbox]:checked + i + span { color:var(--color-main); }
  .notice label input[type=checkbox] { display: none; }

  .account-step-a .btn-wrap .disabled { color:var(--color-main); }
</style>