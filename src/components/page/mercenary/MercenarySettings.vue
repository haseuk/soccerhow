<template>
  <div merSet >

    <div class="top-cont">
      <div class="top-btns">
        <RouterLink to="/" class="back" >뒤로가기 </RouterLink>
        <h2>용병 설정</h2>
        <a class="btn alarm"></a>
      </div>
    </div>

    <section>
      <div class="content-detail">
        <div class="inner head">
          <ul>
            <li>
              <div class="switch-wrap">
                <p>용병 제안 받기 <span>용병 리스트에 노출되고 있지 않아요</span></p>
                <a class="switch" :class="{active:isSwitchA1}" @click="switchToggle('acceptance')"><span></span></a>
              </div>
            </li>
          </ul>
        </div>
        <div class="inner content-inner" :class="schedule">
          <ul>
            <li :class="{open:isSwitchB1}">
              <div class="switch-wrap">
                <p>시간대 설정 <span>모든 시간</span></p>
                <a class="switch" :class="{active:isSwitchB1}" @click="switchToggle('b1')"><span></span></a>
              </div>

              <div class="time-window window" :class="{'all-day':allDay}">
                <div class="title">
                  <p class="tit">언제 활동하는 용병을 찾을까요?</p>
                </div>

                <div class="time-board">
                  <div class="schedule-wrap">
                    <span class="shape"></span>
                    <a class="btn" @click="selectSchedule('weekly')">평일</a>
                    <a class="btn" @click="selectSchedule('holiday')">휴일</a>
                    <a class="btn" @click="selectSchedule('all')">모든 시간</a>
                  </div>

                  <div class="time-zone">
                    <p class="tit">시간대</p>
                    <div class="inp-wrap">
                      <label>
                        <input type="time" :disabled="allDay">
                      </label>
                      <span>~</span>
                      <label>
                        <input type="time" :disabled="allDay">
                      </label>
                    </div>
                  </div>

                  <div class="btns">
                    <a class="btn all" @click="allDayActive">하루종일</a>
                    <a class="btn reset">다시 설정</a>
                  </div>
                </div>
              </div>
            </li>
            <li :class="{open:isSwitchC1}">
              <div class="switch-wrap">
                <p>지역 설정 <span>1km</span></p>
                <a class="switch" :class="{active:isSwitchC1}" @click="switchToggle('c1')"><span></span></a>
              </div>

              <div class="dis-window window" :class="{'all-areas':allAreas}">
                <div class="title">
                  <p class="tit">제안서를 받아볼 지역</p>
                </div>
                <div class="dis-board">
                  <datalist id="km" class="dis-km" :class="'dis-km-'+this.disStatus">
                    <option value="1" :label="item+'km'" :class="'km-'+item" v-for="(item,i) in kmUnit" :key="i"></option>
                  </datalist>
                  <div class="inp">
                    <input type="range" min="1" max="20" step="1" list="km" v-model="disStatus" :disabled="allAreas">
                  </div>
                </div>
                <p class="txt" v-if="allAreas"><span>20km 이상의 모든 지역</span>에서 제안서를 받을게요</p>
                <p class="txt" v-else>거리가 <span>{{disStatus}}km</span> 이내인 제안서만 받을게요</p>
                <div class="btns">
                  <a class="btn all" @click="allAreasActive">모든 지역 받기</a>
                </div>
              </div>
            </li>
            <li :class="{open:isSwitchD1}">
              <div class="switch-wrap">
                <p>경기 형태 <span>설정 없음</span></p>
                <a class="switch" :class="{active:isSwitchD1}" @click="switchToggle('d1')"><span></span></a>
              </div>

              <div class="window play-type" :class="{'all-type':allType}">
                <div class="title">
                  <p class="tit">선호하는 경기</p>
                </div>

                <div class="edit-inner">
                  <div class="type type-a">
                    <label>
                      <input type="checkbox" :checked="allType">
                      <i></i>
                      <span>소규모  5 vs 5</span>
                    </label>
                  </div>
                  <div class="type type-b">
                    <label>
                      <input type="checkbox" :checked="allType">
                      <i></i>
                      <span>소규모  6 vs 6</span>
                    </label>
                  </div>
                  <div class="type type-c">
                    <label>
                      <input type="checkbox" :checked="allType">
                      <i></i>
                      <span>풀코트 11 vs 11</span>
                    </label>
                  </div>
                </div>
                <div class="btns">
                  <a class="btn all" @click="allTypeActive">모든 경기 형태</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="inner head">
          <ul>
            <li class="profile">
              <p>프로필 설정 <span>프로필 정보를 수정하세요</span></p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!--수락-->
    <div class="pop" v-if="active === 'accept'">
      <div class="dim"></div>
      <div class="inner">
        <p class="tit">용병 제안을 수락할까요?</p>
        <p class="txt">수락 이후에는 조건에 따라 취소하기 어려울 수 있습니다.</p>
        <div class="btns">
          <a class="off" @click="accept">수락하기</a>
          <a class="cancel" @click="active = ''">취소하기</a>
        </div>
      </div>
    </div>

    <!--거절-->
    <div class="pop" v-if="active === 'refuse'">
      <div class="dim"></div>
      <div class="inner">
        <p class="tit">용병 제안을 거절할까요?</p>
        <p class="txt">거절 이후에는 결정을 되돌리거나 변경할 수 없습니다.</p>
        <div class="btns">
          <a class="off" @click="refuse">거절하기</a>
          <a class="cancel" @click="active = ''">취소하기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MercenarySettings",
  data() {
    return {
      isSwitchA1: false,
      isSwitchB1: false,
      isSwitchC1: false,
      isSwitchD1: false,
      isSwitchE1: false,
      popUp: false,
      active: '',
      acceptStatus: false,
      schedule: 'weekly',
      allDay: false,
      kmUnit: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      disStatus: 1,
      allAreas: false,
      allType: false,
    }
  },
  methods: {
    switchToggle(v) {
      if(v === 'acceptance') {
        if(!this.acceptStatus) this.active = 'accept';
        else this.active = 'refuse';
      }
      if(v === 'b1') {this.isSwitchB1 = !this.isSwitchB1; this.isSwitchA1 = true; this.acceptStatus = true;}
      if(v === 'c1') {this.isSwitchC1 = !this.isSwitchC1; this.isSwitchA1 = true; this.acceptStatus = true;}
      if(v === 'd1') {this.isSwitchD1 = !this.isSwitchD1; this.isSwitchA1 = true; this.acceptStatus = true;}
      if(v === 'e1') {this.isSwitchE1 = !this.isSwitchE1;}
    },
    accept() {
      this.isSwitchA1 = true;
      this.active = '';
      this.acceptStatus = true;
    },
    refuse() {
      this.isSwitchA1 = false;
      this.isSwitchB1 = false;
      this.isSwitchC1 = false;
      this.isSwitchD1 = false;
      this.active = '';
      this.acceptStatus = false;
    },
    selectSchedule(v) {
      this.schedule = v;
    },
    allDayActive() {
      this.allDay = !this.allDay;
    },
    allAreasActive() {
      this.allAreas = !this.allAreas;
    },
    allTypeActive() {
      this.allType = !this.allType;
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

  [merset] { overflow:hidden; }
  .dim { background: rgba(0,0,0,0.3); position: fixed; left:0; top:0; width:100%; height:100%; opacity: 0; transition: opacity 0.3s; animation-timing-function: ease-out; }
  .dimOpen .dim { opacity:0.5; z-index: 5; }

  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; }
  section {position: relative; margin-top:60px; }

  .top-btns { height: 60px; border-bottom: 1px solid; border-color: #F5F5F5; padding-top: 7px; box-sizing: border-box; text-align: center; display: flex; justify-content: space-between; }
  .top-btns h2 { padding: 0; display: inline-block; border-bottom: none; line-height: 53px; }
  .top-btns a { font-size: 0; width:65px; height:53px; position: relative; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }
  .top-btns a.alarm:after { content: ''; width:17px; height:20px; background: url("~@/assets/images/mercenary/ico-bell.svg")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }

  .inner { border-bottom: 10px solid #F5F5F5; }
  .inner.head li { padding: 30px 20px; }
  .inner:last-child { border-bottom: none; }
  .inner ul li { padding: 20px; position: relative; }
  .inner ul li:after { content:''; position: absolute; left:20px; bottom: 0; width: calc(100% - 40px); border-bottom: 1px solid #F5F5F5; }
  .inner ul li .switch-wrap { display: flex; justify-content: space-between; }
  .inner ul li:last-child { margin-bottom: 0; }
  .inner ul li:last-child:after { display: none; }
  .inner ul li.open { border-bottom: 10px solid #F5F5F5; }
  .inner ul li.open:after { display: none; }
  .inner ul li p { font-size: 16px; line-height: 23px; }
  .inner ul li p span { font-size: 12px; line-height: 17px; color:#606060; display: block; }
  .inner ul li p, .content-detail .inner ul li a { vertical-align: middle; }
  .inner ul li.profile { position: relative; }
  .inner ul li.profile:after { content:''; width:13px; height: 25px; background:url("~@/assets/images/mercenary/ico-arrow.svg")0 0 no-repeat; background-size: contain; position: absolute; left:auto; right:20px; top:50%; transform: translateY(-50%); display: inline-block; }

  .switch { width:46px; height:27px; border-radius: 14px; background: #C7C7C7; position: relative; transition: background-color 0.3s; animation-timing-function: ease-out; }
  .switch span { width:23px; height:23px; border-radius: 50%; background: #ffffff; position: absolute; left:2px; top:2px; transition: left 0.3s; animation-timing-function: ease-out; }
  .switch.active { background: var(--color-main); }
  .switch.active span { left:21px; }

  .inner ul li.open .window { margin-top: 40px; height: auto; opacity: 1; pointer-events: auto; }
  .window { display: block; height: 0; opacity: 0; }
  .window .title { margin-bottom: 20px; }
  .window .title .tit { font-size: 20px; line-height: 29px; font-weight: 500; }
  .window .title .txt { font-size: 14px; font-weight: 500; line-height: 20px; color:#808080; }
  .window .btns { margin-top:30px; display: flex; justify-content: space-between; }
  .window .btns a { font-size: 14px; line-height: 20px; color:#606060; font-weight: 500; padding: 9px 15px; box-sizing: border-box; text-align: center; }
  .window .btns .all { border-radius: 20px; border: 1px solid #d9d9d9; }
  .window .btns .reset { text-decoration: underline; padding-right: 0; }
  .window.all-day .btns .all, .window.all-areas .btns .all, .window.all-type .btns .all { background: var(--color-main); color:#fff; border-color:var(--color-main); }

  .time-board .schedule-wrap { font-size: 0; width:250px; height: 45px; background: #E0E0E0; border-radius: 23px; padding: 0 6px; box-sizing: border-box; box-shadow:inset 0 3px 5px 1px rgba(0,0,0,0.2); position: relative; }
  .time-board .schedule-wrap .shape { width: 68px; height: 35px; display: block; background:#fff; border-radius: 18px; box-shadow: 0 0 5px 2px rgba(0,0,0,0.2); position: absolute; top:5px; left:6px; transition: width 0.2s, left 0.2s; animation-timing-function: ease-out; }
  .time-board .schedule-wrap a { font-size: 14px; line-height: 35px; font-weight: 500; color:#606060; box-sizing: border-box; display: inline-block; vertical-align: middle; text-align: center; width: 68px; top:5px; position: absolute; z-index: 1; }
  .time-board .schedule-wrap a:nth-of-type(1) { left:6px; }
  .time-board .schedule-wrap a:nth-of-type(2) { left:77px; }
  .time-board .schedule-wrap a:nth-of-type(3) { width:94px; left:150px; }

  .time-zone { margin-top: 20px; }
  .time-zone .tit { font-size: 14px; font-weight: 500; color:#606060; margin-bottom: 10px; }
  .inp-wrap { font-size: 14px; font-weight: 500; color:#606060; display: flex; justify-content: space-between; }
  .inp-wrap label { border:1px solid #D9D9D9; width: 47%; height: 40px; line-height: 38px; border-radius: 5px; }
  .inp-wrap label input { border: none; width: 100%; height: 100%; background: transparent; padding: 0 10px; box-sizing: border-box; vertical-align: top; }
  .inp-wrap span { font-size: 16px; font-weight: 500; width: 6%; height: 40px; text-align:center; line-height: 40px; display: inline-block; }
  .time-window.all-day .inp-wrap label { border: 1px solid #F5F5F5; background: #F5F5F5; }
  .time-window.all-day .time-board .all-time { background: var(--color-main); color:#fff; }

  .content-inner.holiday .schedule-wrap .shape { left:77px; }
  .content-inner.all .schedule-wrap .shape { width:94px; left:150px; }
  .content-inner.all .time-zone, .content-inner.all .btns { opacity: 0; height: 0; margin-top: 0; pointer-events: none; }

  .dis-window .dis-board { margin-top: 20px; }
  .dis-window .dis-board datalist { display: flex; justify-content: space-between; }
  .dis-window .dis-board datalist option { font-size: 0; color:#606060; padding: 0; }
  .dis-window .dis-board datalist option.km-1,
  .dis-window .dis-board datalist option.km-3,
  .dis-window .dis-board datalist option.km-10,
  .dis-window .dis-board datalist option.km-20 { font-size: 12px; }
  .dis-window .dis-board .dis-km-1 .km-1,
  .dis-window .dis-board .dis-km-3 .km-3,
  .dis-window .dis-board .dis-km-10 .km-10,
  .dis-window .dis-board .dis-km-20 .km-20 { color:var(--color-main); }
  .dis-window .dis-board .km-3,
  .dis-window .dis-board .km-10 { margin-left: -10px; }
  .dis-window .dis-board input[type=range] { width: 100%; padding: 0 10px; box-sizing: border-box; }
  .dis-window .dis-board input[type=range]::-webkit-slider-runnable-track { background:#F5F5F5; height: 4px; }
  .dis-window .dis-board input[type=range]::-moz-range-track { background:#F5F5F5; height: 4px; }
  .dis-window .dis-board input[type=range]::-ms-track { background:#F5F5F5; height: 4px; }
  .dis-window .dis-board input[type=range]::-webkit-slider-thumb { width: 14px; height: 14px; margin-top: -5px; background: var(--color-main); border-radius: 50%; -webkit-appearance: none; }
  .dis-window .dis-board .inp { position: relative; }
  .dis-window .dis-board .inp:before { content:''; width: 2px; height: 12px; background: #F5F5F5; position: absolute; left:10px; top:50%; transform: translateY(-50%); }
  .dis-window .dis-board .inp:after { content:''; width: 2px; height: 12px; background: #F5F5F5; position: absolute; right:6px; top:50%; transform: translateY(-50%); }
  .dis-window .txt { font-size: 12px; color:#606060; margin-top: 20px; }
  .dis-window .txt span { color:var(--color-main); display: inline-block; }
  .dis-window.all-areas .dis-board .dis-km option { color:#E0E0E0!important; }
  .dis-window.all-areas .dis-board input[type=range]::-webkit-slider-thumb { background: #E0E0E0; }

  .play-type .type { width: 47%; height: 136px; display: inline-block; vertical-align: top; margin-bottom: 20px; position: relative; }
  .play-type .type:last-child { margin-bottom:0; }
  .play-type .type label { width: 100%; height: 100%; display: block; border-radius: 15px; box-shadow: 0 0 7px 0 rgba(0,0,0,0.2); padding-top: 100px; box-sizing: border-box; text-align: center; }
  .play-type .type label input[type=checkbox] + i { width: 100%; height: 100%; position: absolute; left:0; top:0; border: 1px solid #D9D9D9; border-radius: 15px; }
  .play-type .type label input[type=checkbox]:checked + i { background:#FFF3EC; border: 1px solid #FAC74D; }
  .play-type .type label input[type=checkbox] { display: none; }
  .play-type .type label span { font-size: 14px; color:#606060; font-weight: 500; line-height: 20px; position: relative; z-index: 1; }
  .play-type .type-a { margin-right: 5%; }
  .play-type .type:after { content:''; position: absolute; left:50%; top:20px; transform: translateX(-50%); pointer-events: none; }
  .play-type .type-a:after { content:''; width:95px; height: 66px; background: url("~@/assets/images/mercenary/play-type-5.png")0 0 no-repeat; background-size: contain; }
  .play-type .type-b:after { content:''; width:119px; height: 68px; background: url("~@/assets/images/mercenary/play-type-6.png")0 0 no-repeat; background-size: contain; }
  .play-type .type-c { width:100%; height: 205px; }
  .play-type .type-c label { padding-top: 173px; }
  .play-type .type-c:after { content:''; width:240px; height: 135px; background: url("~@/assets/images/mercenary/play-type-11.png")0 0 no-repeat; background-size: contain; }


  .pop { position: fixed; left:0; top:0; width: 100%; height: 100%; z-index: 10; }
  .pop .dim { background: rgba(0,0,0,0.3); position: absolute; left:0; top:0; width: 100%; height: 100%; opacity: 1; }
  .pop .inner { width: 280px; background: #fff; border-radius: 12px; text-align: left; box-shadow: 0 10px 10px 0 rgba(0,0,0,0.5); position: absolute; left:50%; margin-left: -140px; top:50%; margin-top: -100px; padding: 20px; box-sizing: border-box; z-index: 10; }
  .pop .tit { font-size: 16px; line-height: 23px; font-weight: 500; margin-bottom: 8px; color:#000; }
  .pop .txt { font-size: 15px; line-height: 22px; color:#606060; margin-bottom: 20px; }
  .pop .btns { display: flex; justify-content: space-between; }
  .pop .btns a { font-size: 15px; font-weight: 500; width:116px; height: 40px; line-height: 40px; text-align: center; border-radius: 20px; border: 1px solid #D9D9D9; box-sizing: border-box; }
  .pop .btns a.off { border-color:var(--color-main); }
</style>