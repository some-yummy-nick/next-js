import {useEffect} from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import Heading from "../components/Heading";
import styles from "../styles/404.module.scss";

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [router]);

    return (
        <>
            <Head>
                <title>Error</title>
            </Head>
            <div className={styles.wrapper}>
                <div>
                    <Heading text="404"/>
                    <Heading tag="h2" text="Something is going wrong..."/>
                    <p>Вы будете перенаправлены на главную страницу</p>
                </div>
            </div>
        </>
    )
};

export default Error;