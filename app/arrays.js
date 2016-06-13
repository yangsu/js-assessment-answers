exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    return arr.reduce(function(sum, item) {
      return sum + item;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(function(val) {
      return val !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    var index = arr.indexOf(item);
    while (index >= 0) {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var index = arr.indexOf(item);
    var count = 0;
    while (index >= 0) {
      count++;
      index = arr.indexOf(item, index + 1);
    }
    return count;
  },

  duplicates: function(arr) {
    var map = {};
    var dups = [];
    arr.forEach(function(item) {
      map[item] = (map[item] || 0) + 1;
      if (map[item] > 1 && dups.indexOf(item) === -1) {
        dups.push(item);
      }
    });
    return dups;
  },

  square: function(arr) {
    return arr.map(function(x) {
      return x * x;
    });
  },

  findAllOccurrences: function(arr, target) {
    var index = arr.indexOf(target);
    var occurrences = [];
    while (index >= 0) {
      occurrences.push(index);
      index = arr.indexOf(target, index + 1);
    }
    return occurrences;
  }
};
