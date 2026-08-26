---
type: std
uuid: 42c18984-9453-410e-9f28-46cc542d4d75
---

# query

Czy w języku Java jest możliwy "shadowing" - przesłonięcie nazwy zmiennej z szerszego zakresu w węższym zakresie?

# answer

W języku Java nie jest akceptowalny "shadowing".

```java
void test(String s) {
    try {
        System.out.println(s);
    } catch (Exception s) {     // NOT COMPILED
        System.out.println(s.getMessage());
    }
}
```
