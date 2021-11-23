import {FC} from "react";
import Head from "next/head";
import Link from "next/link"
import {GetStaticProps} from 'next'

import Heading from "../../components/Heading";
import {ContactType} from "../../types";

type contactsTypeProps = {
    contacts: [ContactType]
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {contacts: data},
    }
};

const Contacts: FC<contactsTypeProps> = ({contacts}) => {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <div className="container">
                <Heading text="Contacts list:"/>
                <ul>
                    {contacts && contacts.map(({id, name, email}) => (
                        <li key={id}>
                            <Link href={`/contacts/${id}`}>
                                <a>
                                    <strong>{name}</strong>({email})
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    );
};
export default Contacts;