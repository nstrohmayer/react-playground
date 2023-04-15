export type Perk = {
  id: number
  name: string
}

export function isPerk(object: unknown): object is Perk {
  return typeof object === "object" && object !== null && "name" in object
}
