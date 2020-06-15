import { Testlet } from './Testlet';

describe('Testlet', () => {
    let instance : Testlet;
    const array = [
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
    ];

    beforeEach(() => {
        instance = new Testlet("1", array);
    });

    it('successfully created an instance of Testlet Class', async () => {
        expect(instance).toBeInstanceOf(Testlet);
    });

    it('Checking if the instance created is of the Testlet class', async () => {
        expect(instance).toBeInstanceOf(Testlet);
    });
    
    it('Testing if the length of the returned list is equal to the passed list', async () => {
        const TestletItems = await instance.Randomize();
        expect(TestletItems).toBeDefined();
        expect(TestletItems.length).toBe(array.length);
    });

    it('Testing if the length of the returned list is equal to 10', async () => {
        const TestletItems = await instance.Randomize();
        expect(TestletItems).toBeDefined();
        expect(TestletItems.length).toBe(10);
    });

    it('Testing if the first value returned is Pretest', async () => {
        const TestletItems = await instance.Randomize();
        expect(TestletItems).toBeDefined();
        expect(TestletItems[0].ItemType).toBe(0);
    });

    it('Testing if the second value returned is Pretest', async () => {
        const TestletItems = await instance.Randomize();
        expect(TestletItems).toBeDefined();
        expect(TestletItems[1].ItemType).toBe(0);
    });
});