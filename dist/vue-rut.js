'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rutInputDirective = undefined;
exports.rutValidator = rutValidator;
exports.rutFilter = rutFilter;

var _rutHelpers = require('rut-helpers');

var rutHelpers = _interopRequireWildcard(_rutHelpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function rutValidator(value) {
  return rutHelpers.rutValidate(value);
}

function rutFilter(value) {
  return rutHelpers.rutFormat(value);
}

var rutInputDirective = exports.rutInputDirective = {
  bind: function bind() {
    var event = this.arg === 'live' ? 'input' : 'blur';

    this.el.addEventListener(event, function (e) {
      e.target.value = rutHelpers.rutFormat(e.target.value) || '';
    });

    this.el.addEventListener('focus', function (e) {
      e.target.value = rutHelpers.rutClean(e.target.value) || '';
    });
  }
};