import {FC} from "react";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import {GetServerSideProps} from 'next'
import {ContactType} from "../../types";

type contactTypeProps = {
    contact: ContactType
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {contact: data},
    }
};

const Contact: FC<contactTypeProps> = ({contact}) => (
    <>
        <Head>
            <title>{contact.name}</title>
        </Head>
        <div className="container">
            <ContactInfo contact={contact}/>
        </div>
    </>
);

export default Contact;