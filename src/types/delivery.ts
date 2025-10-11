export type Delivery = {
    id: number;
    cod: string;
    description?: string;
    title: string;
    addressInitial: string;
    addressFinal: string;
    status: 'pending' | 'delivered' | 'in_progress';
}