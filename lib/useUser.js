import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "./fetcher";

export default function useUser() {
  const { data, error, mutate: mutateUser } = useSWR("/api/auth", fetcher);

  useEffect(() => {
    console.log("useUser ", data);
  }, [data]);
  return {
    loading: !data && !error,
    user: data?.user,
    token: data?.token,
    mutateUser,
  };
}
