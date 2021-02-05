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
        <label for="birth">薪资：</label>
        <input type="text" v-model="user.money" name="birth" />
      </div>
      <div>
        <label for="phone">考勤：</label>
        <input type="text" v-model="user.should" name="phone" />
      </div>
      <div>
        <label for="dress">出勤：</label>
        <input type="text" v-model="user.reality" name="address" />
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
        money: '',
        should: '',
        reality: '',
      },
    };
  },
  methods: {
    async commit() {
      try {
        const that = this;
        const value = await this.$api.addMoney({
          name: that.user.name,
          money: that.user.money,
          should: that.user.should,
          reality: that.user.reality,
        });
        console.log(value);
        this.$router.push('/main/moneyList');
      } catch (error) {
        // this.$Toast({ msg: error, type: 'fail' });
        console.log('错误');
      }
    },
  },
};
</script>

<style>
</style>
