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
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>SkyMan : Offical Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'><span className='underline decoration-black'>Skyman Films</span> Production</h1>
          <h2>Are You An Arist? Why Dont Join Us (A Music Company Which Make Video, Song & More)</h2>
        </div>
        <img
          className="hidden h-32 md:inline-flex lg:h-full"
          src="/logo.png"
          alt="medium-logo"
        />
        </div>

        {/* post */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 p-2 md:p-6'>


          

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