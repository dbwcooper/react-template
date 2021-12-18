import useSWR from 'swr';
import Api from '@utils/Api';

const useUserInfo = () => {
  const { data, mutate, error } = useSWR(Api.getUserInfo);
  const isLoading = !data && !error;
  const isError = error && error.status !== 200;
  return {
    isLoading,
    isError,
    data,
    mutate,
  };
};

export default useUserInfo;
