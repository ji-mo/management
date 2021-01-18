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
        :value="activeWor.name" @input="edit('name',$event.target.value)"/>
      </div>
      <div>
        <label for="">性别：</label>
        <input type="radio" name="sex" id="edi-male"
        :checked="activeWor.sex === 0" @change="edit('sex',0)"/>
        <label for="edi-male" class="sex">男</label>
        <input type="radio" name="sex" id="edi-female"
        :checked="activeWor.sex === 1" @change="edit('sex',1)"/>
        <label for="edi-female" class="sex">女</label>
      </div>
      <div>
        <label for="edi-email">邮箱：</label>
        <input type="text" id="edi-email" name="email"
        :value="activeWor.email" @input="edit('eamil',$event.target.value)"/>
      </div>
      <div>
        <label for="edi-num">工号：</label>
        <input type="text" id="edi-num" name="sNo"
        :value="activeWor.sNo" @input="edit('sNo',$event.target.value)"/>
      </div>
      <div>
        <label for="edi-birth">生日：</label>
        <input type="text" id="edi-birth" name="birth"
        :value="activeWor.birth" @input="edit('birth',$event.target.value)"/>
      </div>
      <div>
        <label for="edi-phone">手机号：</label>
        <input type="text" id="edi-phone" name="phone"
        :value="activeWor.phone" @input="edit('phone',$event.target.value)"/>
      </div>
      <div>
        <label for="edi-dress">部门：</label>
        <input type="text" id="edi-dress" name="address"
        :value="activeWor.address" @input="edit('address',$event.target.value)"/>
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
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      worker: {},
    };
  },
  methods: {
    ...mapMutations(['setShowModal']),
    edit(key, value) {
      this.worker[key] = value;
      console.log(value);
    },
    async commit() {
      const data = { ...this.activeWor, ...this.worker };
      try {
        const { msg } = await this.$api.update(data);
        this.$Toast({ msg, type: 'success' });
        this.setShowModal(false);
        Object.assign(this.activeWor, this.worker);
      } catch (error) {
        this.$Toast({ msg: error, type: 'fail' });
      }
    },
  },
  computed: {
    ...mapState(['activeWor']),
  },
};
</script>

<style>
</style>
