import fs from "node:fs";
import path from "node:path";
import z from "zod";
import { format } from "date-fns";

const POSTS_REL_DIRPATH = "../../../public/posts";

const POSTS_ABS_DIRPATH = path.resolve(process.cwd(), "./public/posts");

export const loadPost = async (slug: string) => {
  const post = await import(`${POSTS_REL_DIRPATH}/${slug}.mdx`);
  return z
    .object({
      default: z.any(),
      metadata: z.object({
        title: z.string(),
        date: z.coerce.date(),
      }),
    })
    .parse(post);
};

export const getPosts = async () => {
  const postFilenames = await fs.promises.readdir(POSTS_ABS_DIRPATH);

  const posts = await Promise.all(
    postFilenames.map(async (filename) => {
      const slug = filename.split(".")[0];

      const data = await loadPost(slug);

      return {
        slug,
        filename,
        data: {
          ...data,
          metadata: {
            ...data.metadata,
            dateFormatted: format(data.metadata.date, "do MMM R"),
          },
        },
      };
    })
  );

  return posts.sort(
    (a, b) => b.data.metadata.date.getTime() - a.data.metadata.date.getTime()
  );
};
