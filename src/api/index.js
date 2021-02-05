import axios from 'axios';
import URLs from './URLs';

const appkey = 'jimo_1590676767959';
const ajax = axios.create({
  baseURL: URLs.baseURL,
  params: {
    appkey,
  },
});
const local = axios.create({
  baseURL: 'http://localhost:5108/api/money/',
});
local.interceptors.response.use((data) => {
  const res = data.data.data;
  return res;
});
ajax.interceptors.response.use((data) => {
  const res = data.data;
  if (res.status === 'success') {
    return res;
  }
  return Promise.reject(res.msg);
});

const login = (data) => ajax.post(URLs.login, `appkey=${appkey}&${data}`);
const logon = (data) => ajax.post(URLs.logon, `appkey=${appkey}&${data}`);
const findPage = (page, size) => ajax.get(URLs.findPage, {
  params: {
    page,
    size,
  },
});
const update = (options) => ajax.get(URLs.update, {
  params: {
    ...options,
  },
});
const delBySno = (num) => ajax.get(URLs.delete, {
  params: {
    num,
  },
});
const add = (options) => ajax.get(URLs.add, {
  params: {
    ...options,
  },
});
const delWorker = (sNo) => ajax.get(URLs.delBySno, {
  params: {
    sNo,
  },
});
const getMoneyById = (sId) => local.get(`${sId}`);
const addMoney = function (data) {
  axios({
    url: 'http://localhost:5108/api/money/',
    method: 'post',
    data: {
      ...data,
    },
  });
};
const updateMoney = function (sId, data) {
  axios({
    url: `http://localhost:5108/api/money/${sId}`,
    method: 'put',
    data: {
      ...data,
    },
  });
};
const getMoneyPage = () => local.get();
const deleteMoney = (sId) => local.delete(`${sId}`);

export default {
  login,
  logon,
  findPage,
  update,
  delBySno,
  add,
  delWorker,
  getMoneyById,
  addMoney,
  updateMoney,
  getMoneyPage,
  deleteMoney,
};
