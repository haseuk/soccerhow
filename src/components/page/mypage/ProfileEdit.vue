<template>
  <div profile_edit  :class="{dimOpen:isDim}">

    <div class="dim"></div>

    <div class="top-cont">
      <div class="top-btns">
        <RouterLink to="/mypage_main" class="back" >뒤로가기 </RouterLink>
        <h3>프로필 수정</h3>
        <a class="edit">수정 완료</a>
      </div>
    </div>

    <section class="profile-intro">

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
            <a class="add" @click="editPageOpen('select-age')"></a>
          </li>
          <li class="pr type1">
            <i class="p2"></i> <p class="sm-tit">자주 사용하는 발</p>
            <a class="add" @click="editPageOpen('select-foot')"></a>
          </li>
          <li class="pr type1">
            <i class="p3"></i> <p class="sm-tit">키</p>
            <a class="add" @click="editPageOpen('select-height')"></a>
          </li>
          <li class="pr type1">
            <i class="p4"></i> <p class="sm-tit">포지션</p>
            <a class="add" @click="editPageOpen('select-position')"></a>
          </li>
          <li class="type2">
            <h3>주특기</h3>
            <p class="txt">회원님이 자주 사용하는 특기가 있나요?<br> 있다면 1개라도 선택해보세요!</p>
            <div class="item"></div>
            <a class="add" @click="editPageOpen('select-special')"><img src="@/assets/images/mypage/ico-addi.png" alt="">추가</a>
          </li>
          <li class="type2">
            <h3>플레이 스타일</h3>
            <p class="txt">회원님의 플레이 스타일이 있나요?<br> 플레이 스타일을 알려주세요</p>
            <div class="item"></div>
            <a class="add" @click="editPageOpen('select-style')"><img src="@/assets/images/mypage/ico-addi.png" alt="">추가</a>
          </li>
          <li class="type2">
            <h3>축구 관심 분야</h3>
            <p class="txt">관심 분야를 1개라도 추가해주세요. 다른 회원분들이나 코치님이 회원님을 찾을 때 도움을 드릴 수 있어요.</p>
            <div class="item"></div>
            <a class="add" @click="editPageOpen('select-interests')"><img src="@/assets/images/mypage/ico-addi.png" alt="">추가</a>
          </li>
          <li class="type2">
            <h3>사커하우 이용 목적</h3>
            <p class="txt">사커하우에 대한 관심사를 1개라도 추가해주세요. 다른 회원분들이나 코치님이 회원님을 찾을 때 도움을 드릴 수 있어요.</p>
            <div class="item"></div>
            <a class="add" @click="editPageOpen('select-purpose')"><img src="@/assets/images/mypage/ico-addi.png" alt="">추가</a>
          </li>
          <li class="type2">
            <h3>거주지 / 활동 지역</h3>
            <p class="txt">거주 지역이나 <b>주요 활동 지역</b>을 설정해주세요.<br> 설정한 지역에서 다양한 활동을 하실 수 있어요.</p>
            <div class="item"></div>
            <a class="add" @click="editPageOpen('select-residence')"><img src="@/assets/images/mypage/ico-addi.png" alt="">활동 지역 추가</a>
          </li>
          <li class="badge">
            <h3>프로필 뱃지</h3>
            <div>
              <p class="txt2">뱃지 보이기</p>
              <a class="switch" :class="{active:isSwitch}" @click="switchToggle"><span></span></a>
            </div>
          </li>
          <li class="badge type1">
            <p class="txt2">나의 뱃지(1개)</p>
            <a class="add" @click="editPageOpen('select-badge-edit')"></a>
          </li>
        </ul>
      </div>
    </section>

    <!--자기소개-->
    <section class="edit-page" :class="{open:isIntro}">
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


    <!--나이대-->
    <section class="edit-page" :class="{open:isSelect}">
      <div class="top-btns type1">
        <a class="close" @click="close('select-age')">닫기</a>
        <h3>회원님의 나이대를 알려주세요</h3>
      </div>

      <div class="edit-inner">
        <ul>
          <li v-for="(item, i) in ageRange" :key="i">
            <label>
              <input type="radio" name="age" @click="active = false">
              <i>{{item}}대</i>
            </label>
          </li>
        </ul>
        <label>
          <input type="radio" name="age" @click="active = 'dir'">
          <i>직접입력</i>
        </label>
        <input type="number" class="dir" v-if="active === 'dir'">
      </div>
      <div class="content-detail">
        <div class="inner">
          <p>내 나이대 공개하기</p>
          <span>특별한 이유가 없다면 가능한 공개해주세요<br> *정확한 생년월일은 절대 공개되지 않아요!</span>
        </div>
        <a class="switch" :class="{active:isSwitch}" @click="switchToggle"><span></span></a>
      </div>
      <div class="btn-wrap">
        <a class="btn save" @click="close('select-age')">저장하기</a>
      </div>
    </section>

    <!--자주 사용하는 발-->
    <section class="edit-page foot" :class="{open:isFoot}">
      <div class="top-btns type1">
        <a class="close" @click="close('select-foot')">닫기</a>
        <h3>어느 발을 주로 사용하시나요?</h3>
        <h4>양발이면 모두 선택해주세요</h4>
      </div>
      <div class="edit-inner">
        <ul>
          <li class="left">
            <span>왼발</span>
            <label>
              <input type="checkbox" name="foot">
              <i></i>
            </label>
          </li>
          <li class="right">
            <span>오른발</span>
            <label>
              <input type="checkbox" name="foot">
              <i></i>
            </label>
          </li>
        </ul>
      </div>
      <div class="content-detail">
        <div class="inner">
          <p>자주 사용하는 발 공개</p>
          <span>자주 사용하시는 발을 알려주시면 코치님이나 회원분들이 회원님을 찾을 때 정말 큰 도움이 돼요</span>
        </div>
        <a class="switch" :class="{active:isSwitch}" @click="switchToggle"><span></span></a>
      </div>
      <div class="btn-wrap">
        <a class="btn save" @click="close('select-foot')">저장하기</a>
      </div>
    </section>

    <!--키-->
    <section class="edit-page height" :class="{open:isHeight}">
      <div class="top-btns type1">
        <a class="close" @click="close('select-height')">닫기</a>
        <h3>키가 어떻게 되시나요?</h3>
        <h4>키는 사커하우를 활동할 때 필요한 중요한 정보예요.</h4>
      </div>
      <div class="edit-inner">
        <label>
          <input type="number" placeholder="숫자만 입력하세요">
          <span>cm</span>
        </label>
      </div>
      <div class="content-detail">
        <div class="inner">
          <p>내 키 공개하기</p>
        </div>
        <a class="switch" :class="{active:isSwitch}" @click="switchToggle"><span></span></a>
      </div>
      <div class="btn-wrap">
        <a class="btn save" @click="close('select-foot')">저장하기</a>
      </div>
    </section>

    <!--포지션-->
    <section class="edit-page position" :class="{open:isPos}">
      <div class="top-btns type1">
        <a class="close" @click="close('select-position')">닫기</a>
        <h3>나의 포지션</h3>
        <p>회원님의 포지션은 <span>{{postiion}}</span> 입니다</p>
      </div>
      <div class="content-detail">
        <div class="inner">
          <p>나의 포지션 공개하기</p>
          <span>*나의 포지션은 [포지션 찾기 결과]에 따라 부여되며, 회원님은 포지션 찾기를 진행하셨습니다.</span>
        </div>
        <a class="switch" :class="{active:isSwitch}" @click="switchToggle"><span></span></a>
      </div>
      <div class="btn-wrap">
        <a class="btn find">포지션 다시 찾기 <img src="~@/assets/images/mypage/ico-find-arrow.png" alt=""></a>
        <a class="btn save" @click="close('select-position')">저장하기</a>
      </div>
    </section>

    <!--주특기-->
    <section class="edit-page specialty" :class="{open:isSpecial}">
      <div class="top-btns type1">
        <a class="close" @click="close('select-special')">닫기</a>
        <h3>주특기를 선택해주세요</h3>
        <h4>프로필에 표시해놓고 싶은 회원님만의 특기를 최소 1개라도 선택해주세요</h4>
      </div>
      <div class="edit-inner">
        <p class="tit">능력</p>
        <ul>
          <li v-for="(item, i) in specialty" :key="i">
            <label>
              <input type="radio" name="spec" @click="active = false">
              <i>{{item}}</i>
            </label>
          </li>
        </ul>

        <p class="tit">개인기</p>
        <ul>
          <li v-for="(item, i) in skill" :key="i">
            <label>
              <input type="radio" name="skill" @click="active = false">
              <i>{{item}}</i>
            </label>
          </li>
        </ul>

        <p class="tit">최대 3개까지 선택 가능해요</p>
      </div>
      <div class="btn-wrap">
        <a class="btn save" @click="close('select-special')">저장하기</a>
      </div>
    </section>

    <!--주특기-->
    <section class="edit-page play-style" :class="{open:isStyle}">
      <div class="top-btns type1">
        <a class="close" @click="close('select-style')">닫기</a>
        <h3>플레이 스타일을 선택해주세요</h3>
        <h4>회원님만의 플레이 스타일이 있다면 최소 1개라도 선택해주세요</h4>
      </div>
      <div class="edit-inner">
        <p class="tit">포워드</p>
        <ul>
          <li v-for="(item, i) in style" :key="i">
            <label>
              <input type="radio" name="forward" @click="active = false">
              <i>{{item}}</i>
            </label>
          </li>
        </ul>

        <p class="tit">미드필더</p>
        <ul>
          <li v-for="(item, i) in midfielder" :key="i">
            <label>
              <input type="radio" name="midfielder" @click="active = false">
              <i>{{item}}</i>
            </label>
          </li>
        </ul>

        <p class="tit">최대 2개까지 선택 가능해요</p>
      </div>
      <div class="btn-wrap">
        <a class="btn save" @click="close('select-style')">저장하기</a>
      </div>
    </section>

    <!--관심분야-->
    <section class="edit-page interests" :class="{open:isInterests}">
      <div class="top-btns type1">
        <a class="close" @click="close('select-interests')">닫기</a>
        <h3>관심 분야를 선택해주세요</h3>
        <h4>프로필에 표시해놓고 싶은 관심 분야를 최소 1개라도 선택해주세요</h4>
      </div>
      <div class="edit-inner">
        <p class="tit">관심사</p>
        <ul>
          <li v-for="(item, i) in interests" :key="i">
            <label>
              <input type="radio" name="forward" @click="active = false">
              <i>{{item}}</i>
            </label>
          </li>
        </ul>

        <p class="tit">최대 3개까지 선택 가능해요</p>
      </div>
      <div class="btn-wrap">
        <a class="btn save" @click="close('select-interests')">저장하기</a>
      </div>
    </section>

    <!--이용목적-->
    <section class="edit-page purpose" :class="{open:isPurpose}">
      <div class="top-btns type1">
        <a class="close" @click="close('select-purpose')">닫기</a>
        <h3>사커하우 이용 목적 선택해주세요</h3>
        <h4>무엇을 하기 위해 사커하우를 사용하는지, 주로 어떤 기능을 사용하는지 최소 1개 선택해주세요</h4>
      </div>
      <div class="edit-inner">
        <p class="tit">관심사</p>
        <ul>
          <li v-for="(item, i) in purpose" :key="i">
            <label>
              <input type="radio" name="forward" @click="active = false">
              <i>{{item}}</i>
            </label>
          </li>
        </ul>

        <p class="tit">최대 3개까지 선택 가능해요</p>
      </div>
      <div class="btn-wrap">
        <a class="btn save" @click="close('select-purpose')">저장하기</a>
      </div>
    </section>

    <!--활동지역-->
    <section class="edit-page region" :class="{open:isRegion}">
      <div class="top-btns type1">
        <a class="close" @click="close('select-region')">닫기</a>
        <h3>활동 지역</h3>
      </div>
      <div class="edit-inner">
        <label class="search">
          <i></i>
          <input type="text" placeholder="지역 이름 검색">
        </label>
        <div class="add-res">
          <i></i>
          <p>서울특별시 마포구</p>
        </div>
      </div>
      <div class="map-wrap">
        <div class="map">
          <img src="@/assets/images/mypage/map.png" alt="">
        </div>
        <p>*주로 활동하는 운동장이 활성화되지 않았나요?<br> <b>직접 운동장을 추가</b>해보세요</p>
      </div>
      <div class="btn-wrap">
        <a class="btn save" @click="close('select-region-edit')">저장하기</a>
      </div>
    </section>

    <!--활동지역수정-->
    <section class="edit-page region-edit" :class="{open:isRegionEdit}">
      <div class="top-btns type1">
        <a class="close" @click="close('select-region-edit')">닫기</a>
        <h3>활동 지역 수정</h3>
        <h4>자주 이용하는 운동장, 축구장, 풋살장 등 주로 활동하는 지역을 수정할까요?</h4>
      </div>
      <div class="content-detail">
        <p class="sub-txt">현재 활동 지역을 업데이트하지 않았어요</p>
      </div>
      <div class="btn-wrap">
        <a class="btn update">업데이트</a>
        <a class="btn save" @click="close('select-region-edit')">삭제</a>
      </div>
    </section>

    <!--거주지역-->
    <section class="edit-page residence" :class="{open:isResidence}">
      <div class="top-btns type1">
        <a class="close" @click="close('select-residence')">닫기</a>
        <h3>거주 지역</h3>
      </div>
      <div class="edit-inner">
        <label class="search">
          <i></i>
          <input type="text" placeholder="지역 이름 검색">
        </label>
        <div class="add-res">
          <i></i>
          <p>서울특별시 마포구</p>
        </div>
      </div>
      <div class="btn-wrap">
        <a class="btn save" @click="close('select-residence')">저장하기</a>
      </div>
    </section>

    <!--거주지역수정-->
    <section class="edit-page residence-edit" :class="{open:isResidenceEdit}">
      <div class="top-btns type1">
        <a class="close" @click="close('select-residence-edit')">닫기</a>
        <h3>거주 지역 수정</h3>
        <h4>거주 지역을 수정할까요?</h4>
      </div>
      <div class="content-detail">
        <p class="sub-txt">현재 거주 지역 : {{residenceEdit}}</p>
      </div>
      <div class="btn-wrap">
        <a class="btn update">업데이트</a>
        <a class="btn save" @click="close('select-residence-edit')">삭제</a>
      </div>
    </section>

    <!--뱃지-->
    <section class="edit-page badge-edit" :class="{open:isBadgeEdit}">
      <div class="top-btns type1">
        <a class="close" @click="close('select-badge-edit')">닫기</a>
        <h3>아래의 뱃지들을 갖고 있어요</h3>
        <h4>어떤 뱃지를 프로필에 표시할 지 선택해주세요</h4>
      </div>
      <div class="content-detail">
        <i><img src="@/assets/images/mypage/ico-badge.png" alt=""></i>
        <p class="tit">프로필 인증 뱃지</p>
        <span>&#183; 프로필 인증/작성 완료 시 제공</span>
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
      isSwitch: false,
      counter: 0,
      isDim: false,
      isIntro: false,
      isSelect: false,
      isFoot: false,
      isHeight: false,
      isPos: false,
      isSpecial: false,
      isStyle: false,
      isInterests: false,
      isPurpose: false,
      isRegion: false,
      isRegionEdit: false,
      isResidence: false,
      isResidenceEdit: false,
      isBadgeEdit: false,
      winH: 0,
      msg: '',
      ageRange: [10, 20, 30, 40, 50, 60],
      active: '',
      postiion: 'CM',
      specialty: ['트래핑', '킬패스', '드리블', '마무리', '크로스', '코너킥', '프리킥', '패널티킥', '경합' ,'몸싸움' ,'헤딩' ,'체력' ,'트래핑' ,'스로인' ,'대인 방어' ,'달리기' ,'캐칭/펀칭' ,'다이빙' ,'골킥' ,'빌드업' ],
      skill: ['치고 달리기', '플립플랩','스탭오버' ],
      style: [ '타겟형 스트라이커', '폴스 나인', '포처', '컴플리트 포워드', '프레싱 포워드', '크랙', '어드밴스 포워드', '섀도우 스트라이커', '클래식 윙어', '인버티드 윙어' ],
      midfielder: [ '미들라이커', '플레이메이커', '메짤라', '홀딩 미드필더', '박스 투 박스'],
      interests: [ '국내축구', '해외축구', '월드컵', '축구공', '축구화', '축구 기술', '축구선수', '피지컬', '축구 유튜버', '이적 시장', '축구 경기', '축구 이슈', '축구 경기 관람', 'FM 2023', 'FIFA 23', 'PES 2023', '피파온라인', '축구 밈/유머' ],
      purpose: [ '스터디', '매치', '용병', '조기축구', '축구선수 희망', '축구 진로 상담', '축구 수업', '1:1 수업', '팀원 스카웃', '축구 경기 관람', '축구 꿀팁 얻기', '축구 기술 익히기', '축구팀 개설', '학교 축구팀' ],
      residenceEdit: ['대한민국, 서울시 마포구']

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
      this.isSwitch = !this.isSwitch;
    },
    editPageOpen(v) {
      if(v === 'intro') this.isIntro = true;
      if(v === 'select-age') this.isSelect = true;
      if(v === 'select-foot') this.isFoot = true;
      if(v === 'select-height') this.isHeight = true;
      if(v === 'select-position') this.isPos = true;
      if(v === 'select-special') this.isSpecial = true;
      if(v === 'select-style') this.isStyle = true;
      if(v === 'select-interests') this.isInterests = true;
      if(v === 'select-purpose') this.isPurpose = true;
      if(v === 'select-region') this.isRegion = true;
      if(v === 'select-region-edit') this.isRegionEdit = true;
      if(v === 'select-residence') this.isResidence = true;
      if(v === 'select-residence-edit') this.isResidenceEdit = true;
      if(v === 'select-badge-edit') this.isBadgeEdit = true;
      this.isDim = true;
    },
    close(v) {
      if(v === 'intro') this.isIntro = false;
      if(v === 'select-age') this.isSelect = false;
      if(v === 'select-foot') this.isFoot = false;
      if(v === 'select-height') this.isHeight = false;
      if(v === 'select-position') this.isPos = false;
      if(v === 'select-special') this.isSpecial = false;
      if(v === 'select-style') this.isStyle = false;
      if(v === 'select-interests') this.isInterests = false;
      if(v === 'select-purpose') this.isPurpose = false;
      if(v === 'select-region') this.isRegion = false;
      if(v === 'select-region-edit') this.isRegionEdit = false;
      if(v === 'select-residence') this.isResidence = false;
      if(v === 'select-residence-edit') this.isResidenceEdit = false;
      if(v === 'select-badge-edit') this.isBadgeEdit = false;
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
  h4 { font-size: 16px; line-height: 23px; font-weight: 500; display: inline-block; }
  section .wrap { padding: 30px 20px; box-sizing: border-box; }
  input, textarea { outline: none; }

  [profile_edit] { overflow: hidden; }
  .dim { background: rgba(0,0,0,0.3); position: fixed; left:0; top:0; width:100%; height:100%; opacity: 0; transition: opacity 0.3s; animation-timing-function: ease-out; }

  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; }
  .profile-intro { margin-top: 60px; }

  section { background: #fff; position: relative; }

  .top-btns { height: 60px; display: flex; justify-content: space-between; border-bottom: 1px solid; border-color: #F5F5F5; padding-top: 7px; box-sizing: border-box; }
  .top-btns h3 { line-height: 53px; }
  .top-btns a { font-size: 14px; line-height: 53px; font-weight: 500; }
  .top-btns a.back { font-size: 0; width:65px; height:53px; position: relative; }
  .top-btns.type1 { height:auto; display: block; text-align: right; padding: 20px 10px 20px 20px; box-sizing: border-box; }
  .top-btns.type1 h3 { line-height: 25px; display: block; text-align: left; margin-bottom: 5px; }
  .top-btns.type1 h4 { line-height: 23px; display: block; text-align: left; color:#606060; word-break: keep-all; }
  .top-btns.type1 a.close { font-size: 0; width: 45px; height:45px; background: url("~@/assets/images/mypage/ico-x.png")0 0 no-repeat; background-size: contain; }
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
  .profile-list li:first-child { padding-top: 0; }
  .profile-list li h3 { margin-bottom:15px; }
  .profile-list li .txt { font-size: 14px; line-height: 20px; color:#808080; margin-bottom: 15px; }
  .profile-list li .intro { border: 1px dashed; border-color: var(--color-main); color:#606060; padding: 13px 12px; box-sizing: border-box; border-radius: 5px; position: relative; }
  .profile-list li .intro .txt { line-height: 24px; margin-bottom: 0; }
  .profile-list li .intro b { font-size: 16px; font-weight: 500; color:#606060; text-decoration: underline; }
  .profile-list li .intro a { cursor: pointer; position: absolute; left:0; top:0; width: 100%; height:100%; }
  .profile-list .pr { padding-left: 55px }
  .profile-list .pr i, .profile-list .pr p { color:#606060; font-weight: 500; display: inline-block; vertical-align: middle; }
  .profile-list .type1 .add { position: absolute; left:0; top:0; width: 100%; height: 100%; }
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
  .switch { width:46px; height:27px; border-radius: 14px; background: #C7C7C7; position: relative; transition: background-color 0.3s; animation-timing-function: ease-out; }
  .switch span { width:23px; height:23px; border-radius: 50%; background: #ffffff; position: absolute; left:2px; top:2px; transition: left 0.3s; animation-timing-function: ease-out; }
  .switch.active { background: var(--color-main); }
  .switch.active span { left:21px; }

  .top-btns.type2 { height:70px; border-bottom: 1px solid #F5F5F5; }
  .top-btns.type2 .back:after { content: ''; width:22px; height:22px; background: url("~@/assets/images/mypage/ico-close.png")0 0 no-repeat; background-size: contain; position: absolute; left:20px; top:16px; }
  .top-btns.type2 .edit { text-decoration: none; color:var(--color-main); }

  .edit-page { position: fixed; left:0; bottom:0; width:100%; min-height:70%; z-index: 10; background: #fff; transform: translateY(100%); transition: transform 0.5s; animation-timing-function: ease-out;  border-top-left-radius: 25px; border-top-right-radius: 25px; padding-bottom: 70px; box-sizing: border-box; }
  .btn-wrap { width: 100%; position: absolute; left:0; bottom: 30px; text-align: center; }
  .btn { font-size: 20px; font-weight: 500; text-align: center; border: 1px solid; border-color: var(--color-main); line-height: 44px; width:274px; height:46px; border-radius: 23px; cursor:pointer; }
  .btn.update { color:var(--color-main); margin-bottom: 15px; }
  .edit-page.open { transform: translateY(0); }
  .dimOpen .dim { opacity:0.5; z-index: 5; }

  textarea { width:100%; height:200px; border: none; padding: 15px 20px; box-sizing: border-box; }
  textarea::placeholder { color:#ADADAD; }
  .counter { text-align: right; padding-right: 20px; box-sizing: border-box; }
  .counter span { font-size: 14px; color:#ADADAD; }

  .edit-inner { padding: 30px 20px; box-sizing: border-box; }
  .edit-inner .tit { font-size: 16px; font-weight: 500; color:#606060; margin-bottom: 24px; }
  .edit-inner ul { margin-bottom: 30px; max-height:125px; overflow: auto; }
  .edit-inner ul li { display: inline-block; }
  .edit-inner label input[type=radio] + i, .edit-inner label input[type=checkbox] + i { font-size: 14px; font-style: normal; line-height: 18px; font-weight: 500; text-align: center; text-decoration: none; margin: 0 6px 10px 0; padding: 5px 20px; box-sizing: border-box; border: 1px solid #D9D9D9; border-radius: 15px; display: inline-block; cursor: pointer; }
  .edit-inner label input[type=radio]:checked + i, .edit-inner label input[type=checkbox]:checked + i { color:#fff; background-color:#101014; border: 1px solid #101014; }
  .edit-inner label input[type=radio], .edit-inner label input[type=checkbox] { display: none; }
  .edit-inner .dir { font-size: 14px; padding-left: 15px; box-sizing: border-box; width: 140px; height: 28px; line-height: 26px; border: 1px solid #101014; }
  .content-detail { padding: 30px 20px; box-sizing: border-box; border-top: 1px solid #F5F5F5; display: flex; justify-content: space-between; }
  .content-detail .inner { display: inline-block; vertical-align: top; width: 250px; }
  .content-detail .inner p { font-size: 16px; font-weight: 500; margin-bottom: 10px; }
  .content-detail .inner span { font-size: 14px; line-height: 20px; font-weight: 500; color: #808080; }
  .sub-txt { font-size: 16px; font-weight: 500; text-align: left; }

  .foot ul { text-align: center; }
  .foot ul li { width: 50%; display: inline-block; vertical-align: top; text-align: center; }
  .foot ul li span { color:var(--color-main); display: block; margin-bottom: 16px; }
  .foot ul li label input[type=checkbox] + i { width:70px; height:135px; display: inline-block; cursor: pointer; border: none; border-radius: unset; margin: 0; position: relative; }
  .foot ul li label input[type=checkbox]:checked + i { background-color: #fff; border: none; }
  .foot ul .left label input[type=checkbox] + i:after { content:''; width: 100%; height:100%; background: url("~@/assets/images/mypage/left-foot.png")0 0 no-repeat; background-size: contain; position: absolute; left:0; top:0; }
  .foot ul .left label input[type=checkbox]:checked + i:after { content:''; width: 100%; height:100%; background: url("~@/assets/images/mypage/left-foot-on.png")0 0 no-repeat; background-size: contain; position: absolute; left:0; top:0; }
  .foot ul .right label input[type=checkbox] + i:after { content:''; width: 100%; height:100%; background: url("~@/assets/images/mypage/right-foot.png")0 0 no-repeat; background-size: contain; position: absolute; left:0; top:0; }
  .foot ul .right label input[type=checkbox]:checked + i:after { content:''; width: 100%; height:100%; background: url("~@/assets/images/mypage/right-foot-on.png")0 0 no-repeat; background-size: contain; position: absolute; left:0; top:0; }

  .height label { width: 100%; height:60px; border: 1px solid #e5e5e5; border-radius: 5px; display: block;  padding: 0 10px; box-sizing: border-box; }
  .height label input { font-size: 20px; width: calc(100% - 30px); height:100%; border:none;background-color: transparent; }
  .height label span { font-size: 20px; color:#6A6A6A; font-weight: 500; }

  .position { padding-bottom: 150px; }
  .position .top-btns.type1 p { font-size: 24px; font-weight: 500; text-align: left; color:#606060; }
  .position .top-btns.type1 p span { font-weight: 900; color:var(--color-main); }
  .position .btn-wrap .find { font-size: 14px; color:#808080; border: 1px dashed; border-color: var(--color-main); height:36px; line-height: 34px; margin-bottom: 16px; }
  .position .btn-wrap .find img { width: 7px; }

  label.search { border: 1px solid #E5E5E5; border-radius: 5px; width: 100%; height:50px; line-height: 48px; display: block; padding: 0 15px; box-sizing: border-box; margin-bottom: 24px; }
  label.search input { font-size: 16px; border: none; width: calc(100% - 35px); height: 48px; background: transparent; display: inline-block; }
  label.search input::placeholder { color:#BBBBBB; }
  label.search i { width: 20px; height: 20px; background: url("~@/assets/images/mypage/ico-search.png")0 0 no-repeat; background-size: contain; display: inline-block; vertical-align:middle; margin-right: 10px; }
  .add-res i { width:19px; height: 20px; display: inline-block; vertical-align: middle; background: url("~@/assets/images/mypage/ico-pos.png")0 0 no-repeat; background-size: contain; }
  .add-res p { font-size: 16px; color: var(--color-main); margin-left: 10px; display: inline-block; vertical-align: middle; }

  .map-wrap { margin-bottom: 40px; }
  .map-wrap .map { margin-bottom: 15px; height: 200px; overflow: hidden; }
  .map-wrap p { font-size: 16px; line-height: 23px; color:#808080; font-weight: 500; padding: 0 20px; box-sizing: border-box; }
  .map-wrap p b { color:#101014; text-decoration: underline; }

  .badge-edit .content-detail { text-align: center; display: block; }
  .badge-edit .content-detail i, .badge-edit .content-detail p, .badge-edit .content-detail span { display: block; margin: 0 auto; }
  .badge-edit .content-detail i { margin-bottom: 5px; }
  .badge-edit .content-detail p { font-size: 16px; font-weight: 500; color:#606060; margin-bottom: 6px; }
  .badge-edit .content-detail span { font-size: 14px; font-weight: 500; color:#BBBBBB; }
</style>