import { useQuery } from "react-query";
import  {api}  from '../utils';
const usePosts = () => {
    
    const fetchPosts = async () => {
        // const response = await fetch('/db/questions.json');
        // const data = await response.json();
         const {data} = await api.get('/db/posts.json');
        return data;
    }
    const queryInfo = useQuery('posts', fetchPosts, { refetchInterval: 30000 });
    return queryInfo
};
export default usePosts;