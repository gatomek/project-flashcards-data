---
type: mcq
uuid: b4181b3c-1bff-4366-9036-c8d84deb2c4b
---

# query

**R1.13.**
Given the following classes, which of the following snippets can independently be inserted
in place of INSERT IMPORTS HERE and have the code compile?  
(Choose all that apply.)

```
package aquarium;
public class Water {
    boolean salty = false;
}

package aquarium.jellies;
public class Water {
    boolean salty = true;
}

package employee;
INSERT IMPORTS HERE
public class WaterFiller {
    Water water;
}
```

## A

```
import aquarium.*;
```

## B

```
import aquarium.Water;
import aquarium.jellies.*;
```

## C

```
import aquarium.*;
import aquarium.jellies.Water;
```

## D

```
import aquarium.*;
import aquarium.jellies.*;
```

## E

```
import aquarium.Water;
import aquarium.jellies.Water;
```

## F

None of the above

# answer

## A

## B

## C
