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
});
