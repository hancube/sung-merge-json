export default {
  merge: (obj1, obj2) => {
    function m(o1, o2) { // o1:major,o2:additional
      for (var node in o2) {
        if (typeof o2[node] === 'object' && typeof o1[node] !== 'undefined') {
          o1[node] = m(o1[node], o2[node])
        } else if (typeof o1[node] === 'undefined' || o1[node] === null){
          o1[node] = o2[node]
        }
      }
      return o1
    }
    return m(obj1, obj2)
  }
}
