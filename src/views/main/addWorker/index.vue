<template>
  <div>
    <div id="student-add">
      <form action="#" id="add-form">
        <div class="form-head">
          <span class="form-name">Add Information</span>
          <span class="state">Please fill all the texts in the fields</span>
        </div>
        <div>
          <label for="name">姓名：</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label for="">性别：</label>
          <input type="radio" name="sex" id="male" value="0" checked />
          <label for="male" class="sex">男</label>
          <input type="radio" name="sex" id="female" value="1" />
          <label for="female" class="sex">女</label>
        </div>
        <div>
          <label for="email">邮箱：</label>
          <input type="text" id="email" name="email" />
        </div>
        <div>
          <label for="num">学号：</label>
          <input type="text" id="num" name="sNo" />
        </div>
        <div>
          <label for="birth">生日：</label>
          <input type="text" id="birth" name="birth" />
        </div>
        <div>
          <label for="phone">手机号：</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <div>
          <label for="dress">住址：</label>
          <input type="text" id="dress" name="address" />
        </div>
        <div>
          <label for=""></label>
          <button id="add-submit" class="btn">提交</button>
          <input type="reset" value="重置" class="btn" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
