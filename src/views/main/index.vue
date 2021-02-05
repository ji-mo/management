<template>
  <div>
    <div class="main-bg">
      <div class="header">
        <div class="logo">
          <img src="@/assets/img/stytem.png" alt="" />
          <span>人事管理系统</span>
        </div>
        <ul class="user">
          <li class="username">
            <img src="@/assets/img/people.png" alt="" />
            <span id="username">管理员：{{ username }}</span>
          </li>
          <li class="logout">
            <router-link to="/login">
              <img src="@/assets/img/close.png" alt="" /><span>退出</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="left-menu">
        <div class="user-news">
          <img src="@/assets/img/user.jpg" alt="" />
          <span id="_username">{{ username }}，欢迎使用</span>
        </div>
        <dl class="menu">
          <dt>信息管理</dt>
          <router-link tag="dd" to="/main/workerList">员工列表</router-link>
          <router-link tag="dd" to="/main/addWorker">员工入职</router-link>
          <router-link tag="dd" to="/main/moneyList">员工薪资</router-link>
          <router-link tag="dd" to="/main/addMoney">员工考勤</router-link>
        </dl>
      </div>
      <div class="right-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  created() {
    this.username = this.Cookie.getCookie('username');
  },
};
</script>

<style scoped>
@import url(../../assets/css/index.css);
</style>
