'use strict'

class SpecialCheese extends Item
{

update_quality()
{
  if (this.sell_in > 0) {

    (this.quality +1 <= 50) ? this.quality += 1 : this.quality = 50
  }
  else {
    (this.quality +2 <= 50) ? this.quality += 2 : this.quality = 50
  }
   this.sell_in -=1
}
}
