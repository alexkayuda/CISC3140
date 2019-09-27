;function checks if provided string is a palindrome

;receives a string as a parameter
;creates local variable chars and creates a list of characters
;checks if that list is equals to the reverse of the same list of characters
;return "#t" if it is a palindrome; "#f" otherwise.

(define (palindrome s)
  ( let ( (chars (string->list s) ) )       
    (equal? chars (reverse chars) )
  )
)

(palindrome "rotator")          ;use the following command to call the function
;=> #t                          ;printed output

(palindrome "Rotator")          ;use the following command to call the function
;=> #f                          ;printed output