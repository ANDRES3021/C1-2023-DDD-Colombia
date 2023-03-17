import { Controller } from "@nestjs/common";
import { Ctx, EventPattern, Payload } from "@nestjs/microservices";

@Controller()
export class InventoryController {
    @EventPattern('products.registered-production-order')
    productioncreated(@Payload() data: any, @Ctx() context: any) {
        console.log('data', data);
        console.log('context', context);
    }
    @EventPattern('products.registered-new-item')
    itemcreated(@Payload() data: any, @Ctx() context: any) {
        console.log('data', data);
        console.log('context', context);
    }
    @EventPattern('products.got-production-order')
    gotproductionorder(@Payload() data: any, @Ctx() context: any) {
        console.log('data', data);
        console.log('context', context);
    }
    @EventPattern('products.got-item')
    gotitem(@Payload() data: any, @Ctx() context: any) {
        console.log('data', data);
        console.log('context', context);
    }
}
