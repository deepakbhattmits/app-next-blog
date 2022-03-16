import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

import PostContent from "../../components/posts/PostDetail/PostContent";
import { getPostData } from "../../utils/api-utils";
import { fetchPost } from "../api/v1/post";
import { fetchAllPosts } from "../api/v1/posts";

interface IProp {
  overAllPost: any;
}
const PostDetailPage: NextPage<IProp> = ({ overAllPost }) => {
  return (
    <Fragment>
      <Head>
        <title>{overAllPost?.title}</title>
        <meta name="description" content={overAllPost?.excerpt} />
      </Head>
      {overAllPost?.map((post: any) => (
        <PostContent key={post?.id} post={post} />
      ))}
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context;

  const post = await fetchPost(params?.slug);
  const postData = await getPostData(params?.slug);
  const overAllPost = post?.map((data: any) => ({
    ...data,
    content: postData,
  }));

  return {
    props: {
      overAllPost,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchAllPosts();
  const slugs = posts?.map(({ slug }: { slug: string }) => slug);
  const paths = slugs?.map((slug: string) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default PostDetailPage;
