// testShipping.fromZip
// testShipping.toZip
// testShipping.fromCountry
// testShipping.toCountry
// testShipping.weight
// testShipping.shipDate
// testShipping.pickup

    var Package = {
      pickupFee: function() {
       if (this.pickup === true) {
        return 5;
      } else 
      return 0; 
  }
      weightFee: function() {
        return this.weight;
      }
};


