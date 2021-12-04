import useSWR from 'swr';
import { getUserInfo } from '@services/index';
import Api from '@utils/Api';
export const useUserInfo = () => {
  const { data, mutate, error } = useSWR(Api.getUserInfo, getUserInfo);
  const isLoading = !data && !error;
  const isError = error && error.status !== 200;
  return {
    isLoading,
    isError,
    data,
    mutate,
  };
};
