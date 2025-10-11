export type Delivery = {
    id: number;
    title: string;
    addressInitial: string;
    addressFinal: string;
    status: 'pending' | 'delivered' | 'in_progress';
}