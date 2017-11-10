const empty = null;
const cons = element => next => ({ element, next, _tail: next === empty ? empty : next.next })
const concat = xs => ys => {
  if (xs === empty) return ys
  xs._tail.next = ys
  xs._tail = ys._tail
  return xs
}

const list_a = cons(1)(cons(2)(cons(3)(empty)))
const list_b = cons(4)(cons(5)(cons(6)(empty)))

console.log(list_a); // [1, 2, 3]
console.log(list_b); // [4, 5, 6]

console.log(require("util").inspect(
  concat(list_a)(list_b),  // [1, 2, 3, 4, 5, 6]
  { showHidden: true, depth: null }
));
