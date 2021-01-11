<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="img/stytem.png" alt="" />
        <span>学生信息管理系统</span>
      </div>
      <ul class="user">
        <li class="username">
          <img src="img/people.png" alt="" /><span id="username">Jimo</span>
        </li>
        <li class="logout">
          <a href="login.html"
            ><img src="img/close.png" alt="" /><span>退出</span></a
          >
        </li>
      </ul>
    </div>
    <div class="left-menu">
      <div class="user-news">
        <img src="img/user.jpg" alt="" />
        <span id="_username">Jimo</span>
      </div>
      <dl class="menu">
        <dt>信息管理</dt>
        <router-link tag="dd" to="/main/workerList">学生列表</router-link>
        <router-link tag="dd" to="/main/addWorker">新增学生</router-link>
        <!-- <dd class="active" data-id="student-list"><span>></span></dd>
        <dd data-id="student-add"><span>></span></dd> -->
        <!-- <dd data-id='student-add'>新增学生<span>></span></dd>
            <dd data-id='student-add'>新增学生<span>></span></dd>
            <dd data-id='student-add'>新增学生<span>></span></dd> -->
      </dl>
    </div>
    <div class="right-content">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url(../../assets/css/index.css);
</style>>
<style scoped>
:root{
    height: 100%;
}
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-size: 14px;
}
body{
    width: 100%;
    height: calc(100% - 70px);
}
li{
    list-style: none;
}
a{
    text-decoration: none;
}
</style>
