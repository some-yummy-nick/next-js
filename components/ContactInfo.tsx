import {FC} from "react";
import Heading from "./Heading";
import {ContactType} from "../types";

type contactInfoProps = {
    contact: ContactType,
}

const ContactInfo: FC<contactInfoProps> = ({contact}) => {
    const {name, email, address} = contact || {};
    const {street, suite, city, zipcode} = address || {};

    if (!contact) {
        return <Heading tag="h3" text="Empty contact"/>
    }
    return (
        <>
            <Heading tag="h3" text={name}/>
            <div>
                <strong>Email:</strong> {email}
            </div>
            <div>
                <strong>Address:</strong> {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>
    )
}

export default ContactInfo;