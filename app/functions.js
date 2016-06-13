exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(other) {
      return [str, other].join(', ');
    };
  },

  makeClosures: function(arr, fn) {
    return arr.map(function(i) {
      return fn.bind(null, i);
    });
  },

  partial: function(fn, str1, str2) {
    return fn.bind(this, str1, str2);
  },

  useArguments: function() {
    return Array.prototype.slice.call(arguments).reduce(function(sum, item) {
      return sum + item;
    });
  },

  callIt: function(fn) {
    return fn.apply(this, Array.prototype.slice.call(arguments, 1));
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
      return fn.apply(this, args.concat(Array.prototype.slice.apply(arguments)));
    }.bind(this);
  },

  curryIt: function(fn) {
    var args = [];
    return function curried(arg) {
      args.push(arg);
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return curried;
      }
    }.bind(this);
  }
};
