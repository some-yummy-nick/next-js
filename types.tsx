export type ContactType = {
    id: string,
    name: string,
    email: string,
    address: AddressType,
}

export type AddressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
}

export type PostType = {
    title: string,
    body: string,
}

export type SocialsType={
    id: string,
    icon: string,
    path: string,
}