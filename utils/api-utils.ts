import fs from "fs/promises";
import path from "path";
const postsDirectory = path.join(process.cwd(), "posts");
export const getPostData = (postIdentifier: string) => {
  const filePath = path.join(postsDirectory, `${postIdentifier}.md`);
  const postContent = fs.readFile(filePath, "utf-8");
  return postContent;
};
