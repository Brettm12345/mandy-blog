import React, { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode;
};

const Content = (props: IContentProps) => (
  <article className="prose md:prose-xl dark:prose-dark dark:md:prose-xl-dark">
    {props.children}
  </article>
);

export { Content };
