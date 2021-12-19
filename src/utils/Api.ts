const apiPrefix = '';

export const API = {
  postRegister: `${apiPrefix}/auth/register`,
  postLogin: `${apiPrefix}/auth/login`,
  getUserInfo: `${apiPrefix}/users/me`,
};

export default API;
