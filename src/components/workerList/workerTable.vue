<template>
  <table>
    <thead>
      <tr>
        <th>工号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>邮箱</th>
        <th>年龄</th>
        <th>手机号</th>
        <th>部门</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody id="tbody">
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.sNo }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.sex === 0 ? '男' : '女' }}</td>
        <td>{{ item.email }}</td>
        <td>{{ new Date().getFullYear() - item.birth }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.address }}</td>
        <td>
            <button class="btn edit" @click="edit(item)">编辑</button>
            <button class="btn remove" @click="del(item)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      list: [],
    };
  },
  async created() {
    const { data: { findByPage: list } } = await this.$api.findPage(1, 10);
    this.list = list;
    console.log(this.list);
  },
  methods: {
    ...mapMutations(['setShowModal', 'setActiveWor']),
    edit(worker) {
      this.setActiveWor(worker);
      this.setShowModal(true);
    },
  },
};
</script>

<style>
</style>
