import { Metadata, ResolvingMetadata } from 'next';
import * as React from 'react';

import { getBlogById } from '@/helper/endpoints/blog/apis';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const blog = getBlogById({ id });

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.title,
    applicationName: blog.title,
    description: blog.description,
    authors: {
      name: blog.author,
    },
    openGraph: {
      images: [blog.image, ...previousImages],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
