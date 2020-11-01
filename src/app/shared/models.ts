export interface ProductItem {
    art_id: string,
    amount_of: number
}

export interface Product {
    name: string,
    contain_articles: ProductItem[]
}

export class SalesOrder {
    sale_items: KtPair[]

    constructor(items: KtPair[]) {
        this.sale_items = items;
    }
}

export interface IKtPair {
    first: string,
    second: number
}

export class KtPair implements IKtPair {
    first: string;
    second: number;

    constructor(first: string, second: number) {
        this.first = first;
        this.second = second
    }
}

export class InventoryItem {
    art_id: string;
    name: string;
    stock: number;

    constructor(art_id: string, name: string, stock: number) {
        this.art_id = art_id;
        this.name = name;
        this.stock = stock;
    }
}
