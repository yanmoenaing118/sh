import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "./fetcher";

export default function useUser() {
  const { data, error, mutate } = useSWR("/api/auth", fetcher);

  return {
    loading: !data && !error,
    user: data?.user,
    token: data?.token,

    mutate,
  };
}
