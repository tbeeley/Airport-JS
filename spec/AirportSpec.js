describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport;
  });

  describe('initialization', function(){

    it("should have a capacity of twenty", function() {
      expect(airport.capacity).toEqual(20)
    });

    it("should have a name", function() {
      expect(airport.name).toEqual('Heathrow')
    });
    
  });

});