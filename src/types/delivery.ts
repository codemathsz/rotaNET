export type Delivery = {
    id: number;
    cod: string;
    title: string;
    description: string;
    addressInitial: string;
    addressFinal: string;
    status: 'pending' | 'delivered' | 'in_progress';
}