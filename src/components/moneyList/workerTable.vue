<template>
  <table>
    <thead>
      <tr>
        <!-- <th>工号</th> -->
        <th>姓名</th>
        <!-- <th>性别</th>
        <th>邮箱</th>
        <th>年龄</th>
        <th>手机号</th>
        <th>部门</th>
        <th>操作</th> -->
        <th>薪资/元</th>
        <th>考勤/天</th>
        <th>出勤/天</th>
        <th>所得/元</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody id="tbody">
      <tr v-for="item in moneylist" :key="item.id">
        <!-- <td>{{ item.sNo }}</td> -->
        <td>{{ item.name }}</td>
        <!-- <td>{{ item.sex === 0 ? '男' : '女' }}</td>
        <td>{{ item.email }}</td>
        <td>{{ new Date().getFullYear() - item.birth }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.address }}</td> -->
        <td>{{ item.money }}</td>
        <td>{{ item.should }}</td>
        <td>{{ item.reality }}</td>
        <td>{{ Math.ceil(item.money*item.reality/item.should) }}</td>
        <td>
            <button class="btn edit" @click="edit(item)">编辑</button>
            <button class="btn remove" @click="del(item.id)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['moneylist']),
  },
  methods: {
    ...mapMutations(['setShowModal', 'setActiveMon']),
    ...mapActions(['delMoney']),
    edit(worker) {
      this.setActiveMon(worker);
      this.setShowModal(true);
    },
    del(sNo) {
      const flag = window.confirm('are you 要删除我咩！');
      if (flag) {
        this.delMoney(sNo);
      }
    },
  },
};
</script>

<style>
</style>
