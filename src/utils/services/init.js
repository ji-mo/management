const moneySer = require('./moneyService');

// 增加;
moneySer.addMoney({
  name: '悸沫',
  money: '5000',
  should: '22',
  reality: '21',
}).then((res) => {
  console.log(res);
});

// 删除
// moneySer.deleteMoney(1).then((res) => {
//   console.log(res);
// });

// 更新
// moneySer.updateMoney(20, {
//   name: '花花',
// }).then((res) => {
//   console.log(res);
// });

// 查一个
// moneySer.getMoneyById(20).then((res) => {
//   console.log(res);
// });

// 查全部
// moneySer.getMoney().then((res) => {
//   console.log(res);
// });

// 分页查
// moneySer.getMoneyPage().then((res) => {
//   console.log(res);
// });
