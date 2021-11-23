import {AppProps} from 'next/app'
import Head from "next/head";

import '../styles/globals.css'
import Layout from "../components/Layout";

const MyApp = ({Component, pageProps}: AppProps) => (
    <Layout>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
        </Head>
        <Component {...pageProps} />
    </Layout>
);

export default MyApp
