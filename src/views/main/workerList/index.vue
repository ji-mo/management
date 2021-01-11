<template>
  <div>
    <idv id="student-list">
      <table>
        <thead>
          <tr>
            <th>学号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>邮箱</th>
            <th>年龄</th>
            <th>手机号</th>
            <th>住址</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody id="tbody"></tbody>
      </table>
      <div class="modal">
        <form action="#" id="edi-form">
          <div class="form-head">
            <span class="form-name">Edit Information</span>
            <span class="state">Please fill all the texts in the fields</span>
          </div>
          <div>
            <label for="edi-name">姓名：</label>
            <input type="text" id="edi-name" name="name" />
          </div>
          <div>
            <label for="">性别：</label>
            <input type="radio" name="sex" id="edi-male" value="0" checked />
            <label for="edi-male" class="sex">男</label>
            <input type="radio" name="sex" id="edi-female" value="1" />
            <label for="edi-female" class="sex">女</label>
          </div>
          <div>
            <label for="edi-email">邮箱：</label>
            <input type="text" id="edi-email" name="email" />
          </div>
          <div>
            <label for="edi-num">学号：</label>
            <input type="text" id="edi-num" name="sNo" />
          </div>
          <div>
            <label for="edi-birth">生日：</label>
            <input type="text" id="edi-birth" name="birth" />
          </div>
          <div>
            <label for="edi-phone">手机号：</label>
            <input type="text" id="edi-phone" name="phone" />
          </div>
          <div>
            <label for="edi-dress">住址：</label>
            <input type="text" id="edi-dress" name="address" />
          </div>
          <div>
            <label for=""></label>
            <button id="edi-submit" class="btn">提交</button>
            <input type="reset" value="重置" class="btn" />
          </div>
        </form>
      </div>
      <div class="turn-page">
        <span id="prev-btn" class="page">上一页</span>
        <span id="next-btn" class="page">下一页</span>
      </div>
    </idv>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
