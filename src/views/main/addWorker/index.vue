<template>
  <div id="student-add">
    <form action="#" id="edi-form">
      <div class="form-head">
        <span class="form-name">Add Information</span>
        <span class="state">Please fill all the texts in the fields</span>
      </div>
      <div>
        <label for="name">姓名：</label>
        <input type="text" v-model="user.name" name="name" />
      </div>
      <div>
        <label for="">性别：</label>
        <input type="radio" v-model="user.sex" id="male" value="0" checked />
        <label for="male" class="sex">男</label>
        <input type="radio" v-model="user.sex" id="female" value="1" />
        <label for="female" class="sex">女</label>
      </div>
      <div>
        <label for="email">邮箱：</label>
        <input type="text" v-model="user.email" name="email" />
      </div>
      <div>
        <label for="num">工号：</label>
        <input type="text" v-model="user.sNo" name="sNo" />
      </div>
      <div>
        <label for="birth">生日：</label>
        <input type="text" v-model="user.birth" name="birth" />
      </div>
      <div>
        <label for="phone">手机号：</label>
        <input type="text" v-model="user.phone" name="phone" />
      </div>
      <div>
        <label for="dress">部门：</label>
        <input type="text" v-model="user.address" name="address" />
      </div>
      <div>
        <label for=""></label>
        <button id="add-submit" class="btn" @click.prevent="commit">提交</button>
        <input type="reset" value="重置" class="btn" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        sex: 0,
        email: '',
        birth: '',
        phones: '',
        address: '',
        sNo: '',
      },
    };
  },
  methods: {
    async commit() {
      try {
        // const that = this;
        const { msg, status: type } = await this.$api.add(this.user);
        this.$Toast({ msg, type });
        // const value = await this.$api.addMoney({
        //   name: that.user.name,
        // });
        this.$router.push('/main/workerList');
      } catch (error) {
        this.$Toast({ msg: error, type: 'fail' });
      }
    },
  },
};
</script>

<style>
</style>
