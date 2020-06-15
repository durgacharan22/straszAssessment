import { Item } from './../models/model';
import { Testlet } from './Testlet';

const y : Item[] = [
    { ItemId : "1", ItemType : 1 },
    { ItemId : "2", ItemType : 0 },
    { ItemId : "3", ItemType : 0 },
    { ItemId : "4", ItemType : 1 },
    { ItemId : "5", ItemType : 1 },
    { ItemId : "6", ItemType : 1 },
    { ItemId : "7", ItemType : 0 },
    { ItemId : "8", ItemType : 1 },
    { ItemId : "9", ItemType : 0 },
    { ItemId : "10", ItemType : 1 },
]

const x = new Testlet("i", y);
console.log(x.Randomize());