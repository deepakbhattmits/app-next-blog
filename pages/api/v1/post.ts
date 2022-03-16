import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs/promises";
export const fetchPost = async (slug:string) => {
  const postsFilePath = path.join(
    process.cwd(),
    "db",
    "posts.json"
  );
  const postsJsonData=await fs.readFile(postsFilePath);
  const { data } = JSON.parse(postsJsonData.toString());
  const post = data?.filter((el:any)=>el?.slug===slug)

  return post;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if(!!req?.method?.match(/post/i)) {
    //POST
    }
    if(!!req?.method?.match(/get/i)) {
        const {postId}=req?.body;
        const post=await fetchPost(postId);
        if(!!post) {
            
        res.status(200).send({message:"Fetched successfully",post})
        } else {
            res.status(422).send({message:`Not found post with PostId : ${postId}`})
        }
  }
};
export default handler;
