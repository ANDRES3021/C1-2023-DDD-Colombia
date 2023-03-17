export interface IcreateProductionOrderCommand {
    productionOrderId: string; 
    date: Date;
    name: string; 
    price: number; 
    referencenumber: number; 
    state: boolean; 
    cancel: boolean;
    items:  {
        itemid: string;
        name: string;
        description: string;
        price: number
    }[];
}