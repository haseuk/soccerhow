<template>
  <div mercenary-record>
    <div class="top-cont">
      <div class="top-btns">
        <RouterLink to="/my_mercenary" class="back" >뒤로가기 </RouterLink>
        <a class="btn alarm"></a>
      </div>

      <h2 v-if="active === 'mercenary'">{{mercenaryLlist.length}}건</h2>
      <h2 v-else>{{scoutList.length}}건</h2>

      <div class="slide-tab-wrap" :class="active">
        <a class="tab tab1" @click="active = 'mercenary'">용병 활동</a>
        <a class="tab tab2" @click="active = 'scout'">스카웃 활동</a>
      </div>
    </div>

    <section>

      <div class="content">
        <div class="cont-inner" :class="{'scout-on':active === 'scout'}">
          <div class="mercenary-list list">
            <ul :style="`height:${this.winH - 187}px`">
              <li v-for="(item,i) in mercenaryLlist" :key="i">
                <RouterLink to="/mercenary_complete"></RouterLink>
                <p class="tit">{{item.tit}}</p>
                <p class="date">{{item.date}}</p>
                <div class="type-wrap">
                  <p class="playground">{{item.playground}}</p>
                  <p class="type">{{item.type}}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="scout-list list">
            <ul :style="`height:${this.winH - 187}px`">
              <li v-for="(item,i) in scoutList" :key="i">
                <RouterLink to="/scout_complete"></RouterLink>
                <p class="tit">{{item.tit}}</p>
                <p class="date">{{item.date}}</p>
                <div class="type-wrap">
                  <p class="playground">{{item.playground}}</p>
                  <p class="type">{{item.type}}</p>
                </div>
                <div class="info">
                  <div class="thumb">
                    <img :src="require(`@/assets/images/mercenary/${item.img}.png`)" alt="">
                  </div>
                  <div class="info-txt">
                    <p>용병 : {{item.nick}} 코치</p>
                    <p>스카웃 비용 : {{item.exp}}원</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MercenaryRecord",
  data() {
    return {
      winH: 0,
      active: 'mercenary',
      mercenaryLlist: [
        {tit:'마포구 골찢남들', date:'7월 14일(토) 16:00 ~ 18:00', playground:'잠실고등학교 운동장', type:'소규모 5 vs 5'},
        {tit:'강남구 골찢남들', date:'7월 14일(토) 16:00 ~ 18:00', playground:'잠실고등학교 운동장', type:'소규모 5 vs 5'},
        {tit:'동작구 골찢남들', date:'7월 14일(토) 16:00 ~ 18:00', playground:'잠실고등학교 운동장', type:'소규모 5 vs 5'},
        {tit:'마포구 골찢남들', date:'7월 14일(토) 16:00 ~ 18:00', playground:'잠실고등학교 운동장', type:'소규모 5 vs 5'},
        {tit:'마포구 골찢남들', date:'7월 14일(토) 16:00 ~ 18:00', playground:'잠실고등학교 운동장', type:'소규모 5 vs 5'},
        {tit:'마포구 골찢남들', date:'7월 14일(토) 16:00 ~ 18:00', playground:'잠실고등학교 운동장', type:'소규모 5 vs 5'},
      ],
      scoutList: [
        {tit:'마포구 골찢남들', date:'7월 14일(토) 16:00 ~ 18:00', playground:'잠실고등학교 운동장', type:'소규모 5 vs 5', nick:'김진우', exp: '30,000', img: 'profile1'},
        {tit:'주말에 뛰실분', date:'7월 14일(토) 16:00 ~ 18:00', playground:'잠실고등학교 운동장', type:'소규모 5 vs 5', nick:'침착맨', exp: '30,000', img: 'profile2'},
        {tit:'강남구 골찢남들', date:'7월 14일(토) 16:00 ~ 18:00', playground:'효창 운동장', type:'소규모 5 vs 5', nick:'손흥민', exp: '30,000', img: 'profile1'},
        {tit:'마포구 골찢남들', date:'7월 14일(토) 16:00 ~ 18:00', playground:'효창 운동장', type:'소규모 5 vs 5', nick:'손흥민', exp: '30,000', img: 'profile1'},
        {tit:'마포구 골찢남들', date:'7월 14일(토) 16:00 ~ 18:00', playground:'효창 운동장', type:'소규모 5 vs 5', nick:'손흥민', exp: '30,000', img: 'profile1'},
      ]
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

  [mercenary-record] { overflow: hidden; }
  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; }
  section {position: relative; margin-top:187px; }

  .top-btns { height: 60px; padding-top: 7px; box-sizing: border-box; text-align: center; display: flex; justify-content: space-between; }
  .top-btns h2 { padding: 0; display: inline-block; border-bottom: none; line-height: 53px; }
  .top-btns a { font-size: 0; width:65px; height:53px; position: relative; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }
  .top-btns a.alarm:after { content: ''; width:17px; height:20px; background: url("~@/assets/images/mercenary/ico-bell.svg")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }

  .slide-tab-wrap { margin-top: 40px; border-bottom: 1px solid #F5F5F5; padding: 0 20px; box-sizing: border-box; }
  .slide-tab-wrap .tab { font-size: 12px; color:#bbb; margin-right: 20px; display: inline-block; padding-bottom: 6px; box-sizing: border-box; }
  .slide-tab-wrap.mercenary .tab1, .slide-tab-wrap.scout .tab2 { color:#101014; border-bottom: 1px solid #101014; }
  .list { padding: 0 20px; box-sizing: border-box; vertical-align: top; }
  .list ul { overflow-y: auto; -ms-overflow-style: none; scrollbar-width: none; }
  .list ul::-webkit-scrollbar { display: none; }
  .list ul li { padding: 30px 0 20px; box-sizing: border-box; position: relative; border-bottom: 1px solid #F5F5F5; }
  .list ul li:last-child { border-bottom: none; }
  .list ul li p { font-size: 14px; line-height:20px; color:#606060; }
  .list ul li .tit { font-size: 16px; line-height:23px; font-weight: 500; margin-bottom: 10px; }
  .list ul li .date { margin-bottom: 5px; }
  .list ul li .type { color: var(--color-main); font-weight: 500; }
  .list ul li .type-wrap { display: flex; justify-content: space-between; }
  .list ul li a { width: 100%; height: 100%; position: absolute; left:0; top:0; }

  .scout-list { padding: 0; }
  .scout-list ul li { padding: 30px 20px 20px; border-bottom: 10px solid #F5F5F5; }
  .scout-list ul li .type-wrap { margin-bottom: 20px; }
  .scout-list ul li .info { border-top: 1px solid #F5F5F5; padding-top: 20px; box-sizing: border-box; }
  .scout-list ul li .info .thumb { width:50px; height: 50px; border-radius: 50%; display: inline-block; vertical-align: middle; overflow: hidden; margin-right: 12px; }
  .scout-list ul li .info .thumb img { object-fit: cover; object-position: 50% 50%; }
  .scout-list ul li .info .info-txt { display: inline-block; vertical-align: middle; }
  .scout-list ul li .info .info-txt p { font-size: 14px; line-height:20px; color:#606060; margin-bottom: 5px; }
  .scout-list ul li .info .info-txt p:last-child { margin-bottom: 0; }


  .content { width: 100%; overflow: hidden; }
  .content .cont-inner { width: 200%; transition: transform 0.5s; animation-timing-function: ease-out;  }
  .content .list { width: 100vw; display: inline-block; }
  .content .scout-on { transform: translateX(-100vw); }

</style>