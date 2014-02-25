describe('Package', function() {
  describe('pickupFee', function() {
    it('is true if the customer wants package picked up instead of dropped off', function() {
      var testShipping = Object.create(Package);
      testShipping.pickup = true;    
      testShipping.pickupFee().should.equal(5);
    });
  });

  describe('weightFee', function() {
    it('should equal one dollar per every pound', function() {
      var testShipping = Object.create(Package);
      testShipping.weight = 7;
      testShipping.weightFee().should.equal(7);
    });
  });

  describe('withinCountryFee', function() {
    it('should return 10 if to country and from country are the same', function() {
      var testShipping = Object.create(Package);
      testShipping.toCountry = "USA";
      testShipping.fromCountry = "USA";
      testShipping.withinCountryFee().should.equal(10);
    });

    it('should return 25 if to country and from country are not same', function() {
      var testShipping = Object.create(Package);
      testShipping.toCountry = "USA";
      testShipping.fromCountry = "Spain";
      testShipping.withinCountryFee().should.equal(25);
    });
  });
  describe('withinZipFee', function() {
    it('should equal 0 when inside country item was shipped to', function() {
      var testShipping = Object.create(Package);
      testShipping.toZip = "97214";
      testShipping.fromZip = "97214";
      testShipping.withinZipFee().should.equal(0);
    });
  });
});
