import Link from 'next/link'
import Head from'next/head'
import Layout from '../../components/Layout'

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title> First Post</title>
            </Head>
            
            <h1> THIS IS FIRST POST</h1>
            <h2>
                <Link href='/'>
                    <a> Back to Homepage</a>
                </Link>
            </h2>
        </Layout>
    );
}

export default FirstPost;