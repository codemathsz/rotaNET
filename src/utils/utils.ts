export const getStatusColor = (status: string) => {
    switch(status) {
        case 'pending': return 'bg-yellow-100 text-yellow-800';
        case 'delivered': return 'bg-green-100 text-green-800';
        case 'in_progress': return 'bg-blue-100 text-blue-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

export const getStatusText = (status: string) => {
    switch(status) {
        case 'pending': return 'Pendente';
        case 'delivered': return 'Entregue';
        case 'in_progress': return 'Em andamento';
        default: return 'Desconhecido';
    }
};

export const getDeliveryStatusIcon = (status: string) => {
    switch(status) {
        case 'pending': return 'pending';
        case 'delivered': return 'check-circle';
        case 'in_progress': return 'schedule';
        default: return 'help';
    }
}
