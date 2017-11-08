const empty = null;
const cons = element => nextList => ({ element, nextList })
const snoc = element => list => list === empty ?
  cons(element)(empty) :
  cons(list.element)(snoc(element)(list.nextList))

const list = cons(2)(cons(1)(empty))
console.log(list);
console.log(snoc(3)(list)); // [2, 1, 3]
