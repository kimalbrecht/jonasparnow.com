'use strict'

module.exports = {
  unique: function (arr) {
    return arr.filter(function (value, index, self) {
      return self.indexOf(value) === index
    })
  }
}
