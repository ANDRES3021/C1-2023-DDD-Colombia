import { ItemDomainEntity } from "../../entities/item.domain-entity";

export interface IcreateItemResponse { 
    succes : boolean,
    data : ItemDomainEntity | null,
}