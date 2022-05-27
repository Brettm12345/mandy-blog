import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';
import readingTime, { ReadTimeResults } from 'reading-time';

const postsDirectory = join(process.cwd(), '_posts');

export type PostItems = {
  title: string;
  description: string;
  readingTime: ReadTimeResults;
  content: string;
  slug: string;
  date: string;
  modified_date: string;
  image: string;
  [key: string]: any;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const timeToRead = readingTime(content);
  // @ts-ignore
  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'readingTime') {
      items[field] = timeToRead;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
