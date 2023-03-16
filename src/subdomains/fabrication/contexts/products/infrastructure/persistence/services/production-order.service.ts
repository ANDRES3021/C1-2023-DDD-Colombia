import { Injectable } from '@nestjs/common';
import { ProductionOrderPostgresService } from "../databases/postgres/services/production-order-postgres.service";

@Injectable()
export class ProductionOrderService extends ProductionOrderPostgresService {}