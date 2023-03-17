import { ItemDomainEntity } from "../../entities/item.domain-entity";

export interface IGetItemResponse {
    data: ItemDomainEntity | null;
}