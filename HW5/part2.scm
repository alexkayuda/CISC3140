;Recursive merge of 2 sorted lists

(define ListOne '(1 3 5 6 7))   ;first sorted list of integers
(define ListTwo '(2 4 8 9))     ;second sorted list of integers

ListOne                         ;to print numbers stored in ListOne
ListTwo                         ;to print numbers stored in ListTwo

(define (mergelists L M)
   (cond ( (null? L) M)
         ( (null? M) L)
         ( (< (car L)(car M))
              (cons (car L) (mergelists (cdr L)M)))
         (else
              (cons (car M) (mergelists L (cdr M))))
   )
)

(mergelists ListOne ListTwo)    ;use the following command to call the function

;=> (1 2 3 4 5 6 7 8 9)         ;printed output