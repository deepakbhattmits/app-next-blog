import Image from "next/image";
import Markdown from "react-markdown";
import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";
import { FC, ReactElement, ReactNode } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import { Content } from "mdast";

SyntaxHighlighter.registerLanguage("js", js);

SyntaxHighlighter.registerLanguage("css", css);
interface IProp {
  post: { slug: string; image: string; title: string; content: string };
}
type NodeToProps<T> = {
  node: T;
  children: T extends { children: any } ? ReactNode : never;
};

type CustomRenderers = {
  [K in Content["type"]]?: (
    props: NodeToProps<Extract<Content, { type: K }>>
  ) => ReactElement;
};
const PostContent: FC<IProp> = ({ post }): JSX.Element => {
  const imagePath = `/images/posts/${post?.slug}/${post?.image}`;

  const customRenderers: any = {
    img: ({
      alt,
      src,
      title,
    }: {
      alt?: string;
      src?: string;
      title?: string;
    }): JSX.Element => {
      return (
        <Image
          src={`/images/posts/${post?.slug}/${src}`}
          alt={alt}
          width={500}
          height={500}
        />
      );
    },
    p: (paragraph: any): JSX.Element => {
      const { node } = paragraph;

      if (node.children[0].type === "img") {
        const image: any = node.children[0];
        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post?.slug}/${image?.url}`}
              alt={`${image?.alt}${post?.slug}`}
              width={500}
              height={500}
            />
          </div>
        );
      }

      return <p className="paragraph">{paragraph.children}</p>;
    },
    code: ({
      node,
      inline,
      className,
      children,
      ...props
    }: {
      [props: string]: any;
    }): JSX.Element => {
      const match = /language-(\w+)/.exec(className || "");

      return !inline && match ? (
        <SyntaxHighlighter
          style={atomDark}
          PreTag="div"
          language={match[1]}
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className ? className : ""} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post?.title} image={imagePath} />
      <Markdown components={customRenderers}>{post?.content}</Markdown>
    </article>
  );
};

export default PostContent;
