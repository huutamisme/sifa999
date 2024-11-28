export type Product = {
    id: number,
    type: string,
    img: string,
    name: string,
    price: number
};

export type Introduction = {
    title: string,
    content: string[]
};

export type NavItem = {
    name: string,
    href: string
};

export type Distributor = {
    id: number,
    img: string,
    name: string,
    address: string,
    phoneNumber: string,
}