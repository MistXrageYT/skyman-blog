import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';

interface Props {
  posts: [Post];
};





export default function Home({ posts }: Props) {
  return (
    <div>
      <div className='mx-auto'>
      <Header />
      <hr className="py-0"/>
      <Head>
        <title>SkyMan : Offical Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {/* post */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 p-2 md:p-6 max-w-7xl'>


          

          {posts.map(post => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>

              <div className='border rounded-lg group cursor-pointer overflow-hidden'>

                <img className='h-60 w-full object-cover group-hover:scale-105 transition-transfrom duration-200 ease-in-out' src={urlFor(post.mainImage).url()!} alt="" />
                
              <div className='flex justify-between p-5 bg-white'>

              <div>
              <p className='text-lg font-bold'>{post.title}</p>
              <p className='text-xs font-medium line-clamp-1'>{post.description}</p>
              <p className='text-xs font-light'>By {post.author.name}</p>
              </div>
                <img className='h-12 w-12 border rounded-full border-gray-400' src={urlFor(post.author.image).url()!} alt={post.author.name} />
              

              

                </div>


              </div>

            </Link>
          ))}
        </div>

        </div>
        <Footer />
        
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts
    }
  };

};
