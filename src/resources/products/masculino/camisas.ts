import { category } from "../categorias";

export interface IPart {
    nome: string;
    id: number;
    marca: string;
    price: number;
    image: string[];
    cores?: string[] | null;
    description: string;
    tamanhos: string[];
    category: category[];
}

const Camisas: IPart[] = [
    {
        id: 1,
        nome: "Moda Corporativa",
        marca: "adidas",
        price: 78,
        image: [
            "/img/products/f1.jpg",
            "/img/products/f2.jpg",
            "/img/products/f3.jpg",
        ],
        tamanhos: ["P", "M"],
        cores: ["Preta", "Azul", "Vermelho"],
        category: ["Camisas", "T-Shirts", "Moda Corporativa"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.",
    },
];

export { Camisas };
