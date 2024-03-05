import { useQuery } from "react-query";
import { api } from "../utils";
const usePost = (slug: string) => {
  const fetchPost = async ({ queryKey }: { queryKey: any[] }) => {
    const { data } = await api.get(`/api/v1/${queryKey[1]}`);
    return data;
  };
  const queryInfo = useQuery(["post", slug], fetchPost, {
    refetchInterval: 30000,
    refetchOnWindowFocus: false,
    enabled: !!slug,
  });
  return queryInfo;
};
export default usePost;
