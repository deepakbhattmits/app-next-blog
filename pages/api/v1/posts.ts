import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs/promises";
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
  if (!!req?.method?.match(/get/i)) {
    const posts = await fetchAllPosts();
    if (!!posts) {
      res.status(200).send({ message: "Fetched successfully", posts });
    } else {
      res.status(422).send({ message: "Not found posts " });
    }
  }
};
export default handler;
