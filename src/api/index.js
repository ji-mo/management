import axios from 'axios';
import URLs from './URLs';

const appkey = 'jimo_1590676767959';
const ajax = axios.create({
  baseURL: URLs.baseURL,
  params: {
    appkey,
  },
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

export default {
  login,
  logon,
};
