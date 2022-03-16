import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import AllPosts from "../../components/posts/AllPosts";
import { fetchAllPosts } from "../api/v1/posts";
interface IProp {
  posts: any[];
}
const AllPostsPage: NextPage<IProp> = ({ posts }) => (
  <>
    <Head>
      <title>All Posts</title>
      <meta
        name="description"
        content="A list of all programming-related tutorials and posts!"
      />
    </Head>
    <AllPosts posts={posts} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await fetchAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
