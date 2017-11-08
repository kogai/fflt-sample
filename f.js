const empty = null;
const cons = element => nextList => ({ element, nextList })
const snoc = element => list => list === empty ?
  cons(element)(empty) :
  cons(list.element)(snoc(element)(list.nextList))

const drop_nth = n => list =>  {
  if (list === empty) {
    return empty
  }
  if (n === 0) {
    return list
  }
  return drop_nth(n - 1)(list.nextList)
};

const list_0 = empty
const list_1 = snoc(1)(list_0)
const list_2 = snoc(2)(list_1)
const list_3 = snoc(3)(list_2)

;
[ list_0, list_1, list_2, list_3 ].forEach(l => console.log(l));
