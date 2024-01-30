import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "service";

export const usePost = () => {
  const queryClient = useQueryClient();
  const {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isPaused,
    isSuccess,
    failureCount,
    failureReason,
    mutate,
    mutateAsync,
    reset,
    status,
  } = useMutation({
    mutationFn: ({ url = "", method = "POST", data = {}, config = {} }) => {
      return api({ method: method, url, data }, config)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
    },
  });
  const reloadQueryKey = (queryKey) => {
    queryClient.invalidateQueries({ queryKey: queryKey }); // belgilangan key dagi data yangilanadi
  };
  return {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isPaused,
    isSuccess,
    failureCount,
    failureReason,
    mutate,
    mutateAsync,
    reset,
    status,
    reloadQueryKey,
  };
};
