export interface MenuListState {
    imageUrl: string,
    count: number,
    title: string,
    countTitle: string
}


export interface ProductState {
    image: string,
    title: string,
    time?: number,
    price: number,
    productCount?: number
}

export interface JWTResponse {
    id: string
}