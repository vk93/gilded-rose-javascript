'use strict'

describe("Gilded Rose", function() {

  describe ("Check backward compatability", ()=>{

  it("update old objects to new objects", function() {
    items = []
    items.push(new Item('+5 Dexterity Vest', 10, 20));
    update_quality();

    expect(items[0].quality).toEqual(19)
    expect(items[0].sell_in).toEqual(9)


    });
  it("item quality will degrade twice as fast", function() {
    items = []
    items.push(new Item('+5 Dexterity Vest', -10, 20));
    update_quality();

    expect(items[0].quality).toEqual(18)

    });

  it("increases in quality by 2 when there are 10 days or less for the sell_in value - Backstage Item compatability", function() {
    items = []
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 9, 15));
    update_quality();

    expect(items[0].quality).toEqual(17)
    expect(items[0].sell_in).toEqual(8)
    });

  it("makes no change in sell_in or quality values - Legendary Item compatability", function() {
    items = []
     items.push(new Item('Sulfuras, Hand of Ragnaros', 10, 80));
    update_quality();

    expect(items[0].sell_in).toEqual(10)
    expect(items[0].quality).toEqual(80)
    });
  })

  describe ("Once the sell_in days is less than zero", ()=>{

  it("item quality will be lowered once sell_in is lowered", function() {
     items = []
     items.push(new NormalItem('+5 Dexterity Vest', 10, 20));
    update_quality();

    expect(items[0].quality).toEqual(19)
    expect(items[0].sell_in).toEqual(9)


    });
  it("item quality will degrade twice as fast", function() {
    items = []
    items.push(new NormalItem('+5 Dexterity Vest', -10, 20));
    update_quality();

    expect(items[0].quality).toEqual(18)

    });
  })

  describe ("Quality cannot be negative", ()=>{
  it("when quality is 0, shouldn't go below", function() {
    items = []
    items.push(new NormalItem('+5 Accuracy Vest', -10, 0));

    update_quality();

    expect(items[0].quality).toEqual(0)
    });

  it("when quality is positive, shouldn't go below if sell_in is negative", function() {
    items = []
    items.push(new NormalItem('+5 Accuracy Vest', -10, 1));

    update_quality();

    expect(items[0].quality).toEqual(0)
    });
  })

  describe ("Aged Brie", ()=>{

  it("increases in quality the older it gets", function() {
      items = []
      items.push(new SpecialCheese('Aged Brie', 10, 15));
      update_quality();

      expect(items[0].quality).toEqual(16)
      });

  it("increases in quality by 2 when sell_in is negative", function() {
    items = []
    items.push(new SpecialCheese('Aged Brie', -10, 15));
    update_quality();

    expect(items[0].quality).toEqual(17)
    expect(items[0].sell_in).toEqual(-11)
    });
  })

  describe ("When quality is 50", ()=>{
  it("cannot surpass 50", function() {
     items = []
    items.push(new SpecialCheese('Aged Brie', 10, 50));
    update_quality();

    expect(items[0].quality).toEqual(50)
    });
  })

  describe ("Sulfuras", ()=>{
  it("makes no change in sell_in or quality values", function() {
    items = []
     items.push(new Legendary('Sulfuras, Hand of Ragnaros', 10, 80));
    update_quality();

    expect(items[0].sell_in).toEqual(10)
    expect(items[0].quality).toEqual(80)
    });
  })

  describe ("Backstage passes", ()=>{
    it("increases in quality by 1 if there are more than 10 days for the sell_in value", function() {
      items = []
      items.push(new Backstage('Backstage passes to a TAFKAL80ETC concert', 12, 15));
      update_quality();

      expect(items[0].quality).toEqual(16)
      expect(items[0].sell_in).toEqual(11)
      });

    it("increases in quality by 2 when there are 10 days or less for the sell_in value", function() {
       items = []
      items.push(new Backstage('Backstage passes to a TAFKAL80ETC concert', 9, 15));
      update_quality();

      expect(items[0].quality).toEqual(17)
      expect(items[0].sell_in).toEqual(8)
      });

    it("increases in quality by 3 when there are 5 days or less for the sell_in value", function() {
      items = []
      items.push(new Backstage('Backstage passes to a TAFKAL80ETC concert', 3, 5));
      update_quality();

      expect(items[0].quality).toEqual(8)
      expect(items[0].sell_in).toEqual(2)
      });

      it("quality drops to 0 after the concert", function() {
        items = []
        items.push(new Backstage('Backstage passes to a TAFKAL80ETC concert', 0, 24));
        update_quality();

        expect(items[0].quality).toEqual(0)
        expect(items[0].sell_in).toEqual(-1)
        });
    })

    describe ("Conjured items", ()=>{
      describe ("item quality will degrade twuce as fast as normal items", ()=>{
        it("decreases by 2 if sell_in is greater than 0", function() {
      items = []
      items.push(new ConjuredItem('+5 Dexterity Vest', 10, 20));
      update_quality();

      expect(items[0].quality).toEqual(18)
      expect(items[0].sell_in).toEqual(9)


      });
    it("decreases by 4 if sell_in is less than 0", function() {
       items = []
       items.push(new ConjuredItem('+5 Dexterity Vest', -10, 20));
      update_quality();

      expect(items[0].quality).toEqual(16)

      });
    })

    describe ("Quality cannot be negative", ()=>{
    it("when quality is 0, shouldn't go below", function() {
      items = []
      items.push(new ConjuredItem('+5 Accuracy Vest', 10, 1));

      update_quality();

      expect(items[0].quality).toEqual(0)
      });

    it("when quality is positive, shouldn't go below if sell_in is negative", function() {
      // items = []
      // items.push(new ConjuredItem('+5 Accuracy Vest', -10, 3));

      update_quality();

      expect(items[0].quality).toEqual(0)
      });
    })
   })
})
