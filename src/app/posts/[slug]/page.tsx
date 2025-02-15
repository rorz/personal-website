import "./styles.css";
import Link from "next/link";
import { getPosts, loadPost } from "../actions";

interface PageParams {
  slug: string;
}

interface PostPageProps {
  params: Promise<PageParams>;
}

export default async function PostPage(props: PostPageProps) {
  const slug = (await props.params).slug;
  const post = await loadPost(slug);

  return (
    <div>
      <Link href="/posts">&larr; All posts</Link>
      <post.default />
    </div>
  );
}

export const generateStaticParams = async (): Promise<PageParams[]> => {
  const posts = await getPosts();
  return posts;
};

export const dynamicParams = false;
