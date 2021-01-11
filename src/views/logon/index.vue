<template>
  <div>
    <div class="system">人事管理系统</div>
    <form action="#" class="login">
      <div class="title">
        <span>Logon</span>
        <router-link to="/login" class="show">Login</router-link>
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
        <div class="input-data">
          <input type="password" v-model="rePassword" required="" />
          <div class="underline"></div>
          <label>Repassword</label>
        </div>
      </div>
      <div class="btn">
        <input type="button" @click="logon" value="注册" />
        <input type="button" @click="reset" value="重置" class="reset" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'userAdmin',
      account: '',
      password: '',
      rePassword: '',
    };
  },
  methods: {
    reset() {
      this.account = '';
      this.password = '';
      this.rePassword = '';
    },
    async logon() {
      if (this.password === this.rePassword) {
        try {
          const result = await this.$api.logon(`account=${this.account}&password=${this.password}&rePassword=${this.rePassword}&username=${this.username}`);
          alert(result.msg);
          this.$router.push('/login');
        } catch (error) {
          alert(error);
        }
      }
    },
  },
};
</script>

<style scoped>
@import url(../../assets/css/login.css);
</style>
