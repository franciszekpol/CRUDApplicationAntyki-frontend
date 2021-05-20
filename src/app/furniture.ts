export interface Furniture{
    id: number;
    title: string;
    description: string;
    year: number;
    countryOfOrigin: string;
    material: string;
    style: string;
    price: number;
    category: string;
    image: Blob;
    imageUrl: string;
}