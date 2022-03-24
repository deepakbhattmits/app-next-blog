import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import Hero from "../components/HomePage/Hero";
import { fetchFeaturedPosts } from "./api/v1/posts";
interface IProp {
  posts: {
    id: number;
    title: string;
    excerpt: string;
    slug: string;
    image: string;
    isFeatured: boolean;
    date: string;
  }[];
}
const Home: NextPage<IProp> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Next js blog app</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = await fetchFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default Home;
