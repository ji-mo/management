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
    <tbody id="tbody"></tbody>
  </table>
</template>

<script>
export default {
  async created() {
    const result = await this.$api.findPage(1, 10);
    console.log(result);
  },
};
</script>

<style>
</style>
