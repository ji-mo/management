<template>
  <div class="modal">
    <div class="mask" @click="setShowModal(false)"></div>
    <form action="#" id="edi-form">
      <div class="form-head">
        <span class="form-name">Edit Information</span>
        <span class="state">Please fill all the texts in the fields</span>
      </div>
      <div>
        <label for="edi-name">姓名：</label>
        <input type="text" id="edi-name" name="name"
        :value="activeMon.name" @input="edit('name',$event.target.value)"/>
      </div>
      <div>
        <label for="edi-num">薪资：</label>
        <input type="text" id="edi-num" name="money"
        :value="activeMon.money" @input="edit('money',$event.target.value)"/>
      </div>
      <div>
        <label for="edi-birth">考勤：</label>
        <input type="text" id="edi-birth" name="birth"
        :value="activeMon.should" @input="edit('should',$event.target.value)"/>
      </div>
      <div>
        <label for="edi-phone">出勤：</label>
        <input type="text" id="edi-phone" name="phone"
        :value="activeMon.reality" @input="edit('reality',$event.target.value)"/>
      </div>
      <div>
        <label for=""></label>
        <button id="edi-submit" class="btn" @click.prevent="commit">提交</button>
        <input type="reset" value="重置" class="btn" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      worker: {},
    };
  },
  methods: {
    ...mapMutations(['setShowModal']),
    ...mapActions(['getMoneyList']),
    edit(key, value) {
      this.worker[key] = value;
    },
    async commit() {
      const data = { ...this.worker };
      console.log(data);
      try {
        const value = await this.$api.updateMoney(this.activeMon.id, data);
        console.log(this.activeMon.id, value);
        this.setShowModal(false);
        this.getMoneyList();
      } catch (error) {
        this.$Toast({ msg: error, type: 'fail' });
      }
    },
  },
  computed: {
    ...mapState(['activeMon']),
  },
};
</script>

<style>
</style>
