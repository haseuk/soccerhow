<template>
  <div mercenary :class="{dimOpen:isDim}">
    <div class="dim"></div>
    <!--header-->
    <div class="header" style="width: 100%;height: 98px;position: fixed;left:0;top:0;background: #fff;z-index: 3;">
      <img src="~@/assets/images/mercenary/header.png" alt="" style="margin: 0 auto;display: block;">
    </div>
    <!--header-->




    <div class="top">
      <div class="tab-wrap">
        <a class="btn tab memb" :class="{on:tab === 'memb'}" @click="selectType('memb')">회원 용병</a>
        <a class="btn tab coach" :class="{on:tab === 'coach'}" @click="selectType('coach')">코치 용병</a>
      </div>

      <div class="view-set">
        <a class="btn filter" @click="editPageOpen('filter')">필터</a>
        <a class="btn full-view" @click="fullView">전체보기</a>
      </div>
    </div>

    <div class="wrap">
      <div class="search">
        <img src="~@/assets/images/mercenary/ico-search.svg" alt="">
        <div class="text">
          <p class="tit">어떤 용병을 찾으세요? </p>
          <p class="txt">모든 포지션 &#183; 내 근처 &#183; 모든 시간</p>
        </div>
        <a class="btn" @click="editPageOpen('search')">용병찾기</a>
      </div>

      <div class="content" :style="`height:${this.winH - 150}px`"><!--화면 높이는 header높이:98+top높이:52 = 150을 뺀값 -->

        <!--map api 연동부분-->
        <div class="map" id="map">
          <img src="~@/assets/images/mercenary/map.png" alt="" style="width: 100%;">
          <span class="dir-icon" style="display: block;position: absolute;left:50%;top:170px;transform: translateX(-50%);"><img src="~@/assets/images/mercenary/ico-dir.png" alt=""></span>
          <div class="marker member" style="position: absolute; left:50px;top:100px;">
            <div class="thumb"><i><img :src="require(`@/assets/images/mercenary/marker5.png`)" alt=""></i></div>
            <p>1.7억</p>
          </div>
          <div class="marker coach" style="position: absolute; left:200px;top:320px;">
            <div class="thumb"><i><img :src="require(`@/assets/images/mercenary/marker5.png`)" alt=""></i></div>
          </div>
          <a class="btn location" :style="`top:${this.winH - 150 - 138 - 50}px`">현재위치</a>
        </div>
        <!--map api 연동부분-->

        <div class="mercenary-list" :class="{hide:fullViewOn}" :style="`paddingTop:${this.winH - 150 - 138}px`"><!--용병지도로 보기 하단으로 숨겨지지 않게 리밋 적용: 용병지도로 보기 해더 부분 55+하단 메뉴바 83 = 138-->
          <div class="list-inner">
            <p class="tit">{{list.length}}명의 용병 지도로 보기</p>

            <ul class="list-wrap">
              <li v-for="(item,i) in list" :key="i">
                <div class="thumb">
                  <img :src="require(`@/assets/images/mercenary/dummy${i+1}.png`)" alt="">
                </div>
                <div class="info">
                  <p class="nick">{{item.nick}} <span>{{item.pos}}</span> <img :src="require(`@/assets/images/mercenary/badge-${item.badge}.svg`)" alt=""></p>
                  <p class="height">{{item.height}}cm</p>
                  <p class="foot">{{item.foot}}</p>
                  <p class="pos">{{item.posKr}}</p>
                  <p class="addr">{{item.addr}}</p>
                  <p class="favorite">좋아하는 경기: {{item.favorite}}</p>
                  <p class="time">좋아하는 시간: {{item.time}}</p>
                  <p class="exp">{{item.exp}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--용병 검색-->
    <div class="search-wrap edit-page" :class="[{open:isSearch}, {gradient:isGradient}]">
      <div class="top-btns type2">
        <a class="close" @click="close('search')">닫기</a>
        <h3>용병 검색</h3>
      </div>

      <div class="content-wrap" :class="[{step1: stepStatus === 'step1'},{step2: stepStatus === 'step2'},{step3: stepStatus === 'step3'}]">
        <div class="content-inner" :class="schedule">
          <div class="box1 box big"></div>
          <div class="box2 box"></div>
          <div class="box3 box"></div>

          <div class="pos-wrap step-wrap step1-wrap">
            <div class="selected-box default-box step1-box" @click="stepSelected('step1')">
              <p>선택한 포지션</p>
              <p class="selected-value">CF/SS</p>
            </div>

            <div class="position-window window">
              <div class="title">
                <p class="tit">어떤 포지션을 찾고 있나요?</p>
                <p class="txt">아이콘을 누르면 더 상세히 볼 수 있어요</p>
              </div>

              <div class="pos-board" :class="this.posName">
                <div class="ground" @click="posDisable">
                  <div class="g-inner" :style="`transformOrigin:${this.transformOrigin}`">
                    <span class="l-line"></span>
                    <span class="c-line"></span>
                    <span class="c-circle"></span>
                    <span class="r-line"></span>
                  </div>
                </div>
                <div class="select-pos" :class="{off:posName !== ''}">
                  <a class="btn" :class="item" :index="i" v-for="(item,i) in selectPos" :key="i" @click="selectedPos(item)"><span>{{item}}</span></a>
                </div>
              </div>
            </div>
          </div>

          <div class="distance-wrap step-wrap step2-wrap">
            <div class="dis-box default-box step2-box" @click="stepSelected('step2')">
              <p>나와의 거리</p>
              <p class="selected-value">{{disStatus}}KM</p>
            </div>

            <div class="dis-window window">
              <div class="title">
                <p class="tit">표시할 거리를 설정해주세요</p>
              </div>
              <div class="dis-board">
                <datalist id="km" class="dis-km" :class="'dis-km-'+this.disStatus">
                  <option value="1" :label="item+'km'" :class="'km-'+item" v-for="(item,i) in kmUnit" :key="i"></option>
                </datalist>
                <div class="inp">
                  <input type="range" min="1" max="20" step="1" list="km" v-model="disStatus">
                </div>
              </div>
              <p class="txt">회원님과의 거리가 <span>{{disStatus}}km</span> 이내인 용병만 추천받고 있어요</p>
            </div>
          </div>

          <div class="time-wrap step-wrap step3-wrap" @click="stepSelected('step3')">
            <div class="time-box default-box step3-box">
              <p>시간</p>
              <p class="selected-value">평일 12:00 ~ 16:00</p>
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
                  <a class="btn all-time" @click="allDayActive">하루종일</a>
                  <a class="btn reset">다시 설정</a>
                </div>
              </div>
            </div>
          </div>


          <div class="bott-btns">
            <a class="btn clear">전체 해제</a>
            <a class="btn list-view">21명의 용병 보기</a>
          </div>
        </div>
      </div>
    </div>


    <!--필터-->
    <div class="filter-wrap edit-page" :class="{open:isFilter}">
      <div class="top-btns type2">
        <a class="close" @click="close('filter')">닫기</a>
        <h3>필터</h3>
      </div>

      <div class="content-inner">
        <div class="inner-wrap">

          <div class="inner">
            <h4>몸값</h4>
            <div class="edit-inner">
              <div class="graph">
                <div class="bar-wrap" style="height: 80px;"  :style="`width:${ransom}%`">
                  <div class="bar-line"></div>
                  <div class="bar-inner">
                    <i v-for="(item, i) in bar" :key="i" :style="`height:${Math.floor((Math.random() * (70 - 40)) + 40)}px`"></i><!--임의 값으로 보여주기만 -->
                  </div>
                </div>
                <input type="range" v-model="ransom">
              </div>
              <div class="inp-wrap graph-inp">
                <label>
                  <span>최저</span>
                  <input type="number" placeholder="100,000">
                </label>
                <span>~</span>
                <label>
                  <span>최대</span>
                  <input type="number" placeholder="700,000">
                </label>
              </div>
            </div>
          </div>
          <div class="inner physical">
            <h4>피지컬</h4>
            <div class="edit-inner">
              <p class="tit">키</p>
              <div class="inp-wrap">
                <label>
                  <input type="number" placeholder="숫자만 입력하세요">
                  <span>cm</span>
                </label>
                <span>~</span>
                <label>
                  <input type="number" placeholder="숫자만 입력하세요">
                  <span>cm</span>
                </label>
              </div>
            </div>
          </div>
          <div class="inner">
            <h4>사용하는 발</h4>
            <p class="tit">양발이면 모두 선택해주세요</p>
            <div class="edit-inner foot">
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
          </div>
          <div class="inner">
            <h4>연령대</h4>
            <div class="edit-inner age-edit">
              <ul>
                <li v-for="(item, i) in ageRange" :key="i">
                  <label>
                    <input type="radio" name="age">
                    <i>{{item}}</i>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div class="inner play-type">
            <h4>경기 형태</h4>
            <p class="tit">용병이 선호하는 경기 형태를 볼 수 있어요</p>
            <div class="edit-inner">
              <div class="type type-a">
                <label>
                  <input type="checkbox">
                  <i></i>
                  <span>소규모  5 vs 5</span>
                </label>
              </div>
              <div class="type type-b">
                <label>
                  <input type="checkbox">
                  <i></i>
                  <span>소규모  6 vs 6</span>
                </label>
              </div>
              <div class="type type-c">
                <label>
                  <input type="checkbox">
                  <i></i>
                  <span>풀코트 11 vs 11</span>
                </label>
              </div>
            </div>
          </div>
          <div class="inner recent">
            <div class="inner-box">
              <h4>최근에 활동한 용병만 보기</h4>
              <p class="txt">최근 1개월 이내에 활동한 이력이 있는 용병만 볼 수 있어요</p>
            </div>
            <a class="switch" :class="{active:isSwitch}" @click="switchToggle"><span></span></a>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "Mercenary",
  data() {
    return {
      winH: 0,
      isDim: false,
      list: [
        {nick: '도곡동메시', pos: 'WF', badge: 'type-a', height: 178, foot: '양발', posKr: '레프트 윙 포워드', addr: '서울시 마포구', favorite: '풀 코드', time: '18:00 ~ 22:00', exp: '76,500,000' },
        {nick: '도곡동메시', pos: 'WF', badge: 'type-b', height: 178, foot: '양발', posKr: '레프트 윙 포워드', addr: '서울시 마포구', favorite: '풀 코드', time: '18:00 ~ 22:00', exp: '76,500,000' },
        {nick: '도곡동메시', pos: 'WF', badge: 'type-b', height: 178, foot: '양발', posKr: '레프트 윙 포워드', addr: '서울시 마포구', favorite: '풀 코드', time: '18:00 ~ 22:00', exp: '76,500,000' },
        {nick: '도곡동메시', pos: 'WF', badge: 'type-a', height: 178, foot: '양발', posKr: '레프트 윙 포워드', addr: '서울시 마포구', favorite: '풀 코드', time: '18:00 ~ 22:00', exp: '76,500,000' },
      ],
      tab: 'memb',
      fullViewOn: false,
      isSearch: false,
      isFilter: false,
      stepStatus: 'step1',
      selectPos: [ 'cf', 'ss', 'am', 'cm', 'dm', 'lwf', 'lm', 'rwf', 'rm', 'rb', 'cb', 'cb', 'lb', 'gk' ],
      transformOrigin: '',
      posName: '',
      kmUnit: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      disStatus: 1,
      schedule: 'weekly',
      isGradient: false,
      ageRange: ['연령무관', '10대', '20대', '30대', '40대', '50대', '60대'],
      isSwitch: false,
      ransom: 30,
      bar: 100,
      allDay: false,
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.winH = window.innerHeight;
    },
    selectType(type) {
      this.tab = type;
    },
    fullView() {
      this.fullViewOn =! this.fullViewOn;
    },
    editPageOpen(v) {
      if(v === 'search') this.isSearch = true;
      if(v === 'filter') this.isFilter = true;
      this.isDim = true;
    },
    close(v) {
      if(v === 'search') this.isSearch = false;
      if(v === 'filter') this.isFilter = false;
      this.isDim = false;
    },
    stepSelected(v) {
      this.stepStatus = v;
      this.gradientAction();
    },
    selectedPos(v) {
      if(this.posName !== '') {this.posDisable(); return;}
      if(v === 'cf') {this.transformOrigin = '0 50%'; this.posName = v;}
      if(v === 'cm') {this.transformOrigin = '50% 50%'; this.posName = v;}
      if(v === 'rm') {this.transformOrigin = '20% top'; this.posName = v;}
      if(v === 'lm') {this.transformOrigin = '20% bottom'; this.posName = v;}
      if(v === 'cb') {this.transformOrigin = 'center right'; this.posName = v;}
      if(v === 'gk') {this.transformOrigin = 'center right'; this.posName = v;}
    },
    posDisable() {
      this.posName = ''
    },
    selectSchedule(v) {
      this.schedule = v;
    },
    gradientAction() {
      this.isGradient = true;
      setTimeout(() => {
        this.isGradient = false
      }, 1000)
    },
    switchToggle() {
      this.isSwitch = !this.isSwitch;
    },
    allDayActive() {
      this.allDay = !this.allDay;
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
  input { outline: none; margin: 0; }
  input[type=number]::-webkit-outer-spin-button,input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
  .btn { cursor: pointer; z-index: 1; position: relative; }

  [mercenary] { position: relative; }
  .dim { background: rgba(0,0,0,0.3); position: fixed; left:0; top:0; width:100%; height:100%; opacity: 0; transition: opacity 0.3s; animation-timing-function: ease-out; }

  .top { width: 100%; height: 52px; padding: 10px 20px 4px; box-sizing: border-box;  display: flex; justify-content: space-between; position: fixed; left:0; top:98px; background: #fff; z-index: 3; }
  .tab-wrap .tab { font-size: 14px; color:#606060; font-weight: 500; text-align: left; width: 100px; height: 38px; line-height: 36px; margin-right: 6px; border: 1px solid #D9D9D9; border-radius: 20px; box-sizing: border-box; padding-left: 30px; position: relative; }
  .tab-wrap .tab.on { color:#fff; background: var(--color-main); }
  .tab-wrap .tab:after { content:''; width:14px; height: 14px; position: absolute; left:12px; top:50%; transform: translateY(-50%); }
  .tab-wrap .tab.memb:after { background: url("~@/assets/images/mercenary/ico-memb-color.svg")0 0 no-repeat; background-size: contain; }
  .tab-wrap .tab.memb.on:after { background: url("~@/assets/images/mercenary/ico-memb.svg")0 0 no-repeat; background-size: contain; }
  .tab-wrap .tab.coach:after { height: 18px; background: url("~@/assets/images/mercenary/ico-coach-color.svg")0 0 no-repeat;  background-size: contain; }
  .tab-wrap .tab.coach.on:after { height: 18px; background: url("~@/assets/images/mercenary/ico-coach.svg")0 0 no-repeat;  background-size: contain; }
  .tab-wrap .tab:last-child { margin-right: 0; }

  .wrap { font-size: 0; position: relative; padding-top: 150px; box-sizing: border-box; overflow: hidden; }
  .view-set { display: flex; justify-content: space-between; padding-top: 4px; box-sizing: border-box; }
  .view-set a { font-size: 0; width: 30px; height: 30px; margin-left: 10px; border-radius: 50%; box-shadow: 0 0 5px 0 rgba(0,0,0,0.5); position: relative; }
  .view-set a:after { content: ''; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }
  .view-set a.filter:after { width: 15px; height: 17px; background: url("~@/assets/images/mercenary/ico-filter.svg")0 0 no-repeat; background-size: contain; }
  .view-set a.full-view:after { width: 16px; height: 16px; background: url("~@/assets/images/mercenary/ico-map.svg")0 0 no-repeat; background-size: contain; }
  .view-set a.full-view.on:after { background: url("~@/assets/images/mercenary/ico-map-on.svg")0 0 no-repeat; }
  .view-set a:first-child { margin-left: 0; }

  .search { width:90%; height: 57px; border-radius: 29px; padding: 10px 20px; box-sizing: border-box; box-shadow: 0 0 5px 0 rgba(0,0,0,0.3); position: fixed; left:50%; top:160px; margin-left:-45%; background:#fff; z-index: 5; }
  .search img { width:20px; height:20px; display: inline-block; vertical-align: middle; }
  .search .text { display: inline-block; vertical-align: middle; margin-left: 17px; }
  .search .text p.tit { font-size: 14px; line-height: 20px; color:#101014; font-weight: 500; }
  .search .text p.txt { font-size: 12px; line-height: 17px; color:#808080; }
  .search a { font-size: 0; width: 100%; height: 100%; position: absolute; left:0; top:0; }

  .content { position: relative; overflow: hidden; }
  .content .map { position: absolute; width: 100%; height: 100%; left:0; top:0; }
  .content .map .location { position: absolute; width: 30px; height: 30px; right:20px; top:0; background: #fff; border-radius: 50%; box-shadow: 0 0 5px 0 rgba(0,0,0,0.3); }
  .content .map .location.on { left:20px; right:auto; top:auto!important; bottom: 103px; }
  .content .map .location:after { content:''; position: absolute; width: 17px; height: 17px; left:50%; top:50%; transform: translate(-50%,-50%); background: url("~@/assets/images/mercenary/ico-loc.svg")0 0 no-repeat; background-size: contain; }
  .map .marker { position: relative; }
  .map .marker .thumb, .map .marker p { display: inline-block; vertical-align: middle; }
  .map .marker .thumb { width:64px; position: relative; padding:3px 7px; box-sizing: border-box; }
  .map .marker .thumb:after { content: ''; width:64px; height: 75px; position: absolute; left:0; top:0; background: url("~@/assets/images/mercenary/ico-bubble.png")0 0 no-repeat; background-size: contain;}
  .map .marker .thumb i { width:50px; height: 50px; border-radius: 50%; position: relative; overflow: hidden; padding: 2px; box-sizing: border-box; background: #fff; display: block; z-index: 1; }
  .map .marker .thumb i img { width:100%; height: 100%; object-fit: cover; }
  .map .marker p { font-size: 16px; line-height: 23px; font-weight: 700; color:var(--color-main); padding:3px 10px 3px 27px; box-sizing: border-box; border-radius:15px; border: 1px solid #D9D9D9; box-shadow: 0 0 5px 0 rgba(0,0,0,0.3); background: #fff; position: relative; margin-left: 2px; }
  .map .marker p:after { content:''; width:12px; height: 12px; position: absolute; left:10px; top:9px; background: url("~@/assets/images/mercenary/ico-exp-c.svg")0 0 no-repeat; background-size: contain; }
  .map .marker.coach:after { content:''; width:30px; height:31px; position: absolute; left:40px; top:15px; background: url("~@/assets/images/mercenary/ico-coach-badge.png")0 0 no-repeat; background-size: contain; z-index: 1; }

  .mercenary-list { box-sizing: border-box; height: 100%; overflow: auto; position: relative; z-index: 1; pointer-events: none; }
  .mercenary-list.hide { display: none; }
  .mercenary-list .list-inner { background: #fff; border-top-left-radius: 20px; border-top-right-radius: 20px; pointer-events: auto; text-align: center; }
  .mercenary-list .list-inner .tit { font-size: 14px; text-align: center; font-weight: 500; padding: 15px 0 30px; box-sizing: border-box; }
  .list-wrap { padding: 40px 8% 60px; box-sizing: border-box; text-align: left; display: inline-block; width: 100%; }
  .list-wrap li { margin-bottom: 40px; display: flex; }
  .list-wrap li:last-child { margin-bottom: 0; }
  .list-wrap li .thumb, .list-wrap li .info { vertical-align: top; }
  .list-wrap li .thumb { width: 150px; height: 200px; border-radius: 10px; overflow: hidden; box-shadow: 0 0 5px 0 rgba(0,0,0,0.3); position: relative; }
  .list-wrap li .thumb img { height: 100%; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }
  .list-wrap li .info { margin-left: 6%; text-align: left; width: auto; padding-top: 5px; box-sizing: border-box; }
  .list-wrap li .info p { font-size: 14px; line-height: 20px; font-weight: 500; padding-left: 26px; box-sizing: border-box; color: #606060; position: relative; }
  .list-wrap li .info p:last-child { margin-bottom: 0; }
  .list-wrap li .info p.nick { font-size: 14px; line-height: 17px; font-weight: 700; color:#101014; padding-left: 0; }
  .list-wrap li .info p.nick span { font-size: 11px; font-weight: 900; color:#808080; }
  .list-wrap li .info p.nick img { width: 10px; }
  .list-wrap li .info p:after { content: ''; position: absolute; left:0; top:50%; transform: translateY(-50%); background-size: contain; }
  .list-wrap li .info p.height:after { width:11px; height: 12px; background: url("~@/assets/images/mercenary/ico-height.svg")0 0 no-repeat; left:2px; }
  .list-wrap li .info p.foot:after { width: 15px; height: 8px; background: url("~@/assets/images/mercenary/ico-foot.svg")0 0 no-repeat;}
  .list-wrap li .info p.pos:after { width: 12px; height: 14px; background: url("~@/assets/images/mercenary/ico-pos.svg")0 0 no-repeat;}
  .list-wrap li .info p.addr:after { width: 12px; height: 13px; background: url("~@/assets/images/mercenary/ico-addr.svg")0 0 no-repeat;}
  .list-wrap li .info p.exp:after { width: 12px; height: 12px; background: url("~@/assets/images/mercenary/ico-exp.svg")0 0 no-repeat;}
  .list-wrap li .info p.favorite, .list-wrap li .info p.time { font-size: 12px; line-height: 17px; color:#808080; padding-left: 0; margin-bottom: 0; }
  .list-wrap li .info p.favorite { margin-top: 10px; }
  .list-wrap li .info p.time { margin-bottom: 20px; }
  .list-wrap li .info p.exp { font-size: 16px; font-weight: 700; padding-left: 15px; }

  .edit-page { position: fixed; left:0; bottom:0; width:100%; height:100%; z-index: 10; background: #fff; transform: translateY(100%); transition: transform 0.5s; animation-timing-function: ease-out; }
  .edit-page.open { transform: translateY(0); }
  .edit-page .top-btns { position: fixed; left:0; top:0; width: 100%; height: 70px; background: #fff; z-index: 10; }
  .edit-page .top-btns.type2 { text-align: right; padding: 20px 10px 20px 20px; box-sizing: border-box; }
  .edit-page .top-btns.type2 .close { font-size: 0; width: 45px; height:45px; background: url("~@/assets/images/mypage/ico-x.png")0 0 no-repeat; background-size: contain; position: absolute; right:10px; top:50%; transform: translateY(-50%); }
  .edit-page .top-btns.type2 h3 { text-align: center; display: block; }
  .btn-wrap { width: 100%; position: absolute; left:0; bottom: 30px; text-align: center; }
  .dimOpen .dim { opacity:0.5; z-index: 5; }

  .search-wrap.gradient { background: linear-gradient(180deg, rgba(255,255,255,1) 20%, rgba(219,219,219,1) 100%); }
  .content-wrap { height: 100%; overflow: auto; }
  .content-inner { padding: 30px 20px; box-sizing: border-box; position: relative; margin-top: 70px; height: 100%; overflow-y: scroll; }
  .content-inner .on { background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(219,219,219,1) 100%); }

  .box { width:calc(100% - 40px); height: 57px; border-radius: 29px; box-shadow: 0 0 5px 0 rgba(0,0,0,0.3); background: #fff; overflow: hidden; z-index: -1; position: absolute; left:20px; transition: height 0.3s, top 0.5s; animation-timing-function: ease-out; }
  .box.big { border-radius: 20px; }

  .step-wrap { position: absolute; left:20px; top: 30px; width: calc(100% - 40px); }

  .window .title { padding: 20px 20px 16px 20px; box-sizing: border-box; }
  .window .title .tit { font-size: 20px; line-height: 29px; font-weight: 500; }
  .window .title .txt { font-size: 14px; font-weight: 500; line-height: 20px; color:#808080; }

  .default-box { width:100%; height: 57px; padding: 0 20px; box-sizing: border-box; display: flex; justify-content: space-between; cursor: pointer; }
  .default-box p { font-size: 14px; color:#606060; font-weight: 500; line-height: 57px; }
  .selected-value { text-transform: uppercase; }

  .position-window { height: 277px; border-radius: 20px; overflow: hidden; position: relative; }
  .pos-board { position: relative; }
  .pos-board .ground { background: rgb(117,212,115); background: linear-gradient(7deg, rgba(117,212,115,1) 0%, rgba(55,236,186,1) 100%); position: relative; width: 100%; height: 194px; overflow: hidden; }
  .pos-board .ground .g-inner { width: 100%; height: 100%; }
  .pos-board .ground span { position: absolute; display: block; }
  .pos-board .ground span.l-line { width:44px; height:90px; background: url("~@/assets/images/mercenary/left-line.svg")0 0 no-repeat; background-size: contain; left:0; top:50%; transform: translateY(-50%); }
  .pos-board .ground span.r-line { width:45px; height:92px; background: url("~@/assets/images/mercenary/right-line.svg")0 0 no-repeat; background-size: contain; right:0; top:50%; transform: translateY(-50%); }
  .pos-board .ground span.c-circle { width:90px; height:90px; background: url("~@/assets/images/mercenary/circle-line.svg")0 0 no-repeat; background-size: contain; left:50%; top:50%; transform: translate(-50%,-50%); }
  .pos-board .ground span.c-line { width:6px; height:193px; background: url("~@/assets/images/mercenary/center-line.svg")0 0 no-repeat; background-size: contain; left:50%; top:0; transform: translateX(-50%); }
  .pos-board .select-pos .btn { width:36px; height: 38px; position: absolute; background: url("~@/assets/images/mercenary/pos-btn.png")0 0 no-repeat; background-size: contain; top: 50%; transform: translateY(-50%); transition: all 0.3s; animation-timing-function: ease-out; }
  .pos-board .select-pos .btn span { font-size: 14px; line-height: 20px; font-weight: 700; color:#606060; display: block; position: absolute; left:50%; top:45%; transform: translate(-50%,-50%); text-transform: uppercase; pointer-events: none; transition: all 0.3s; animation-timing-function: ease-out; }
  .select-pos .btn.cf, .select-pos .btn.ss { left: 18px; }
  .select-pos .btn.cm, .select-pos .btn.am, .select-pos .btn.dm { left: 50%; transform: translate(-50%,-50%); }
  .select-pos .btn.cb, .select-pos .btn.lb, .select-pos .btn.rb { right:80px; }
  .select-pos .btn.gk { right:5px; }
  .select-pos .btn.rm, .select-pos .btn.rwf { left:50%; top:10px; transform: translate(-100%,0); }
  .select-pos .btn.lm, .select-pos .btn.lwf { left:50%; top:auto; bottom:10px; transform: translate(-100%,0); }
  .select-pos .btn.cf, .select-pos .btn.cm, .select-pos .btn.cb { z-index: 2; }
  .select-pos.off .btn { opacity: 0; pointer-events: none; }

  .pos-board.cf .g-inner { transform-origin: 0 50%; transform: scale(1.9); }
  .pos-board.cm .g-inner { transform-origin: 50% 50%; transform: scale(1.9); }
  .pos-board.rm .g-inner { transform-origin: 20% top; transform: scale(1.9); }
  .pos-board.lm .g-inner { transform-origin: 20% bottom; transform: scale(1.9); }
  .pos-board.cb .g-inner { transform-origin: center right; transform: scale(1.1); }
  .pos-board.gk .g-inner { transform-origin: center right; transform: scale(2.5); }

  .pos-board.cf .select-pos .cf { width:75px; height: 78px; background: url("~@/assets/images/mercenary/pos-btn-on.png")0 0 no-repeat; transition: all 0.5s; left: 7px; opacity: 1; pointer-events: auto; }
  .pos-board.cf .select-pos .cf span { font-size: 16px; line-height: 23px; font-weight: 700; top:40%; }
  .pos-board.cf .select-pos .ss { width:75px; height: 78px; background: url("~@/assets/images/mercenary/pos-btn-on.png")0 0 no-repeat; transition: all 0.5s; left: 93px; opacity: 1; pointer-events: auto; }
  .pos-board.cf .select-pos .ss span { font-size: 16px; line-height: 23px; font-weight: 700; top:40%; }
  .pos-board.cm .select-pos .am { width:75px; height: 78px; background: url("~@/assets/images/mercenary/pos-btn-on.png")0 0 no-repeat; transition: all 0.5s; left: 40px; opacity: 1; pointer-events: auto; }
  .pos-board.cm .select-pos .am span { font-size: 16px; line-height: 23px; font-weight: 700; top:40%; }
  .pos-board.cm .select-pos .cm { width:75px; height: 78px; background: url("~@/assets/images/mercenary/pos-btn-on.png")0 0 no-repeat; transition: all 0.5s; left: 43%; opacity: 1; pointer-events: auto; }
  .pos-board.cm .select-pos .cm span { font-size: 16px; line-height: 23px; font-weight: 700; top:40%; }
  .pos-board.cm .select-pos .dm { width:75px; height: 78px; background: url("~@/assets/images/mercenary/pos-btn-on.png")0 0 no-repeat; transition: all 0.5s; left:70%; opacity: 1; pointer-events: auto; }
  .pos-board.cm .select-pos .dm span { font-size: 16px; line-height: 23px; font-weight: 700; top:40%; }
  .pos-board.rm .select-pos .rm { width:75px; height: 78px; background: url("~@/assets/images/mercenary/pos-btn-on.png")0 0 no-repeat; transition: all 0.5s; left: 56%; opacity: 1; pointer-events: auto; }
  .pos-board.rm .select-pos .rm span { font-size: 16px; line-height: 23px; font-weight: 700; top:40%; }
  .pos-board.rm .select-pos .rwf { width:75px; height: 78px; background: url("~@/assets/images/mercenary/pos-btn-on.png")0 0 no-repeat; transition: all 0.5s; left: 90px; top:20px; opacity: 1; pointer-events: auto; }
  .pos-board.rm .select-pos .rwf span { font-size: 16px; line-height: 23px; font-weight: 700; top:40%; }
  .pos-board.lm .select-pos .lm { width:75px; height: 78px; background: url("~@/assets/images/mercenary/pos-btn-on.png")0 0 no-repeat; transition: all 0.5s; left:60%; opacity: 1; pointer-events: auto; }
  .pos-board.lm .select-pos .lm span { font-size: 16px; line-height: 23px; font-weight: 700; top:40%; }
  .pos-board.lm .select-pos .lwf { width:75px; height: 78px; background: url("~@/assets/images/mercenary/pos-btn-on.png")0 0 no-repeat; transition: all 0.5s; left: 90px; bottom: 20px; opacity: 1; pointer-events: auto; }
  .pos-board.lm .select-pos .lwf span { font-size: 16px; line-height: 23px; font-weight: 700; top:40%; }
  .pos-board.cb .select-pos .cb[index="10"] { width:51px; height: 53px; background: url("~@/assets/images/mercenary/pos-btn-on-sm.png")0 0 no-repeat; transition: all 0.5s; right:14%; top:35%; opacity: 1; pointer-events: auto; }
  .pos-board.cb .select-pos .cb[index="11"] { width:51px; height: 53px; background: url("~@/assets/images/mercenary/pos-btn-on-sm.png")0 0 no-repeat; transition: all 0.5s; right:14%; top:65%; opacity: 1; pointer-events: auto; }
  .pos-board.cb .select-pos .rb { width:51px; height: 53px; background: url("~@/assets/images/mercenary/pos-btn-on-sm.png")0 0 no-repeat; transition: all 0.5s; right:25%; top:13%; opacity: 1; pointer-events: auto; }
  .pos-board.cb .select-pos .lb { width:51px; height: 53px; background: url("~@/assets/images/mercenary/pos-btn-on-sm.png")0 0 no-repeat; transition: all 0.5s; right:25%; top:88%; opacity: 1; pointer-events: auto; }
  .pos-board.gk .select-pos .gk { width:75px; height: 78px; background: url("~@/assets/images/mercenary/pos-btn-on.png")0 0 no-repeat; transition: all 0.5s; right:20px; opacity: 1; pointer-events: auto; }
  .pos-board.gk .select-pos .gk span { font-size: 16px; line-height: 23px; font-weight: 700; top:40%; }

  .dis-window { font-size: 12px; color:#606060; padding: 20px 12px; box-sizing: border-box; }
  .dis-window .title { padding:0 0 0 8px; }
  .dis-window .dis-board { margin-top: 50px; }
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
  .dis-window .dis-board .inp:before { content:''; width: 2px; height: 12px; background: #F5F5F5; position: absolute; left:8px; top:50%; transform: translateY(-50%); }
  .dis-window .dis-board .inp:after { content:''; width: 2px; height: 12px; background: #F5F5F5; position: absolute; right:8px; top:50%; transform: translateY(-50%); }
  .dis-window .txt { font-size: 12px; color:#606060; margin-top: 30px; }
  .dis-window .txt span { color:var(--color-main); }

  .step1 .big { height: 277px; top:30px; }
  .step1 .box2 { top:329px; }
  .step1 .box3 { top:406px; }
  .step2 .box2 { top:30px; }
  .step2 .big { height: 242px; top:110px; }
  .step2 .box3 { top:372px; }
  .step3 .box2 { top:30px; }
  .step3 .box3 { top:110px; }
  .step3 .big { height: 320px; top:187px; }

  .step1 .step2-wrap { top: 329px; }
  .step1 .step3-wrap { top: 406px; }
  .step2 .step2-wrap { top: 110px; }
  .step2 .step3-wrap { top: 372px; }
  .step3 .step2-wrap { top: 110px; }
  .step3 .step3-wrap { top: 187px; }

  .window { height: 0; opacity: 0; }
  /*.step-wrap { transition: all 0.5s; animation-timing-function: ease-out; }*/
  .default-box { opacity: 0; height: 0; pointer-events: none; transition: all 0.2s; animation-timing-function: ease-out; }
  .pos-board .ground .g-inner { transition: transform 0.3s; animation-timing-function: ease-out; }

  .step1 .step2-box, .step1 .step3-box,
  .step2 .step1-box, .step2 .step3-box,
  .step3 .step1-box, .step3 .step2-box { opacity: 1; height: auto; pointer-events: auto; }

  .step1 .step1-wrap .window,
  .step2 .step2-wrap .window,
  .step3 .step3-wrap .window { height: auto; opacity: 1; }

  .bott-btns { width: calc(100% - 40px); position: absolute; left:20px; bottom: 110px; text-align: center; }
  .bott-btns .clear { font-size: 14px; color:#bbb; font-weight: 500; line-height: 20px; text-decoration: underline; }
  .bott-btns .list-view { font-size: 16px; color:#fff; font-weight: 500; line-height: 40px; background: var(--color-main); border-radius: 20px; display: block; margin-top: 21px; }

  .time-board { padding: 0 20px; box-sizing: border-box; }
  .time-board .schedule-wrap { font-size: 0; width:250px; height: 45px; background: #E0E0E0; border-radius: 23px; padding: 0 6px; box-sizing: border-box; box-shadow:inset 0 3px 5px 1px rgba(0,0,0,0.2); position: relative; }
  .time-board .schedule-wrap .shape { width: 68px; height: 35px; display: block; background:#fff; border-radius: 18px; box-shadow: 0 0 5px 2px rgba(0,0,0,0.2); position: absolute; top:5px; left:6px; transition: width 0.2s, left 0.2s; animation-timing-function: ease-out; }
  .time-board .schedule-wrap a { font-size: 14px; line-height: 35px; font-weight: 500; color:#606060; box-sizing: border-box; display: inline-block; vertical-align: middle; text-align: center; width: 68px; top:5px; position: absolute; z-index: 1; }
  .time-board .schedule-wrap a:nth-of-type(1) { left:6px; }
  .time-board .schedule-wrap a:nth-of-type(2) { left:77px; }
  .time-board .schedule-wrap a:nth-of-type(3) { width:94px; left:150px; }

  .time-zone { margin-top: 40px; }
  .time-zone .tit { font-size: 14px; font-weight: 500; color:#606060; margin-bottom: 10px; }
  .inp-wrap { font-size: 14px; font-weight: 500; color:#606060; display: flex; justify-content: space-between; }
  .inp-wrap label { border:1px solid #D9D9D9; width: 47%; height: 40px; line-height: 38px; border-radius: 5px; }
  .inp-wrap label input { border: none; width: 100%; height: 100%; background: transparent; padding: 0 10px; box-sizing: border-box; vertical-align: top; }
  .inp-wrap span { font-size: 16px; font-weight: 500; width: 6%; height: 40px; text-align:center; line-height: 40px; display: inline-block; }
  .time-board .btns { margin-top:30px; display: flex; justify-content: space-between; }
  .time-board .btns a { font-size: 14px; line-height: 20px; color:#606060; font-weight: 500; padding: 9px 15px; box-sizing: border-box; text-align: center; }
  .time-board .btns .all-time { border-radius: 20px; border: 1px solid #d9d9d9; }
  .time-board .btns .reset { text-decoration: underline; padding-right: 0; }
  .time-window.all-day .inp-wrap label { border: 1px solid #F5F5F5; background: #F5F5F5; }
  .time-window.all-day .time-board .all-time { background: var(--color-main); color:#fff; }

  .content-inner { padding-bottom: 150px; box-sizing: border-box; }
  .content-inner.holiday .schedule-wrap .shape { left:77px; }
  .content-inner.all .schedule-wrap .shape { width:94px; left:150px; }
  .content-inner.all .big { height:150px; }
  .content-inner.all .time-zone, .content-inner.all .btns { opacity: 0; height: 0; margin-top: 0; pointer-events: none; }

  .filter-wrap { height: 95%; border-top-left-radius: 25px; border-top-right-radius: 25px; box-sizing: border-box; overflow: hidden; }
  .filter-wrap .inner { padding: 40px 0 30px; box-sizing: border-box; border-bottom: 1px solid #F5F5F5; }
  .filter-wrap .inner:first-child { padding-top: 0; }
  .filter-wrap .inner:last-child { border-bottom: none; }
  .filter-wrap .inner h4 { font-size: 16px; line-height: 23px; font-weight: 500; }
  .filter-wrap .inner .tit { font-size: 14px; font-weight: 500; color:#606060; }
  .filter-wrap .edit-inner { margin-top: 20px; }

  .foot ul { text-align: center; max-height: none; overflow: hidden; }
  .foot ul li { width: 50%; display: inline-block; vertical-align: top; text-align: center; box-sizing: border-box; }
  .foot ul li span { color:var(--color-main); display: block; margin-bottom: 16px; }
  .foot ul li label input[type=checkbox] + i { width:70px; height:135px; display: inline-block; cursor: pointer; border: none; border-radius: unset; margin: 0; position: relative; }
  .foot ul li label input[type=checkbox]:checked + i { background-color: #fff; border: none; }
  .foot ul .left { padding-left: 50px; }
  .foot ul .left label input[type=checkbox] + i:after { content:''; width: 100%; height:100%; background: url("~@/assets/images/mypage/left-foot.png")0 0 no-repeat; background-size: contain; position: absolute; left:0; top:0; }
  .foot ul .left label input[type=checkbox]:checked + i:after { content:''; width: 100%; height:100%; background: url("~@/assets/images/mypage/left-foot-on.png")0 0 no-repeat; background-size: contain; position: absolute; left:0; top:0; }
  .foot ul .right { padding-right: 50px; }
  .foot ul .right label input[type=checkbox] + i:after { content:''; width: 100%; height:100%; background: url("~@/assets/images/mypage/right-foot.png")0 0 no-repeat; background-size: contain; position: absolute; left:0; top:0; }
  .foot ul .right label input[type=checkbox]:checked + i:after { content:''; width: 100%; height:100%; background: url("~@/assets/images/mypage/right-foot-on.png")0 0 no-repeat; background-size: contain; position: absolute; left:0; top:0; }

  .edit-inner label input[type=radio] + i, .edit-inner label input[type=checkbox] + i { font-size: 14px; font-style: normal; line-height: 18px; font-weight: 500; text-align: center; text-decoration: none; margin: 0 6px 10px 0; padding: 5px 20px; box-sizing: border-box; border: 1px solid #D9D9D9; border-radius: 15px; display: inline-block; cursor: pointer; }
  .edit-inner label input[type=radio]:checked + i, .edit-inner label input[type=checkbox]:checked + i { color:#fff; background-color:#101014; border: 1px solid #101014; }
  .edit-inner label input[type=radio], .edit-inner label input[type=checkbox] { display: none; }
  .age-edit ul li { display: inline-block; vertical-align: middle; }

  .switch { width:46px; height:27px; border-radius: 14px; background: #C7C7C7; position: relative; transition: background-color 0.3s; animation-timing-function: ease-out; }
  .switch span { width:23px; height:23px; border-radius: 50%; background: #ffffff; position: absolute; left:2px; top:2px; transition: left 0.3s; animation-timing-function: ease-out; }
  .switch.active { background: var(--color-main); }
  .switch.active span { left:21px; }

  .graph { position: relative; margin-bottom: 20px; }
  .graph .bar-wrap { width: 100%; white-space: nowrap; padding: 0 18px; position: relative; }
  .graph .bar-wrap .bar-line { width: 100%; height: 2px; background: var(--color-main); position: absolute; left:0; bottom: 10px; }
  .graph .bar-wrap .bar-line:after { content:''; width:16px; height: 16px; border: 1px solid #fff; box-sizing: border-box; background: var(--color-main); position: absolute; left: 0; bottom:-7px; border-radius: 50%; box-shadow: 0 0 5px 0 rgba(0,0,0,0.2); }
  .graph .bar-inner { position: relative; overflow: hidden; padding-bottom: 10px; box-sizing: border-box; }
  .graph .bar-wrap i { display: inline-block; width: 5px; background: var(--color-main); margin-right:2px; border-top-left-radius: 1px; border-top-right-radius: 1px; vertical-align: bottom; overflow:hidden; }
  .graph input[type=range] { width: 100%; position: absolute; left: 0; bottom: 10px; background: transparent; }
  .graph input[type=range]::-webkit-slider-runnable-track {  height: 2px; }
  .graph input[type=range]::-moz-range-track { height: 4px; }
  .graph input[type=range]::-ms-track { height: 4px; }
  .graph input[type=range]::-webkit-slider-thumb { width: 16px; height: 16px; background: var(--color-main); border: 1px solid #fff; border-radius: 50%; margin-top: -7px; -webkit-appearance: none; box-shadow: 0 0 5px 0 rgba(0,0,0,0.2); }

  .graph-inp label { height: 50px; position: relative; }
  .graph-inp > span { color: #808080; line-height: 50px; }
  .graph-inp label span { font-size: 12px; color:#bbb; font-weight: 500; display: inline-block; position: absolute; left:12px; top: 5px; width: auto; height: 17px; line-height: 17px; }
  .graph-inp label input { height: 20px; margin-top: 23px; padding: 0 12px; }

  .edit-inner .tit { font-size: 14px; line-height: 20px; color:#606060; font-weight: 500; margin-bottom: 20px; }
  .physical .inp-wrap label { height: 50px; line-height: 48px; }
  .physical .inp-wrap label input { display: inline-block; vertical-align: top; width: 80%; height: 50px; line-height: 48px; }
  .physical .inp-wrap label span { font-size: 14px; line-height: 48px; color:#808080; font-weight: 500; display: inline-block; vertical-align: top; width: 12%; }
  .physical .inp-wrap span { line-height: 50px; }

  .play-type .type { width: 47%; height: 136px; display: inline-block; vertical-align: top; margin-bottom: 20px; position: relative; }
  .play-type .type:last-child { margin-bottom:0; }
  .play-type .type label { width: 100%; height: 100%; display: block; border-radius: 15px; box-shadow: 0 0 7px 0 rgba(0,0,0,0.2); padding-top: 100px; box-sizing: border-box; text-align: center; }
  .play-type .type label input[type=checkbox] + i { width: 100%; height: 100%; position: absolute; left:0; top:0; border: 1px solid #D9D9D9; }
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

  .recent .inner-box, .recent .switch { display: inline-block; vertical-align: middle; }
  .recent .inner-box { width: 75%; }
  .recent { display: flex; justify-content: space-between; }
  .recent .txt { font-size: 12px; font-weight: 500; color:#606060; line-height: 17px; }
  @media (max-width: 320px) {
    .wrap .top { padding: 10px 10px 4px; }
  }
</style>