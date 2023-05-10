export enum Role {
  SURVIVOR = "survivor",
  KILLER = "killer",
}

export const perkNumbers: Map<Role, number> = new Map<Role, number>([
  [Role.SURVIVOR, 133],
  [Role.KILLER, 120],
])

export type Perk = {
  id: number
  name: string
  role: Role
}

export function isPerk(object: unknown): object is Perk {
  return typeof object === "object" && object !== null && "name" in object && "role" in object
}
