<template>
  <div>
    <div class="system">人事管理系统</div>
    <form action="#" class="login">
      <div class="title">
        <span>Login</span>
        <router-link to="/logon" class="show">Logon</router-link>
      </div>
      <div class="wrapper">
        <div class="input-data">
          <input type="text" v-model="account" required="" />
          <div class="underline"></div>
          <label>Username</label>
        </div>
        <div class="input-data">
          <input type="password" v-model="password" required="" />
          <div class="underline"></div>
          <label>Password</label>
        </div>
      </div>
      <div class="btn">
        <input type="submit" value="登录" @click="login" />
        <input type="reset" value="重置" @click="reset" class="reset" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const result = await this.$api.login(`account=${this.account}&password=${this.password}`);
        console.log(result.msg);
        this.Cookie.setCookie('username', this.account);
        this.$router.push('/main');
      } catch (error) {
        alert(error);
      }
    },
    reset() {
      this.account = '';
      this.password = '';
    },
  },
};
</script>

<style scoped>
@import url(../../assets/css/login.css);
</style>
<style scoped>
* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url(https://www.misshere.cn/management-bg.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>>
