import Head from "next/head";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {socials: data},
    }
};
const Home = ({socials}) => (
    <div className={styles.wrapper}>
        <Head>
            <title>Home</title>
        </Head>
        <div className="container">
            <Heading text="Next.js Application" />
            <Socials socials={socials} />
        </div>
    </div>
);

export default Home;