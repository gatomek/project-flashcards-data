---
type: std
uuid: 81fdd137-9b07-4060-a76b-d71afc54e2c8
---

# query

Jakie typy nie mogą wystąpić po prawej stronie w pętli `for-each`?

# answer

Aby było to możliwe, obiekt musi implementować interfejs `Iterable`.

W pętli `for-each` nie może wystąpić po prawej stronie struktura `Map`.  
W przypadku `Map` iteruje się zwykle po `entrySet()`, `keySet()` oraz `values()`.
