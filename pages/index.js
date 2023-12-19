import Head from 'next/head';
import Blogs from './blogs';


export const metadata = {
  title: 'SparkScribe',
  description: "Embark on a journey of discovery with our diverse and compelling blog. Uncover a wealth of knowledge, from insightful articles on technology, lifestyle, and wellness to engaging stories that captivate the imagination. Immerse yourself in a world of creativity, inspiration, and expert advice. Whether you're seeking practical tips, thought-provoking insights, or simply a delightful escape, our blog is your go-to destination. Elevate your reading experience with our carefully curated content. Explore, learn, and be inspired. Your daily dose of inspiration awaits!",

};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Blogs />
    </>
  );
}

