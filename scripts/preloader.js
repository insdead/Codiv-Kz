"use strict";

class NumberAnimator {
  constructor(el) {
    this.destinationNumber = Number(el.innerText);
    this.el = el;

    if (isNaN(this.destinationNumber)) {
      console.error("Value has to be a number");
    }

    this.animate();
  }

  animate() {
    // start at half of the value
    const proxy = {
      val: 0
    }; // 3 second per hundred

    const duration = this.destinationNumber / 10000 * 3;
    TweenMax.to(proxy, duration, {
      val: this.destinationNumber,
      ease: Power4.easeInOut,
      onUpdateParams: ["{self}"],
      onUpdate: self => {
        this.el.innerHTML = Math.round(self.target.val);
      }
    });
  }

}

const el = document.getElementById("message");
new NumberAnimator(el);