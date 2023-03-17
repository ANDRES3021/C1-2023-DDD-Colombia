import { Module } from "@nestjs/common";
import { InventoryController } from "./inventory.controller";

@Module(
    {
        imports: [],
        controllers: [InventoryController],
        providers: [],
        exports: []
    })
export class InventoryModule { }
