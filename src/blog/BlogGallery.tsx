import React from 'react';

import { CalendarIcon, ClockIcon } from '@heroicons/react/outline';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

dayjs.extend(relativeTime);

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul className="flex flex-col space-y-6">
      {props.posts.map((post) => (
        <li
          key={post.slug}
          className="link-box bg-white dark:bg-gray-100/5 dark:hover:bg-white/10 hover:bg-gray-700/5 shadow-sm hover:shadow-lg transition-all flex flex-row space-x-3 rounded-md p-3 border dark:border-gray-800 relative"
        >
          <>
            <Image
              className="rounded-md"
              alt={post.title}
              src={post.image}
              layout="fixed"
              width={150}
              height={120}
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col space-y-1.5">
                <Link href="/posts/[slug]" as={`/posts/${post.slug}`} passHref>
                  <a className="link-overlay text-pink-500 font-semibold dark:text-pink-400 focus:ring-1 focus:ring-offset-2 ring-offset-transparent rounded-md focus:ring-pink-500 focus:dark:ring-pink-400 focus:outline-none">
                    <h2>{post.title}</h2>
                  </a>
                </Link>
                <p className="text-gray-600 dark:text-gray-300">
                  {post.description}
                </p>
              </div>
              <div className="flex flex-row space-x-3">
                <span className="badge">
                  <CalendarIcon />
                  {dayjs(post.date).fromNow()}
                </span>
                <span className="badge">
                  <ClockIcon />
                  {post.readingTime.text}
                </span>
              </div>
            </div>
          </>
        </li>
      ))}
    </ul>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
