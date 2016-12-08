'use strict'

class ConjuredItem extends Item
{

update_quality()
{
  if (this.sell_in < 0) {

    (this.quality -4 >= 0) ? this.quality -= 4 : this.quality = 0
  }
  else {
    (this.quality -2>= 0) ? this.quality -= 2: this.quality = 0
  }
   this.sell_in -=1
}
}
