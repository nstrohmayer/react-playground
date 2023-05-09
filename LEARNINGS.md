# Frontend Learnings

## Typescript

### Use unknown type instead of any

- You cannot invoke method calls / access properties of objects of types unknown
- use in combination with type guards to get typesafety

### Type Guards

- used for typechecking
- `instaceof` only working for classes
- with custom implementation also working for interfaces & objects
- see example in [PokemonDTO.ts](./src/service/PokemonDTO.ts) > `isPokemonDTO`

### Type Aliases vs. Interface

- pretty similar, up to personal preference but should be consistent for one project
- Interfaces are open to _Interface Merging_
- Type cannot be changed after it's creation
- [Typescript Handbook Reference](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

## React

### Difference between React.FC and JSX.Element

- React.FC accepts props while JSX.Element does not
- JSX.Element renders JSX elements at runtime while React.FC renders a React component function
  - JSX.Element is deprecated and should be replaced with React.JSX.Element
