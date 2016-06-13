exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var count = start;
    console.log(count++);
    var id = setInterval(function() {
      if (count > end) {
        cancel();
      } else {
        console.log(count++);
      }
    }, 100);
    var cancel = function() {
      clearInterval(id);
    };
    return {cancel: cancel};
  }
};
