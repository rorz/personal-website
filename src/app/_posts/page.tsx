import { NextPage } from "next";
import { getPosts } from "./actions";
import Link from "next/link";

const PostsPage: NextPage = async () => {
  const posts = await getPosts();

  return (
    <div className="size-full flex flex-col gap-y-4">
      <h1 className="font-display text-2xl font-medium pb-2">Posts</h1>
      <div className="flex flex-col w-full border-t border-zinc-400">
        {posts.map((post) => {
          return (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="w-full flex justify-between border-b py-3"
            >
              <span className="font-medium">{post.data.metadata.title}</span>
              <span className="text-zinc-500 text-sm">
                {post.data.metadata.dateFormatted}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PostsPage;
