'use strict';

module.exports = function (obj1, obj2) {
    function m(o1, o2) { // o1:params,o2:default_values
      for (var node in o2) {
        if (toString.call(o2[node]) === '[object Object]' && typeof o1[node] !== 'undefined') {
          o1[node] = m(o1[node], o2[node])
        }else if (toString.call(o2[node]) === '[object Array]' && typeof o1[node] !== 'undefined') {
          for (var i in o1[node]) {
            o1[node][i] = m(o1[node][i], o2[node][0])
          }
        } else if (typeof o1[node] === 'undefined' || o1[node] === null){
          o1[node] = o2[node]
        }
      }
      return o1
    }
    return m(obj1, obj2)
};