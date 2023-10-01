<template>
  <div member-app>
    <div class="top-cont">
      <div class="top-btns">
        <RouterLink to="/my_mercenary" class="back" >뒤로가기 </RouterLink>
        <h2>용병 신청</h2>
        <a class="btn alarm"></a>
      </div>
    </div>

    <section>
      <div class="profile-wrap">
        <p class="tit">내 프로필</p>
        <div class="profile-inner">
          <div class="profile">
            <div class="info-wrap">
              <div class="thumb-wrap">
                <div class="thumb">
                  <img src="~@/assets/images/mercenary/noodles.png" alt="">
                </div>
                <p class="name"><b>{{info[0].name}}</b> {{info[0].pos}}</p>
                <a class="btn profile-view">프로필 보기</a>
              </div>
              <div class="info">
                <p class="height">{{info[0].height}}cm</p>
                <p class="foot">{{info[0].foot}}</p>
                <p class="pos">{{info[0].posKr}}</p>
                <p class="addr">{{info[0].addr}}</p>
                <p class="exp">{{info[0].exp}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="inner">
        <p class="tit">스케줄 정보</p>
        <ul>
          <li>
            <div class="cont">
              <img src="~@/assets/images/mercenary/ico-calendar.svg" alt="">
              <div class="c-txt">
                <p>마포초 주말 경기</p>
                <span>마포초에서 주말마다 열리는 친선경기입니다 (풀 코트로 진행해요)</span>
              </div>
            </div>
          </li>
          <li>
            <div class="cont">
              <img src="~@/assets/images/mercenary/ico-schedule.svg" alt="">
              <div class="c-txt">
                <p>2023년 7월 8일 (토) 09:00 ~ 11:00</p>
                <span>예상 소요 시간 120분</span>
              </div>
            </div>
          </li>
          <li>
            <div class="cont">
              <img src="~@/assets/images/mercenary/ico-loacation.svg" alt="">
              <div class="c-txt">
                <p>마포초등학교축구장</p>
                <span>서울특별시 마포구 도화2길 64</span>
              </div>
            </div>
          </li>
          <li>
            <div class="cont">
              <img src="~@/assets/images/mercenary/ico-court.svg" alt="">
              <div class="c-txt">
                <p>풀 코트 11 vs 11</p>
                <span>스케줄 참여 환경에 따라 인원 변동이 있을 수 있어요</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="msg">
        <p class="tit">전달 메시지</p>
        <textarea placeholder="용병에게 초대될 스케줄에 대해서 간략하게 설명해주시고, 요청 사항이 있으시다면 요청사항도 함께 적어주세요." v-model="textarea"></textarea>
      </div>
    </section>

    <div class="bottom-btns" :class="{on:msgPush}">
      <div class="btns">
        <a class="btn">용병 제안하기</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberApplies",
  data() {
    return {
      info: [
        { name:'짜파게띠', pos:'WF', height: 178, foot: '양발', posKr: '레프트 윙 포워드', addr: '서울시 마포구', exp: '76,500,000' },
      ],
      scheduleList: [
        {status: '모집하고 있어요1', tit: '마포초등학교 어셈블 하는 날', date: '2023년 7월 8일 (토) 09:00 ~ 11:00', estimated:'예상 소요 시간 120분', place: '마포초등학교축구장', join: '스터디', category: 'study'},
        {status: '모집하고 있어요2', tit: '마포초등학교 어셈블 하는 날', date: '2023년 7월 8일 (토) 09:00 ~ 11:00', estimated:'예상 소요 시간 120분', place: '마포초등학교축구장', join: '그룹', category: 'group'},
        {status: '모집하고 있어요3', tit: '마포초등학교 어셈블 하는 날', date: '2023년 7월 8일 (토) 09:00 ~ 11:00', estimated:'예상 소요 시간 120분', place: '마포초등학교축구장', join: '경기', category: 'game'},
        {status: '모집하고 있어요4', tit: '마포초등학교 어셈블 하는 날', date: '2023년 7월 8일 (토) 09:00 ~ 11:00', estimated:'예상 소요 시간 120분', place: '마포초등학교축구장', join: '경기관람', category: 'preview'},
        {status: '모집하고 있어요5', tit: '마포초등학교 어셈블 하는 날', date: '2023년 7월 8일 (토) 09:00 ~ 11:00', estimated:'예상 소요 시간 120분', place: '마포초등학교축구장', join: '기타', category: 'etc'}
      ],
      textarea: '',
      msgPush: false,
    }
  },
  watch: {
    textarea(val) {
      if(val.length >= 0) {
        this.msgPush = true;
      }
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

  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; border-bottom: 1px solid #F5F5F5; }
  section {position: relative; margin-top:60px; padding-bottom: 140px; box-sizing: border-box; }

  .top-btns { height: 60px; padding-top: 7px; box-sizing: border-box; text-align: center; display: flex; justify-content: space-between; }
  .top-btns h2 { padding: 0; display: inline-block; border-bottom: none; line-height: 53px; }
  .top-btns a { font-size: 0; width:65px; height:53px; position: relative; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }
  .top-btns a.alarm:after { content: ''; width:17px; height:20px; background: url("~@/assets/images/mercenary/ico-bell.svg")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); display: none; }

  .profile-wrap, .msg { position: relative; padding: 30px 20px 20px; box-sizing: border-box; border-bottom: 1px solid #F5F5F5; }
  .profile-wrap .tit, .schedule-info .tit, .msg .tit { font-size: 16px; line-height: 23px; font-weight: 500; margin-bottom: 20px; }
  .profile-wrap .profile-inner { width: 100%; height: 180px;  border-radius: 15px; overflow:hidden; margin-top: 20px; border: 1px solid #D9D9D9; }
  .profile-wrap .profile { background: #fff; margin: 1px; padding:10px 0 10px 20px; box-sizing: border-box; }
  .profile-wrap .info-wrap { display: flex; }
  .profile-wrap .thumb-wrap { text-align: center; padding: 6px 20px 6px 0; box-sizing: border-box; border-right: 1px solid #F5F5F5; }
  .profile-wrap .thumb-wrap .thumb { width: 90px; height: 90px; border-radius: 50%; overflow: hidden; }
  .profile-wrap .thumb-wrap .thumb img { object-fit: cover; object-position: 50% 50%; }
  .profile-wrap .thumb-wrap .name { font-size: 11px; line-height: 17px; color:#808080; font-weight: 900; margin-top: 10px; }
  .profile-wrap .thumb-wrap .name b { font-size: 12px; color:#101014; font-weight: 700; }
  .profile-wrap .thumb-wrap .btn { font-size: 12px; line-height: 17px; text-decoration: underline; margin-top: 13px; }

  .inner { border-bottom: 10px solid #F5F5F5; padding: 30px 20px; box-sizing: border-box; }
  .inner:last-child { border-bottom: none; }
  .inner > ul li { position: relative; border-bottom: 1px solid #D9D9D9; box-sizing: border-box; padding: 20px 0 25px; }
  .inner > ul li:first-child { padding-top: 0; }
  .inner > ul li:last-child { border-bottom: none; padding-bottom: 0; }
  .inner .tit { font-size: 16px; line-height: 23px; font-weight: 500; margin-bottom: 30px; }
  .inner > ul li .cont img, .inner ul li .cont .c-txt { display: inline-block; vertical-align: top; }
  .inner > ul li .cont .c-txt { width: 80%; margin-left: 20px; }
  .inner > ul li .cont .c-txt p { font-size: 14px; margin-bottom: 5px; }
  .inner > ul li .cont .c-txt span { font-size: 12px; color:#808080; }

  .info-wrap .info { text-align: left; padding: 13px 0 0 20px; box-sizing: border-box; }
  .info-wrap .info p { font-size: 14px; line-height: 20px; font-weight: 500; padding-left: 26px; box-sizing: border-box; color: #101014; position: relative; margin-bottom: 5px; }
  .info-wrap .info p:last-child { margin-bottom: 0; }
  .info-wrap .info p:after { content: ''; position: absolute; left:0; top:50%; transform: translateY(-50%); background-size: contain; }
  .info-wrap .info p.height:after { width:11px; height: 12px; background: url("~@/assets/images/mercenary/ico-height.svg")0 0 no-repeat; left:2px; }
  .info-wrap .info p.foot:after { width: 15px; height: 8px; background: url("~@/assets/images/mercenary/ico-foot.svg")0 0 no-repeat;}
  .info-wrap .info p.pos:after { width: 12px; height: 14px; background: url("~@/assets/images/mercenary/ico-pos.svg")0 0 no-repeat;}
  .info-wrap .info p.addr { margin-bottom: 16px; }
  .info-wrap .info p.addr:after { width: 12px; height: 13px; background: url("~@/assets/images/mercenary/ico-addr.svg")0 0 no-repeat;}
  .info-wrap .info p.exp:after { width: 12px; height: 12px; background: url("~@/assets/images/mercenary/ico-exp.svg")0 0 no-repeat;}
  .info-wrap .info p.exp { font-size: 16px; font-weight: 700; padding-left: 20px; }

  .msg { border-bottom: none; }
  .msg textarea { font-size: 14px; line-height: 18px; padding: 8px 10px; box-sizing: border-box; width: 100%; height: 150px; overflow-y: scroll; border: 1px solid #bbb; border-radius: 9px; outline: none; }

  .bottom-btns { position: fixed; left:0; bottom: 0; width: 100%; text-align: center; padding: 5px 30px 40px; box-sizing: border-box; background:#fff; z-index: 10; border-top: 1px solid; border-color: #F5F5F5; }
  .bottom-btns p { font-size: 14px; line-height: 20px; margin-bottom: 15px; }
  .bottom-btns p span { color:var(--color-main); }
  .bottom-btns .btns div { display: flex; justify-content: space-between; }
  .bottom-btns a { font-size:16px; line-height: 40px; color:#fff; font-weight: 500; width:100%; text-align: center; display: inline-block; vertical-align: middle; border-radius: 20px; margin: 0 5px; background: #BBBBBB; pointer-events: none; }
  .bottom-btns.on a { background: var(--color-main); pointer-events: auto; }
</style>