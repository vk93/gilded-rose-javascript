'use strict'

class Backstage extends Item
{

update_quality()
{
  if (this.sell_in > 5 && this.sell_in <=10 ) {

    (this.quality +2 <= 50) ? this.quality += 2 : this.quality = 50
  }

  if (this.sell_in >0 && this.sell_in <=5) {
    (this.quality +3 <= 50) ? this.quality += 3: this.quality = 50
  }

  if (this.sell_in >10) {
    this.quality += 1
  }

  if(this.sell_in <= 0) {
    this.quality = 0
  }

   this.sell_in -=1
}
}
