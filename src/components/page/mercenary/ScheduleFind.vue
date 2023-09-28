<template>
  <div schedule-find>
    <div class="top-cont">
      <div class="top-btns">
        <RouterLink to="/" class="back" >뒤로가기 </RouterLink>
        <h2>스케줄 찾기</h2>
        <a class="btn alarm"></a>
      </div>

      <div class="slide-tab-wrap" :class="active">
        <div class="tabs-inner">
          <a class="tab tab1" @click="active = 'all'">전체</a>
          <a class="tab tab2" @click="active = 'study'">스터디</a>
          <a class="tab tab2" @click="active = 'group'">단체레슨</a>
          <a class="tab tab2" @click="active = 'game'">경기</a>
          <a class="tab tab2" @click="active = 'preview'">경기관람</a>
          <a class="tab tab2" @click="active = 'etc'">기타</a>
        </div>
      </div>
    </div>

    <section>

    </section>
  </div>
</template>

<script>
export default {
  name: "ScheduleFind",
  data() {
    return {
      active: 'all',
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
  section {position: relative; margin-top:187px; }

  .top-btns { height: 60px; padding-top: 7px; box-sizing: border-box; text-align: center; display: flex; justify-content: space-between; }
  .top-btns h2 { padding: 0; display: inline-block; border-bottom: none; line-height: 53px; }
  .top-btns a { font-size: 0; width:65px; height:53px; position: relative; }
  .top-btns a.back:after { content: ''; width:25px; height:29px; background: url("~@/assets/images/mypage/ico-back.png")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }
  .top-btns a.alarm:after { content: ''; width:17px; height:20px; background: url("~@/assets/images/mercenary/ico-bell.svg")0 0 no-repeat; background-size: contain; position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }

  .slide-tab-wrap { width: 100%; overflow: hidden; padding: 0 20px; box-sizing: border-box; }
  .slide-tab-wrap .tab-inner { }
  .slide-tab-wrap .tab { font-size: 14px; padding: 9px 16px; box-sizing: border-box; color:#808080; font-weight: 500; border: 1px solid #F5F5F5; border-radius:19px; display: inline-block; vertical-align: middle; margin-right: 7px;}
</style>