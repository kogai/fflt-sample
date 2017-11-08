type element

type t =
  | Nil
  | Cons of int * t

val empty: t

(* cons 1 [2] -> [1, 2] *)
val cons: int -> t -> unit

(* The difference between Imperative and Functional way
snoc 1 [2] -> [2, 1] *)
val snoc: int -> t -> unit
val snoc: int -> t -> t
