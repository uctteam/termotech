import { useQuery } from "@tanstack/react-query";
import { api } from "service";

export const useGet = ({
  url = "",
  queryKey = [],
  enabled = true,
  refetchOnWindowFocus = true,
  retry = false,
  config = {},
}) => {
  const { isLoading, error, data, status, refetch } = useQuery({
    queryKey: queryKey, // bunda keshlashda foydalaniladi
    queryFn: () =>
      api
        .get(url, config)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          if (error?.response?.data?.data?.message == "Unauthorized") {
            localStorage.clear();
            window.location.reload();
          }
          return error;
        }),
    enabled: enabled, // agar false bulsa surov yubormaydi
    refetchOnWindowFocus: refetchOnWindowFocus, // sahifadan chiqib qaytadan kirsa va malumot back endan yangilangan bulsa uzini yandilaydi trueda false bulsa yangilamaydi
    retry: retry, // agar hatolik chiqsa {retry} marta succes bulmagancha {refetch} yangilaydi
  });
  return { data, isLoading, error, status, refetch };
};
