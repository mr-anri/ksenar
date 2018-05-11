var ladder = {
  step: 0,
  up: function() { 
    this.step++;
    return this;
  },
  down: function() { 
    this.step--;
    return this;
  },
  showStep: function() { 
    alert( this.step );
    return this; //строка нужна на случай если после showStep() захотим вызвать еще вверх или вниз
  }
};
alert (ladder.up().up().down().up().down().up().showStep());