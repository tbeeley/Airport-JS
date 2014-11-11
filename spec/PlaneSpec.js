describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane;
  });

  describe('initialization', function(){

    it("should be flying when initialized", function() {
      expect(plane.flying).toBe(true)
    });
    
  });

});

  