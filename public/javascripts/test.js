var expect = chai.expect;    // Using Expect style

describe('Example 1: Add Ten', function () {

  describe('addTen', function () {

    describe('when empty', function () {

      it('should return an empty array', function () {
        var input  = [];
        var output = [];

        expect(addTen(input)).to.eql(output);
      });

      it('should return a new empty array', function () {
        var input  = [];

        expect(addTen(input)).to.not.equal(input);
      });
    });

    describe('when array of numbers', function () {

      it('should add ten to each value', function () {
        var input  = [2, 7, 3, 5, 6];
        var output = [12, 17, 13, 15, 16];

        expect(addTen(input)).to.eql(output);
      });
    });
  });
});

describe('Example 2: Double Ints', function () {

  describe('doubleInt', function () {

    describe('when empty', function () {

      it('should return an empty array', function () {
        var input  = [];
        var output = [];

        expect(doubleInt(input)).to.eql(output);
      });

      it('should return a new empty array', function () {
        var input  = [];

        expect(doubleInt(input)).to.not.equal(input);
      });
    });

    describe('when array of numbers', function () {

      it('should double and round each value', function () {
        var input  = [2.1, 5.3, 4.9, 3.5, 3.0];
        var output = [4, 11, 10, 7, 6];

        expect(doubleInt(input)).to.eql(output);
      });
    });
  });
});


describe('Example 3: capitalize each string', function () {

  describe('capitalize', function () {

    describe('when empty', function () {

      it('should return an empty array', function () {
        var input  = [];
        var output = [];

        expect(capitalize(input)).to.eql(output);
      });

      it('should return a new empty array', function () {
        var input  = [];

        expect(capitalize(input)).to.not.equal(input);
      });
    });

    describe('when array of strings', function () {

      it('should capitalize each string value', function () {
        var input  = ["shoe", "balloon", "bed", "soda can"];
        var output = ["SHOE", "BALLOON", "BED", "SODA CAN"];

        expect(capitalize(input)).to.eql(output);
      });
    });
  });
});


describe('Example 4: Filtering values less than 11', function () {

  describe('greaterThanTen', function () {

    describe('when empty', function () {

      it('should return an empty array', function () {
        var input  = [];
        var output = [];

        expect(greaterThanTen(input)).to.eql(output);
      });

      it('should return a new empty array', function () {
        var input  = [];

        expect(greaterThanTen(input)).to.not.equal(input);
      });
    });

    describe('when an array of numbers', function () {

      it('should filter out values less than 11', function () {
        var input  = [7, 11, 8, 12, 10, 9];
        var output = [11, 12]

        expect(greaterThanTen(input)).to.eql(output);
      });
    });
  });
});


describe('Example 5: Filtering nums less than 10', function () {

  describe('tenOrMore', function () {

    describe('when empty', function () {

      it('should return an empty array', function () {
        var input  = [];
        var output = [];

        expect(tenOrMore(input)).to.eql(output);
      });

      it('should return a new empty array', function () {
        var input  = [];

        expect(tenOrMore(input)).to.not.equal(input);
      });
    });

    describe('when an array of numbers', function () {

      it('should filter out values less than 10', function () {
        var input  = [7, 11, 8, 12, 10, 9];
        var output = [11, 10, 12];

        expect(tenOrMore(input)).to.eql(output);
      });
    });
  });
});

describe('Example 5: Adding it all up', function () {

  describe('add', function () {

    describe('when empty', function () {

      it('should return a specified seed', function () {
        var input   = [];
        var seed = 100;

        expect(add(input, seed)).to.eql(seed);
      });
    });

    describe('when an array of numbers', function () {

      it('should sum the input values', function () {
        var input  = [7, 11, 8, 12, 10, 9];

        expect(add(input)).to.eql(57);
      });
    });

    describe('when an array of numbers with seed/default', function () {

      it('should sum the input values starting with seed/default', function () {
        var input   = [7, 11, 8, 12, 10, 9];
        var seed = 100;

        expect(add(input, seed)).to.eql(157);
      });
    });
  });
});
