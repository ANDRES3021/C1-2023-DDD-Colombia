export interface IcreateProductionOrderUseCase {
    productionOrderId: string; 
    date: Date;
    name: string; 
    price: number; 
    referencenumber: number; 
    state: boolean; 
    cancel: boolean;
    itemids:  {
        itemid: string;
        name: string;
        description: string;
        price: number
    }[];
}