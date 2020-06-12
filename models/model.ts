export interface Item {
    ItemId : string,
    ItemType : ItemTypeEnum
}

export enum ItemTypeEnum {
    Pretest = 0,
    Operational = 1
}