import { stringify } from 'query-string';
import Api from '@utils/Api';
import fetch from '@utils/Request';
import { getToken } from '@utils/Utils';

export interface IUserLogin {
  email: string;
  password: string;
}
export interface IUserRegister extends IUserLogin {
  name: string;
}
export interface IDaily {
  title: string;
  content: string;
}
export interface IPostPager {
  page: number;
  count: number;
}

const GET_OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    authsessiontoken: getToken(),
  },
};

export const postLogin = (queryCondition: IUserLogin) => {
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(queryCondition),
  };
  return fetch(Api.postLogin, opts);
};

export const postRegister = (queryCondition: IUserRegister) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify(queryCondition),
  };
  return fetch(Api.postRegister, opts);
};

export const postDaily = (queryCondition: IDaily) => {
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authsessiontoken: getToken(),
    },
    body: JSON.stringify(queryCondition),
  };
  return fetch(Api.postDaily, opts);
};

export const getUserInfo = () => {
  return fetch(Api.getUserInfo, GET_OPTIONS).then((response) =>
    response.json()
  );
};

export const getPostsList = (queryCondition: IPostPager) => {
  return fetch(
    `${Api.getPostsList}?${stringify(queryCondition)}`,
    GET_OPTIONS
  ).then((response) => response.json());
};

export const getDailyInfo = (queryCondition: { id: string }) => {
  const url = Api.getDailyInfo.replace('{id}', queryCondition.id);
  return fetch(url, GET_OPTIONS).then((response) => response.json());
};
