function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));


function update_quality() {
  for (var i = 0; i < items.length; i++) {

    if(typeof items[i].update_quality === 'function') {

      items[i].update_quality()
    }
    else {
      switch (items[i].name)
      {
        case 'Aged Brie':
        {
          items[i] = new SpecialCheese(items[i].name,items[i].sell_in,items[i].quality)
          break
        }
        case 'Sulfuras, Hand of Ragnaros':
        {
          items[i] = new Legendary(items[i].name,items[i].sell_in,items[i].quality)
          break
        }
        case 'Backstage passes to a TAFKAL80ETC concert':
        {
          items[i] = new Backstage(items[i].name,items[i].sell_in,items[i].quality)
          break
        }
        case 'Conjured Mana Cake':
        {
          items[i] = new ConjuredItem(items[i].name,items[i].sell_in,items[i].quality)
          break
        }
        default:
        {
          items[i] = new NormalItem(items[i].name,items[i].sell_in,items[i].quality)
          break
        }
      }
      items[i].update_quality()

    }
  }
}
