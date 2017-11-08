type t =
  | Nil
  | Cons of int * t

let cons x xs = match xs with
  | Nil -> Cons (x, Nil)
  | ys -> Cons (x, ys)

let () = print_endline "Hello"
