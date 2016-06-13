exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return num >> bit - 1 & 0x1;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binary = '';
    for (var i = 0, e = Math.ceil(Math.log2(num)); i <= e; i++) {
      binary = ((num & 0x1) ? "1" : "0") + binary;
      num = num >> 1;
    }
    return binary;
  },

  multiply: function(a, b) {
    function adjusted(num) {
      if (num < 1) {
        var multiplier = Math.pow(10, Math.floor(Math.log(num) * -1));
        return {adjusted: num * multiplier, multiplier: multiplier};

      }
      return {adjusted: num, multiplier: 1};
    }
    a = adjusted(a);
    b = adjusted(b);
    return a.adjusted * b.adjusted / (a.multiplier * b.multiplier);
  }
};
