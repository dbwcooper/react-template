const apiPrefix = 'https://duanbowen-37a03b.postdemo.tcn.asia/api/v2';

export const DailyAPI = {
  postRegister: `${apiPrefix}/auth/register`,
  postLogin: `${apiPrefix}/auth/login`,
  getUserInfo: `${apiPrefix}/users/me`,
  postDaily: `${apiPrefix}/posts`,
  getDailyInfo: `${apiPrefix}/posts/{id}`,
  getPostsList: `${apiPrefix}/posts`,
};

export default DailyAPI;
