import useSWR from "swr";
import { API } from "@utils/api";

// demo
const useUserInfo = () => {
  const { data, mutate, error } = useSWR(API.getUserInfo);
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
