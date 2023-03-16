import { Injectable } from '@nestjs/common';
import { ItemPostgresService } from './../databases/postgres/services/item-postgres.service';
@Injectable()
export class ItemService extends ItemPostgresService {}