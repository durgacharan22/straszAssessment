import { Item } from './../models/model';

export class Testlet{

    public TestletId : string;
    private Items : Item;

    constructor (testletId : string , items : Item){
        this.TestletId = testletId;
        this.Items = items;
    }
    public Randomize() : Item {
        
        return this.Items;
    }
    
}