const empty = {};

const cons = element => list => {
  const _list = list
  if (list === empty) {
    list.element = element
    list.nextList = {}
  } else {
    const { nextList } = list
    list = { element, nextList }
  }
} 

const snoc = element => list => {
  // const _element = list.element
  // const _nextList = list.nextList
  // list.element = element
  // list.nextList = { element: _element, nextList: _nextList } 
}

let list = empty
console.log(list);
cons(1)(list);
console.log(list);
// cons(2)(list);
// console.log(list);

// const list_1 = cons(1)(list_0)
// const list_2 = cons(2)(list_1)
// const list_3 = cons(3)(list_2)

// ;
// [ list_0, list_1, list_2, list_3 ].forEach(l => console.log(l));
