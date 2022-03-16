import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs/promises";
import { getPostData } from "../../../utils/api-utils";
export const fetchFeaturedPosts = async () => {
  const postsFilePath = path.join(process.cwd(), "db", "posts.json");
  const postsJsonData = await fs.readFile(postsFilePath);
  const { data } = JSON.parse(postsJsonData.toString());
  const featuredPosts = data?.filter((el: any) => el?.isFeatured);

  return featuredPosts;
};
export const fetchAllPosts = async () => {
  const postsFilePath = path.join(process.cwd(), "db", "posts.json");
  const postsJsonData = await fs.readFile(postsFilePath);
  const { data } = JSON.parse(postsJsonData.toString());
  const appPosts = data?.sort((a: any, b: any) => (a?.date > b?.date ? -1 : 1));
  return appPosts;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!!req?.method?.match(/post/i)) {
    //POST
  }
  if (!!req?.method?.match(/get/i)) {
    const posts = await fetchAllPosts();
  }
};
export default handler;
