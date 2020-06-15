import { Item, ItemTypeEnum } from './../models/model';

export class Testlet{

    public TestletId : string;
    private Items: Item[];
    private finalItemsList : Item[] = [];
    private count : number = 0;

    constructor (testletId : string , items : Item[]){
        this.TestletId = testletId;
        this.Items = items;
    }

    public Randomize() : Item[] {
        //shufflig the list
        this.Items.sort( () => Math.random() - 0.5);
        //adding the first two pretest items in the list to a new array and adding the remaining shuffled array with duplicates
        this.finalItemsList = [...this.Items.filter((item) => {
            if(item.ItemType == ItemTypeEnum.Pretest && this.count < 2){
                this.count++;
                return item;
            }
        }), ...this.Items];
        //creating a Set out of the final array to remove the duplicates
        this.finalItemsList = Array.from(new Set(this.finalItemsList));

        return this.finalItemsList;
    }
    
}