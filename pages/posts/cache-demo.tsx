import { log } from "console";
import {
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export interface CacheDemoProps {
  query: any;
  post: any;
}

export default function CacheDemo({ query, post }: CacheDemoProps) {
  const router = useRouter();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((x) => {
        if (x > 60) clearInterval(intervalId);
        return x + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>CacheDemo Page</h1>
      <h2>Time: {seconds}s</h2>
      <div>
        <h1>Post detail </h1>
        <p>{post?.title}</p>
        <p>{post?.description}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader("Cache-Control", "s-maxage=5");
  await new Promise((res) => setTimeout(res, 3000));

  const postId = context.query.postId;
  if (!postId) return { props: { query: context.query } };

  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  const data = await response.json();
  return {
    props: {
      query: context.query,
      post: data,
    },
  };
}
