---
type: std
uuid: c05fb41a-277e-463d-b09a-453c76fd2ede
---

# query

What are 3 methods of getting `Locale` object?

# answer

- `Locale l1 = Locale.GERMAN` - wbudowane stałe
- `Locale l2 = Locale.of("pl", "PL")` - metoda wytwórcza
- `Locale l3 = new Locale.Builder().setLanguage("en").build()` - wzorzec budowniczy
