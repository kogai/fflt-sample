const empty = null;
const cons = element => nextList => ({ element, nextList })
const snoc = element => list => {
  const _element = list.element
  const _nextList = list.nextList
  list.element = element
  list.nextList = { element: _element, nextList: _nextList }
}

const list = cons(2)(cons(1)(empty))
console.log(list);
snoc(3)(list)
console.log(list); // [2, 1, 3]
