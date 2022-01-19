import Head from 'next/head';
import { VFC } from 'react';

type Props = {
  title: string;
  description: string;
};

const PageHead: VFC<Props> = ({ title = 'タイトル', description = 'デフォルトのdescription' }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta property='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='' />
      <meta property='og:image' content='' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content='' />
      <link rel='icon' href='' />
      <link rel='apple-touch-icon' href='' />
    </Head>
  );
};

export default PageHead;
