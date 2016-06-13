exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var i = str.length - 1;
    var count = 0;
    var currentChar;
    while (i >= 0) {
      if (str[i] === currentChar) {
        if (count >= amount) {
          str = str.substring(0, i) + str.substring(i + 1);
        }
        count++;
      } else {
        count = 1;
        currentChar = str[i];
      }
      i--;
    }
    return str;
  },

  wordWrap: function(str, cols) {
    var lineLength = 0;
    var currentLine = [];
    var lines = str.split(' ').reduce(function(lines, part, i, parts) {
      lineLength += part.length;
      if (lineLength > cols && i > 0) {
        lines.push(currentLine.join(' '));
        lineLength = part.length + 1;
        currentLine = [];
      }
      currentLine.push(part);
      return lines;
    }, []);
    if (lineLength) {
      lines.push(currentLine.join(' '));
    }
    return lines.join('\n');
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
