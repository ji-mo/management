const Money = require('../modules/money');

exports.addMoney = async function (obj) {
  const ins = await Money.create(obj);
  return ins.toJSON();
};

exports.deleteMoney = async function (id) {
  const res = await Money.destroy({
    where: {
      id,
    },
  });
  return res;
};

exports.updateMoney = async function (id, obj) {
  const res = await Money.update(obj, {
    where: {
      id,
    },
  });
  return res;
};

exports.getMoneyById = async function (id) {
  const result = await Money.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
};

exports.getMoney = async function () {
  const result = await Money.findAll();
  return JSON.parse(JSON.stringify(result));
};

exports.getMoneyPage = async function (page = 1, limit = 10) {
  const results = await Money.findAll({
    offset: (page - 1) * limit,
    limit: +limit,
  });
  const total = await Money.count();
  const datas = JSON.parse(JSON.stringify(results));
  return {
    total,
    datas,
  };
};
