# Tipos de datos

## Tipos básicos

Hay 8 tipos básicos en JavaScript.

**number** para números de cualquier tipo: enteros o de punto flotante, los enteros están limitados por ±(253-1).

**bigint** para números enteros de longitud arbitraria.

**string** para cadenas. Una cadena puede tener cero o más caracteres, no hay un tipo especial para un único carácter.

**boolean** para verdadero y falso: true/false.

**null** para valores desconocidos – un tipo independiente que tiene un solo valor nulo: null.

**undefined** para valores no asignados – un tipo independiente que tiene un único valor “indefinido”: undefined.

**object** para estructuras de datos complejas.

**symbol** para identificadores únicos.

## typeof

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
