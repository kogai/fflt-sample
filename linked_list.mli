type t =
  | Nil
  | Cons of {
    element: int;
    next: t;
    _tail: t;
  }

val empty: t

(* cons 1 [2] -> [1, 2] *)
val cons: int -> t -> unit

(* concat [1, 2] [3, 4] -> [1, 2, 3, 4] *)
val concat: t -> t -> t
