<template>
  <div mercenary :class="{dimOpen:isDim}">
    <!--header-->
    <div class="header" style="width: 100%;height: 98px;position: fixed;left:0;top:0;background: #fff;z-index: 10;">
      <img src="~@/assets/images/mercenary/header.png" alt="" style="margin: 0 auto;display: block;">
    </div>
    <!--header-->




    <div class="top">
      <div class="tab-wrap">
        <a class="btn tab memb" :class="{on:tab === 'memb'}" @click="selectType('memb')">회원 용병</a>
        <a class="btn tab coach" :class="{on:tab === 'coach'}" @click="selectType('coach')">코치 용병</a>
      </div>

      <div class="view-set">
        <a class="btn filter">필터</a>
        <a class="btn full-view" :class="{on:fullViewOn}" @click="fullView">전체보기</a>
      </div>
    </div>

    <div class="wrap">
      <div class="search">
        <img src="~@/assets/images/mercenary/ico-search.svg" alt="">
        <div class="text">
          <p class="tit">어떤 용병을 찾으세요? </p>
          <p class="txt">모든 포지션 &#183; 내 근처 &#183; 모든 시간</p>
        </div>
        <a class="btn">용병찾기</a>
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
          <a class="btn location" :class="{on:fullViewOn}" :style="`top:${this.winH - 150 - 138 - 50}px`">현재위치</a>
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
    <div class="search-wrap edit-page" :class="{open:isSearch}">
      <div class="top-btns type2">
        <a class="close" @click="close('search')">닫기</a>
        <h3>용병 검색</h3>
      </div>

      <div class="content-wrap" :class="[{step1: stepStatus === 'step1'},{step2: stepStatus === 'step2'},{step3: stepStatus === 'step3'}]">
        <div class="box1 box big" :style="`height:${this.bigH}px`"></div>
        <div class="box2 box" :style="`top:${this.bigH + 50}px`"></div>
        <div class="box3 box" :style="`top:${this.bigH + 127}px`"></div>

        <div class="pos-wrap">
          <div class="position-window" ref="posWin">
            <div class="title">
              <p class="tit">어떤 포지션을 찾고 있나요?</p>
              <p class="txt">아이콘을 누르면 더 상세히 볼 수 있어요</p>
            </div>

            <div class="pos-board">
              <div class="ground">
                <img src="~@/assets/images/mercenary/ground.png" alt="">
              </div>
              <div class="select-pos">
                <a class="btn" :class="item" v-for="(item,i) in selectPos" :key="i"><span>{{item}}</span></a>
              </div>
            </div>
          </div>
          <div class="selected-box">
            <p>선택한 포지션</p>
            <p class="selected-pos">CF/SS</p>
          </div>
        </div>

        <div class="distance"></div>
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
      bigH: 0,
      isDim: false,
      list: [
        {nick: '도곡동메시', pos: 'WF', badge: 'type-a', height: 178, foot: '양발', posKr: '레프트 윙 포워드', addr: '서울시 마포구', favorite: '풀 코드', time: '18:00 ~ 22:00', exp: '76,500,000' },
        {nick: '도곡동메시', pos: 'WF', badge: 'type-b', height: 178, foot: '양발', posKr: '레프트 윙 포워드', addr: '서울시 마포구', favorite: '풀 코드', time: '18:00 ~ 22:00', exp: '76,500,000' },
        {nick: '도곡동메시', pos: 'WF', badge: 'type-b', height: 178, foot: '양발', posKr: '레프트 윙 포워드', addr: '서울시 마포구', favorite: '풀 코드', time: '18:00 ~ 22:00', exp: '76,500,000' },
        {nick: '도곡동메시', pos: 'WF', badge: 'type-a', height: 178, foot: '양발', posKr: '레프트 윙 포워드', addr: '서울시 마포구', favorite: '풀 코드', time: '18:00 ~ 22:00', exp: '76,500,000' },
      ],
      tab: 'memb',
      fullViewOn: false,
      isSearch: true,
      stepStatus: 'step1',
      selectPos: [ 'cf', 'ss', 'am', 'cm', 'dm', 'lwf', 'lm', 'rwf', 'rm', 'rb', 'cb', 'cb', 'lb', 'gk' ],
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.bigHeight();
  },
  methods: {
    bigHeight() {
      var bh = this.$refs.posWin.clientHeight - 3;
      this.bigH = bh;
    },
    handleResize() {
      this.winH = window.innerHeight;
      this.bigHeight();
    },
    selectType(type) {
      this.tab = type;
    },
    fullView() {
      this.fullViewOn =! this.fullViewOn;
    },
    close() {

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
  .btn { cursor: pointer; z-index: 1; position: relative; }

  [mercenary] { position: relative; }
  .top { width: 100%; height: 52px; padding: 10px 20px 4px; box-sizing: border-box;  display: flex; justify-content: space-between; position: fixed; left:0; top:98px; background: #fff; z-index: 5; }
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
  .list-wrap li .info p { font-size: 14px; line-height: 20px; font-weight: 500; padding-left: 30px; box-sizing: border-box; color: #606060; position: relative; }
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
  .edit-page .top-btns { position: fixed; left:0; top:0; width: 100%; height: 70px; }
  .edit-page .top-btns.type2 { text-align: right; padding: 20px 10px 20px 20px; box-sizing: border-box; }
  .edit-page .top-btns.type2 .close { font-size: 0; width: 45px; height:45px; background: url("~@/assets/images/mypage/ico-x.png")0 0 no-repeat; background-size: contain; position: absolute; right:10px; top:50%; transform: translateY(-50%); }
  .edit-page .top-btns.type2 h3 { text-align: center; display: block; }
  .btn-wrap { width: 100%; position: absolute; left:0; bottom: 30px; text-align: center; }
  .dimOpen .dim { opacity:0.5; z-index: 5; }

  .content-wrap { padding: 30px 20px; box-sizing: border-box; position: relative; margin-top: 70px; height: 100%; overflow: auto; }
  .box { width:calc(100% - 40px); height: 57px; border-radius: 29px; box-shadow: 0 0 5px 0 rgba(0,0,0,0.3); background: #fff; overflow: hidden; z-index: -1; position: absolute; left:20px; transition: top 0.5s; animation-timing-function: ease-out; }
  .box.big { border-radius: 20px; }
  .position-window { border-radius: 20px; overflow: hidden; position: relative; }
  .position-window .title { padding: 20px 12px 14px 12px; box-sizing: border-box; }
  .position-window .title .tit { font-size: 20px; font-weight: 500; line-height: 29px; }
  .position-window .title .txt { font-size: 14px; font-weight: 500; line-height: 20px; color:#808080; }
  .pos-board { position: relative; }
  .pos-board .ground { background: rgb(117,212,115); background: linear-gradient(7deg, rgba(117,212,115,1) 0%, rgba(55,236,186,1) 100%); position: relative; }
  .pos-board .ground img { width: 100%; }
  .pos-board .select-pos .btn { width:36px; height: 38px; position: absolute; background: url("~@/assets/images/mercenary/pos-btn.png")0 0 no-repeat; background-size: contain; top: 50%; transform: translateY(-50%); }
  .pos-board .select-pos .btn span { font-size: 14px; line-height: 20px; font-weight: 700; color:#606060; display: block; text-align: center; padding-top:8px; box-sizing: border-box; text-transform: uppercase; }
  .select-pos .btn.cf, .select-pos .btn.ss { left: 18px; }
  .select-pos .btn.cm, .select-pos .btn.am, .select-pos .btn.dm { left: 50%; transform: translate(-50%,-50%); }
  .select-pos .btn.cb, .select-pos .btn.lb, .select-pos .btn.rb { right:80px; }
  .select-pos .btn.gk { right:5px; }
  .select-pos .btn.rm, .select-pos .btn.rwf { left:50%; top:10px; transform: translate(-100%,0); }
  .select-pos .btn.lm, .select-pos .btn.lwf { left:50%; top:auto; bottom:10px; transform: translate(-100%,0); }
  .select-pos .btn.cf, .select-pos .btn.cm, .select-pos .btn.cb { z-index: 1; }
  .selected-box { display: none; }

  .step1 .big { top:30px; }
  .step1 .box2 { top:329px; }
  .step1 .box3 { top:406px; }

  .step2 .box2 { top:30px!important; }
  .step2 .big { height: 242px; top:110px; }
  .step2 .box3 { top:372px; }

  .step3 .box2 { top:30px!important; }
  .step3 .box3 { top:110px; }
  .step3 .big { height: 320px; top:187px; }

  @media (max-width: 320px) {
    .wrap .top { padding: 10px 10px 4px; }
  }
  @media (max-width: 350px) {
    .wrap .top { padding: 10px 10px 4px; }
  }

</style>