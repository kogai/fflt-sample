type element

type 'a t =
  | Nil
  | Cons of 'a * 'a t

val empty: element t
(* The difference between Imperative and Functional way *)
val cons: element -> element t -> unit
val cons: element -> element t -> element t

val drop_nth: int -> element t -> unit
val drop_nth: int -> element t -> element t
