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

  describe('taking off and landing', function(){

    it("should not be flying when landed", function() {
      plane.land()
      expect(plane.flying).toBe(false)
    });

    it("should be flying having taken off", function() {
      plane.land()
      plane.takeOff()
      expect(plane.flying).toBe(true)
    });

  });

});

  