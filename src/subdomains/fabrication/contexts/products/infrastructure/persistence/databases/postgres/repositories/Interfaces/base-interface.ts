export interface IBase<Entity> {
    create(entity: Entity): Promise<Entity>;
    update(id : string, entity: Entity): Promise<Entity>;
    delete(id: string): Promise<boolean>;
    findOneByUsuarioId(id: string): Promise<Entity>;
    findAll(): Promise<Entity[]>;
}