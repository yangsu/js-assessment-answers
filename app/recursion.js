exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var dir;
    if (dirName) {
      dir = data.files.find(function(file) {
        return file.dir === dirName;
      });
    } else {
      dir = data;
    }
    function listFiles(item) {
      if (item.dir) {
        return item.files.reduce(function(results, file) {
          return results.concat(listFiles(file));
        }, []);
      }
      return [item];
    }
    return listFiles(dir);
  },

  permute: function permute(arr) {
    if (arr.length === 1) {
      return [arr];
    } else if (arr.length > 1) {
      var newArr = arr.slice(0);
      var head = newArr.shift();
      return permute(newArr).reduce(function(permutations, permutation) {
        for (var i = 0, l = permutation.length; i <= l; i++) {
          var newPermutation = permutation.slice(0);
          newPermutation.splice(i, 0, head);
          permutations.push(newPermutation);
        }
        return permutations;
      }, []);
    }
    return [];
  },

  fibonacci: function fibonacci(n) {
    if (n <= 2) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  },

  validParentheses: function validParentheses(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return ['()'];
    }
    return validParentheses(n - 1).reduce(function(parens, sequence) {
      parens.push('()' + sequence);
      parens.push('(' + sequence + ')');
      if (sequence + '()' !== '()' + sequence) {
        parens.push(sequence + '()');
      }
      return parens;
    }, []);
  }

};
