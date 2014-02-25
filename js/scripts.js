// testShipping.fromZip
// testShipping.toZip
// testShipping.fromCountry
// testShipping.toCountry
// testShipping.weight
// testShipping.shipDate
// testShipping.pickup

var Package = {
  pickupFee: function() {
    if (this.pickup === "pickup") {
      return 5;
    } else {
      return 0; 
    }
  },
  weightFee: function() {
    return this.weight;
  },
  withinCountryFee: function() {
    if (this.toCountry === this.fromCountry) {
      return 10;
    } else {
      return 25;
    }
  },
  withinZipFee: function() {
    if (this.toZip === this.fromZip) {
      return 0;
    }
  }
};


$(document).ready(function(){
  $('form#shipment-details').submit(function(event) {
    event.preventDefault();

    var inputFromCountry = $("input#from-country").val();
    var inputFromZip = $("input#from-zip").val();
    var inputToCountry = $("input#to-country").val();
    var inputToZip = $("input#to-zip").val();
    var inputWeight = $("input#weight").val();
    var inputPickup = $("input#pickup").val();
    var newShipment = Object.create(Package);
    newShipment.fromCountry = inputFromCountry;
    newShipment.fromZip = inputFromZip;
    newShipment.toCountry = inputToCountry;
    newShipment.toZip = inputToZip;
    newShipment.weight = inputWeight;
    newShipment.pickup = inputPickup;

    var totalCost = parseInt(newShipment.pickupFee()) + parseInt(newShipment.weightFee()) + parseInt(newShipment.withinCountryFee()) + parseInt(newShipment.withinZipFee());
console.log(newShipment.pickup)
console.log(newShipment.pickupFee());

    $("h2#results").append("Your shipment will cost: $" + totalCost);


    this.reset();
  });
});





