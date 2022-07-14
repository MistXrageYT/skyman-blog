import { GetStaticProps } from 'next'
import Head from 'next/head'
import PortableText from 'react-portable-text'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'

interface Props {
    post: Post;
};

function contentPage({ post }: Props) {
    return (


        <main>

            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.description} />
                <meta name="keywords" content={post.tags} />
                <meta name="copyright" content={post.author.name} />
                <meta property="og:type" content="website"></meta>
                <meta property="og:type" content="profile" />
                <meta property="og:site_name" content={post.author.name}/>
                <meta property="og:locale" content="en-IN"></meta>
                <meta property="og:image" content={urlFor(post.mainImage).url()!} />

            </Head>

            <Header />

            <img className='w-full h-40 object-cover' src={urlFor(post.mainImage).url()!} alt="" />

            <article className='max-w-3xl mx-auto p-5'>
                <h1 className='text-3xl mt-10 mb-3'>{post.title}</h1>
                <h2 className='text-xl font-light text-gray-500'>{post.description}</h2>
                <div className='flex items-center space-x-2'>
                    <img className='h-10 w-10 border rounded-full border-gray-400' src={urlFor(post.author.image).url()!} alt={post.author.name} />
                    <p className='font-extralight text-sm'> Blog Post By <span>{post.author.name}</span> - Published at {new Date(post._createdAt).toLocaleString()}</p>
                </div>

                <div className='mt-10'>
                    <PortableText className=''
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.SANITY_PROJECT_ID!}
                        content={post.body}
                        serializers={{
                            h1: (props: any) => <h1 className='text-2xl font-bold my-5' {...props} />,
                            h2: (props: any) => <h2 className='text-xl font-bold my-5' {...props} />,
                            li: ({ children }: any) => <li className="ml-4 list-disc">{children}</li>,
                            link: ({ href, children }: any) => <a href={href} className="text-blue-500 overflow-hidden hover:underline">{children}</a>,
                            someCustomType: contentPage,
                        }}
                    />
                </div>


            </article>
            
            <Footer />

        </main>
    )
}

export default contentPage;




const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage,
    tags,
    description,
    author-> {
        name,
        image
    },
    body,
    _createdAt
}`

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(`*[_type == "post" && defined(slug.current)][].slug.current`)

    return {
        paths: paths.map((slug: any) => ({ params: { slug } })),
        fallback: "blocking"
    }
}


export async function getStaticProps(context: { params: { slug?: "" | undefined } }) {
    const { slug = "" } = context.params
    const post = await sanityClient.fetch(query, { slug })

    if (!post) {
        return {
            notFound: true
        }
    } else {

        return {
            props: {
                post
            }
        }
    }

}
