import Head from "next/head";
import Link from "next/link";
import {GetStaticProps} from 'next'

import Heading from "../../components/Heading";

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {posts: data},
    }
};
const Posts = ({posts}) => (
    <>
        <Head>
            <title>Posts</title>
        </Head>
        <div className="container">
            <Heading text="Posts list:"/>
            <ul>
                {posts && posts.map(({id, title}) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>
                            <a>
                                {title}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </>
);

export default Posts;