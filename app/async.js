exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return fetch(new Request(url))
      .then(function(response) {
        return response.json();
      })
      .then(function(value) {
        return value.people.map(function(p) {
          return p.name;
        }).sort();
      });
  }
};
