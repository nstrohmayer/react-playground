import { isPerk, type Perk, perkNumbers, Role } from "../views/deadByDaylight/perks/Perk"
import axios from "axios"

export async function fetchAllPerksTyped(): Promise<Perk[]> {
  // TODO pull this function into an service
  const data = await axios.get("http://localhost:3000/api/perks", {
    headers: {
      "Accept-Language": "en-US, en;",
    },
  }) // TODO fix CORS issue - this is just a local fix

  let survivorPerkCounter = 0
  let killerPerkCounter = 0
  // eslint-disable-next-line
  // @ts-ignore
  const mappedPerks = Object.entries(data.data)
    // eslint-disable-next-line
    .sort((a, b) => {
      const x = a[1]
      const y = b[1]
      if (isPerk(x)) {
        if (isPerk(y)) {
          return (x.name ?? "") < (y.name ?? "") ? -1 : 1
        }
      }

      return -1
    }) // TODO fix sorting & more sophisticated solution for ordering + finding ID
    .map((perk: [string, unknown]) => {
      if (isPerk(perk[1])) {
        const perkCounter = perk[1].role === Role.SURVIVOR ? survivorPerkCounter++ : killerPerkCounter++

        return {
          id: perkCounter,
          name: perk[1].name,
          role: perk[1].role,
        } satisfies Perk
      } else {
        return undefined
      }
    })
    .filter((perk) => perk !== undefined)

  return mappedPerks as Perk[]
}

class InvalidPerkException extends Error {}

declare global {
  interface Number {
    // eslint-disable-next-line
    toInt(): string
  }
}

// eslint-disable-next-line
Number.prototype.toInt = function (): string {
  return Math.floor(this.valueOf()).toFixed(0)
}

export function getLocation(perk: Perk): string {
  const numberOfPerks = perkNumbers.get(perk.role)

  if (numberOfPerks === undefined) {
    throw new InvalidPerkException()
  }

  const page = perk.id / 15 + 1
  const numberOfPerkOnPage = perk.id % 15
  const row = numberOfPerkOnPage / 5 + 1
  const column = (numberOfPerkOnPage % 5) + 1

  return `${page.toInt()} - ${row.toInt()} - ${column.toInt()}`
}
