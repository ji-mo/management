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
        <input type="button" value="登录" @click="login" />
        <input type="button" value="重置" @click="reset" class="reset" />
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
      result: '',
    };
  },
  methods: {
    async login() {
      try {
        this.result = await this.$api.login(`account=${this.account}&password=${this.password}`);
        this.Cookie.setCookie('username', this.account);
        this.$router.push('/main');
      } catch (error) {
        this.result = error;
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
