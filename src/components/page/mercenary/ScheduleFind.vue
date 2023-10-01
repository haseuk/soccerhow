<template>
  <div schedule-find>
    <div class="top-cont">
      <div class="top-btns">
        <RouterLink to="/my_mercenary" class="back" >뒤로가기 </RouterLink>
        <h2>스케줄 찾기</h2>
        <a class="btn alarm"></a>
      </div>

      <div class="slide-tab-wrap" :class="active">
        <div class="tabs-inner">
          <a class="tab tab1" ref="tab1" @click="all" :class="{on:currentFilter === null}">전체</a>
          <a class="tab tab2" ref="tab2" @click="setFilter('study','tab2')" :class="{on:currentFilter === 'study'}">스터디</a>
          <a class="tab tab3" ref="tab3" @click="setFilter('group','tab3')" :class="{on:currentFilter === 'group'}">단체레슨</a>
          <a class="tab tab4" ref="tab4" @click="setFilter('game','tab4')" :class="{on:currentFilter === 'game'}">경기</a>
          <a class="tab tab5" ref="tab5" @click="setFilter('preview','tab5')" :class="{on:currentFilter === 'preview'}">경기관람</a>
          <a class="tab tab6" ref="tab6" @click="setFilter('etc','tab6')" :class="{on:currentFilter === 'etc'}">기타</a>
        </div>
      </div>
    </div>

    <section>
      <div class="filter-wrap">
        <label class="btn schedule-filter">
          <input type="checkbox">
          <i></i>
          <span>용병 모집하는 스케줄만 보기</span>
        </label>
        <a class="btn sort-filter">일시 빠른 순 <img src="@/assets/images/mercenary/ico-filter-arrow.svg" alt=""></a>
      </div>

      <div class="schedule-list">
        <ul>
          <li v-for="(item,i) in setFiltered" :key="i">
            <span class="status">{{item.status}}</span>
            <p class="tit">{{item.tit}}</p>
            <p class="date"><img src="@/assets/images/mercenary/ico-filter-schedule.svg" alt=""> {{item.date}}</p>
            <p class="person">참여 인원 : {{item.person}}/4명</p>
            <p class="place">장소 : {{item.place}}</p>
            <p class="join-tag">조인 태그 : <span>{{item.join}}</span></p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ScheduleFind",
  data() {
    return {
      active: 'all',
      scheduleList: [
        {status: '모집하고 있어요', tit: '마포초등학교 어셈블 하는 날', date: '2023년 7월 8일 (토) 09:00 ~ 11:00', person: 1, place: '마포초등학교축구장', join: '스터디', category: 'study'},
        {status: '모집하고 있어요', tit: '마포초등학교 어셈블 하는 날', date: '2023년 7월 8일 (토) 09:00 ~ 11:00', person: 1, place: '마포초등학교축구장', join: '그룹', category: 'group'},
        {status: '모집하고 있어요', tit: '마포초등학교 어셈블 하는 날', date: '2023년 7월 8일 (토) 09:00 ~ 11:00', person: 1, place: '마포초등학교축구장', join: '경기', category: 'game'},
        {status: '모집하고 있어요', tit: '마포초등학교 어셈블 하는 날', date: '2023년 7월 8일 (토) 09:00 ~ 11:00', person: 1, place: '마포초등학교축구장', join: '경기관람', category: 'preview'},
        {status: '모집하고 있어요', tit: '마포초등학교 어셈블 하는 날', date: '2023년 7월 8일 (토) 09:00 ~ 11:00', person: 1, place: '마포초등학교축구장', join: '기타', category: 'etc'}
      ],
      currentFilter: null,
    }
  },
  methods: {
    setFilter: function(category, ref) {
      this.currentFilter = category;

      this.$refs[ref].scrollIntoView({ behavior: "smooth", block: "center", inline: "center"});
    },
    all() {
      this.currentFilter = null;
      this.$refs.tab1.scrollIntoView({ behavior: "smooth", block: "center", inline: "center"});
    },
  },
  computed: {
    setFiltered() {
      let data = this.currentFilter
          ? this.scheduleList.filter((item) => item.category === this.currentFilter)
          : this.scheduleList;
      return data;
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

  [mercenary-record] { overflow: hidden; }
  .top-cont { width: 100%; position: fixed; left:0; top:0; background: #fff; z-index: 1; box-shadow: 0 0 10px 0 rgba(0,0,0,0.2); }
  section {position: relative; margin-top:145px; padding: 30px 20px; box-sizing: border-box; }

  .top-btns { height: 60px; padding-top: 7px; box-sizing: border-box; text-align: center; display: flex; justify-content: space-between; }
  .top-btns h2 { padding: 0; display: inline-block; border-bottom: none; line-height: 53px; }
  .top-btns a { font-size: 0; width:65px; height:53px; position: relative; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }
  .top-btns a.alarm:after { content: ''; width:17px; height:20px; background: url("~@/assets/images/mercenary/ico-bell.svg")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }

  .slide-tab-wrap { width: 100%; overflow: hidden; padding: 30px 20px 10px; box-sizing: border-box; }
  .slide-tab-wrap .tabs-inner { display: flex; flex-wrap: nowrap; overflow-x: scroll; -ms-overflow-style: none; scrollbar-width: none; }
  .slide-tab-wrap .tabs-inner::-webkit-scrollbar { display: none; }
  .slide-tab-wrap .tab { font-size: 14px; line-height: 20px; padding: 9px 16px; box-sizing: border-box; color:#808080; font-weight: 500; border: 1px solid #F5F5F5; border-radius:20px; display: inline-block; vertical-align: middle; margin-right: 7px; word-break: keep-all; }
  .slide-tab-wrap .tab.on { background: var(--color-main); color:#fff; border: 1px solid; border-color: var(--color-main); }

  .filter-wrap { display: flex; justify-content: space-between; }
  .filter-wrap label span, .filter-wrap .sort-filter { font-size:14px; line-height: 20px; font-weight: 500; }
  .filter-wrap label { position: relative; }
  .filter-wrap label input[type=checkbox] + i { display: inline-block; }
  .filter-wrap label input[type=checkbox] + i:after { content:''; width: 3px; height: 3px; display: inline-block; border-radius: 50%; background: #808080; position: absolute; left:0; top:50%; transform: translateY(-50%); }
  .filter-wrap label input[type=checkbox] { display: none; }
  .filter-wrap label input[type=checkbox]:checked + i:after { width: 10px; height: 7px; background: url("~@/assets/images/mercenary/ico-filter-chk.svg")0 0 no-repeat; background-size: contain; }
  .filter-wrap label span { color:#808080; padding-left: 15px; box-sizing: border-box; display: inline-block; }
  .filter-wrap label input[type=checkbox]:checked + i + span { color:var(--color-main); }
  .filter-wrap .sort-filter img { vertical-align: bottom; }

  .schedule-list { margin-top: 30px; }
  .schedule-list li { padding: 20px; box-sizing: border-box; border-radius: 12px; box-shadow: 0 0 10px 0 rgba(0,0,0,0.2); margin-bottom: 30px; position: relative; }
  .schedule-list li:after { content:''; width: 10px; height: 22px; background: url("~@/assets/images/mercenary/ico-more.svg")0 0 no-repeat; background-size: contain; position: absolute; right:20px; top:20px; }
  .schedule-list li:last-child { margin-bottom: 0; }
  .schedule-list li span { color:var(--color-main); display: inline-block; }
  .schedule-list li p { font-size: 16px; line-height: 23px; font-weight: 500; color:#606060; margin-bottom: 5px; }
  .schedule-list li p:last-of-type { margin-bottom: 0; }
  .schedule-list .status { font-size: 14px; margin-bottom: 15px; }
  .schedule-list .tit { color:#101014; }
  .schedule-list .date { margin-bottom: 20px; }
</style>