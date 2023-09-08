<template>
  <div profile_edit  :class="{dimOpen:isDim}">

    <div class="dim"></div>

    <section class="profile-intro">
      <div class="top-btns">
        <RouterLink to="/mypage_main" class="back" >뒤로가기 </RouterLink>
        <h3>프로필 수정</h3>
        <a class="edit">수정 완료</a>
      </div>

      <div class="wrap">
        <div class="profile cont-wrap">
          <div class="cont-top">
            <div class="thumb">
              <img :src="require(`@/assets/images/mypage/${thumbSrc}.png`)" alt="">
            </div>
            <a class="edit-btn"><i></i> 수정</a>
          </div>
        </div>

        <ul class="profile-list">
          <li>
            <div class="profile-txt">
              <h3>프로필 설정</h3>
              <p class="txt">프로필은 사커하우 속 다양한 회원분들과 코치님들에게 보여지는 가장 중요한 정보예요. 성실하고 구체적으로 설정할 수록 거절하기 힘든 스카웃 제안을 받을 수 있을 거예요!</p>
              <p class="txt">*프로필 정보는 <b>프로필 카드</b>로 보여지게 됩니다.</p>
            </div>
            <div class="inp-wrap">
              <label>
                <span>닉네임</span>
                <input type="text" :placeholder="nickName">
              </label>
            </div>
          </li>
          <li>
            <h3>자기소개</h3>
            <div class="intro">
              <p class="txt">재미있게 스스로를 소개해주세요. 축구 얘기면 좋구요!</p>
              <p class="txt"><b>자기소개 추가</b></p>
              <a @click="editPageOpen('intro')"></a>
            </div>
          </li>
          <li class="pr type1">
            <i class="p1"></i> <p class="sm-tit">나이대</p>
            <a class="add"></a>
          </li>
          <li class="pr type1">
            <i class="p2"></i> <p class="sm-tit">자주 사용하는 발</p>
            <a class="add"></a>
          </li>
          <li class="pr type1">
            <i class="p3"></i> <p class="sm-tit">키</p>
            <a class="add"></a>
          </li>
          <li class="pr type1">
            <i class="p4"></i> <p class="sm-tit">포지션</p>
            <a class="add"></a>
          </li>
          <li class="type2">
            <h3>주특기</h3>
            <p class="txt">회원님이 자주 사용하는 특기가 있나요?<br> 있다면 1개라도 선택해보세요!</p>
            <div class="item"></div>
            <a class="add"><img src="@/assets/images/mypage/ico-addi.png" alt="">추가</a>
          </li>
          <li class="type2">
            <h3>플레이 스타일</h3>
            <p class="txt">회원님의 플레이 스타일이 있나요?<br> 플레이 스타일을 알려주세요</p>
            <div class="item"></div>
            <a class="add"><img src="@/assets/images/mypage/ico-addi.png" alt="">추가</a>
          </li>
          <li class="type2">
            <h3>축구 관심 분야</h3>
            <p class="txt">관심 분야를 1개라도 추가해주세요. 다른 회원분들이나 코치님이 회원님을 찾을 때 도움을 드릴 수 있어요.</p>
            <div class="item"></div>
            <a class="add"><img src="@/assets/images/mypage/ico-addi.png" alt="">추가</a>
          </li>
          <li class="type2">
            <h3>사커하우 이용 목적</h3>
            <p class="txt">사커하우에 대한 관심사를 1개라도 추가해주세요. 다른 회원분들이나 코치님이 회원님을 찾을 때 도움을 드릴 수 있어요.</p>
            <div class="item"></div>
            <a class="add"><img src="@/assets/images/mypage/ico-addi.png" alt="">추가</a>
          </li>
          <li class="type2">
            <h3>거주지 / 활동 지역</h3>
            <p class="txt">거주 지역이나 <b>주요 활동 지역</b>을 설정해주세요.<br> 설정한 지역에서 다양한 활동을 하실 수 있어요.</p>
            <div class="item"></div>
            <a class="add"><img src="@/assets/images/mypage/ico-addi.png" alt="">활동 지역 추가</a>
          </li>
          <li class="badge">
            <h3>프로필 뱃지</h3>
            <div>
              <p class="txt2">뱃지 보이기</p>
              <a class="switch" :class="{active:isBadge}" @click="switchToggle"><span></span></a>
            </div>
          </li>
          <li class="badge type1">
            <p class="txt2">나의 뱃지(1개)</p>
            <a class="add"></a>
          </li>
        </ul>
      </div>
    </section>

    <section class="edit-page" :class="{open:isIntro}"  :style="`height:${this.winH - 150 }px`">
      <div class="top-btns type2">
        <a class="back" @click="close('intro')">닫기</a>
        <h3>자기소개 편집</h3>
        <a class="edit" @click="close('intro')">확인</a>
      </div>
      <textarea placeholder="내용을 입력하세요" v-model="msg" maxlength="80">

      </textarea>
      <div class="counter">
        <span>{{msg.length}}/80</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProfileEdit",

  data() {
    return {
      thumbSrc: 'thumb',
      nickName: '감자튀김볶음밥',
      isBadge: false,
      counter: 0,
      isDim: false,
      isIntro: false,
      winH: 0,
      msg: '',
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods:{
    handleResize() {
      this.winH = window.innerHeight;
    },
    switchToggle() {
      this.isActive = !this.isActive;
    },
    editPageOpen(v) {
      if(v === 'intro') this.isIntro = true;
      this.isDim = true;
    },
    close(v) {
      if(v === 'intro') this.isIntro = false;
      this.isDim = false;
    }
  }
}
</script>

<style scoped>
  *{font-family:var(--global-font-family); color: #101014; }
  h2, h3, h4, p, ul { margin: 0; padding: 0; list-style: none; margin-block: 0; margin-inline: 0; }
  a { display: inline-block; text-decoration: none; color: #101014; }
  h2 { font-size: 24px; font-weight: 500; line-height: 35px; padding: 18px 20px 10px 20px; box-sizing: border-box; border-bottom:1px solid; border-color: #F5F5F5; }
  h3 { font-size: 20px; line-height: 29px; font-weight: 500; display: inline-block; }
  section .wrap { padding: 30px 20px; box-sizing: border-box; }
  input, textarea { outline: none; }

  [profile_edit] { overflow: hidden; }
  .dim { background: rgba(0,0,0,0.3); position: fixed; left:0; top:0; width:100%; height:100%; opacity: 0; transition: opacity 0.3s; animation-timing-function: ease-out; }

  section { background: #fff; position: relative; }

  .top-btns { height: 60px; display: flex; justify-content: space-between; border-bottom: 1px solid; border-color: #F5F5F5; padding-top: 7px; box-sizing: border-box; }
  .top-btns h3 { line-height: 53px; }
  .top-btns a { font-size: 14px; line-height: 53px; font-weight: 500; }
  .top-btns a.back { font-size: 0; width:65px; height:53px; position: relative; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:12px; }
  .top-btns a.edit { text-decoration: underline; padding-right: 20px; box-sizing: border-box; }
  .wrap { padding: 30px 20px; box-sizing: border-box; background: rgba(251,251,251,0.9); }

  .profile { text-align: center; padding: 0 0 10px 0; box-sizing: border-box; }
  .profile .cont-top { padding: 30px 20px 20px 20px; box-sizing: border-box; position: relative; }
  .profile .cont-top .thumb { width: 200px; height: 200px; border-radius: 50%; margin: 0 auto; overflow: hidden; box-shadow: 0 5px 10px 0 rgba(16, 16, 20, 0.2); position: relative; }
  .profile .cont-top .thumb img { width: 200px; height: 200px; position: absolute; left: 50%; top:50%; transform: translate(-50%,-50%); }
  .profile .cont-top .edit-btn { font-size: 16px; line-height: 35px; color:var(--color-main); font-weight: 500; width: 94px; height: 35px; position: absolute; left: 50%; bottom:0; transform: translateX(-50%); text-align: center; box-shadow: 0 5px 10px 0 rgba(16, 16, 20, 0.2); border-radius: 18px; background: #fff; }
  .profile .cont-top .edit-btn i { width: 17px; height:19px; background: url("~@/assets/images/mypage/ico-photo.png")0 0 no-repeat; background-size: contain; display: inline-block; vertical-align: middle; }

  .wrap .inp-wrap { margin-top: 40px; }
  .wrap .inp-wrap .tit { font-size: 16px; line-height: 23px; font-weight: 500; margin-bottom: 40px; }
  .wrap .inp-wrap label { border: 1px solid rgb(229,229,229); border-radius: 5px; padding:10px 12px; box-sizing: border-box; display: block; }
  .wrap .inp-wrap label span { font-size: 12px; color:#808080; display: block; }
  .wrap .inp-wrap label input { font-size: 16px; color:#606060; font-weight: 500; display: block; border: none; }

  .profile-list { margin-top:65px; }
  .profile-list li { padding: 30px 0; box-sizing: border-box; border-bottom: 1px solid #F5F5F5; position: relative; }
  .profile-list li a { width: 100%; height:100%; position: absolute; left:0; top:0; }
  .profile-list li:first-child { padding-top: 0; }
  .profile-list li h3 { margin-bottom:15px; }
  .profile-list li .txt { font-size: 14px; line-height: 20px; color:#808080; margin-bottom: 15px; }
  .profile-list li .intro { border: 1px dashed; border-color: var(--color-main); color:#606060; padding: 13px 12px; box-sizing: border-box; border-radius: 5px; position: relative; }
  .profile-list li .intro .txt { line-height: 24px; margin-bottom: 0; }
  .profile-list li .intro b { font-size: 16px; font-weight: 500; color:#606060; text-decoration: underline; }
  .profile-list li .intro a { cursor: pointer; position: absolute; left:0; top:0; }
  .profile-list .pr { padding-left: 55px }
  .profile-list .pr i, .profile-list .pr p { color:#606060; font-weight: 500; display: inline-block; vertical-align: middle; }
  .profile-list .type1:after { content:''; width:12px; height:22px; background: url("~@/assets/images/mypage/ico-arrow.png")0 0 no-repeat; background-size: contain; position: absolute; right:0; top:50%; transform: translateY(-50%); pointer-events: none; }
  .profile-list .pr i { position: absolute; left:0; top:50%; transform: translateY(-50%); }
  .profile-list .pr i.p1 { width:20px; height:20px; background: url("~@/assets/images/mypage/ico-p1.png")0 0 no-repeat; background-size: contain; }
  .profile-list .pr i.p2 { width:24px; height:14px; background: url("~@/assets/images/mypage/ico-p2.png")0 0 no-repeat; background-size: contain; }
  .profile-list .pr i.p3 { width:19px; height:20px; background: url("~@/assets/images/mypage/ico-p3.png")0 0 no-repeat; background-size: contain; }
  .profile-list .pr i.p4 { width:23px; height:24px; background: url("~@/assets/images/mypage/ico-p4.png")0 0 no-repeat; background-size: contain; }
  .profile-list .type2 .add { font-size: 14px; color:#808080; padding: 8px 22px; box-sizing: border-box; border-radius:18px; border: 1px dashed; border-color: var(--color-main); }
  .profile-list .type2 .add img { width:11px; height:11px; display: inline-block; margin-right: 3px; }
  .profile-list li.badge > div { display: flex; justify-content: space-between; }
  .profile-list li.badge p, .profile-list li.badge a { display: inline-block; }
  .profile-list li.badge .switch { width:46px; height:27px; border-radius: 14px; background: #C7C7C7; position: relative; transition: background-color 0.3s; animation-timing-function: ease-out; }
  .profile-list li.badge .switch span { width:23px; height:23px; border-radius: 50%; background: #ffffff; position: absolute; left:2px; top:2px; transition: left 0.3s; animation-timing-function: ease-out; }
  .profile-list li.badge .switch.active { background: var(--color-main); }
  .profile-list li.badge .switch.active span { left:21px; }

  .top-btns.type2 { height:70px; border-bottom: 1px solid #F5F5F5; }
  .top-btns.type2 .back:after { content: ''; width:22px; height:22px; background: url("~@/assets/images/mypage/ico-close.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:16px; }
  .top-btns.type2 .edit { text-decoration: none; color:var(--color-main); }

  .edit-page { position: fixed; left:0; bottom:0; width:100%; height:100%; z-index: 10; background: #fff; transform: translateY(100%); transition: transform 0.5s; animation-timing-function: ease-out;  border-top-left-radius: 25px; border-top-right-radius: 25px; }
  .btn-wrap { width: 100%; position: absolute; left:0; bottom: 65px; text-align: center; }
  .btn { font-size: 20px; font-weight: 500; text-align: center; border: 1px solid; border-color: var(--color-main); line-height: 44px; padding: 0 100px; box-sizing: border-box; border-radius: 23px; cursor:pointer; }
  .edit-page.open { transform: translateY(0); }
  .dimOpen .dim { opacity:0.5; z-index: 5; }

  textarea { width:100%; height:calc(100% - 120px); border: none; padding: 15px 20px; box-sizing: border-box; }
  textarea::placeholder { color:#ADADAD; }
  .counter { text-align: right; padding-right: 20px; box-sizing: border-box; }
  .counter span { font-size: 14px; color:#ADADAD; }
</style>