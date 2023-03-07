import { Module } from '@nestjs/common';
import { ItemIdValueObject } from './subdomains/fabrication/contexts/products/domain/value-objects/item/item-id/item-id.value-object';
import { NameItemValueObject } from './subdomains/fabrication/contexts/products/domain/value-objects/item/name/name.value-object';


@Module({
  imports: [],
  controllers: [],
  providers: [ItemIdValueObject, NameItemValueObject],
})
export class AppModule {}
