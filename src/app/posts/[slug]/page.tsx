import fs from "node:fs";
import path from "node:path";
import "./styles.css";
import Link from "next/link";

const POSTS_REL_DIRPATH = "../../_content/posts";
const POSTS_ABS_DIRPATH = path.resolve(
  process.cwd(),
  "./src/app/_content/posts"
);

interface PageParams {
  slug: string;
}

interface PostPageProps {
  params: Promise<PageParams>;
}

export default async function PostPage(props: PostPageProps) {
  const slug = (await props.params).slug;
  const { default: Post } = await import(`${POSTS_REL_DIRPATH}/${slug}.mdx`);
  return (
    <div>
      <Link href="/posts">&larr; All posts</Link>
      <Post />
    </div>
  );
}

export const generateStaticParams = async (): Promise<PageParams[]> => {
  const postFilenames = await fs.promises.readdir(POSTS_ABS_DIRPATH);

  return postFilenames.map((filename) => {
    const slug = filename.split(".")[0];
    return {
      slug,
    };
  });
};

export const dynamicParams = false;
