import {isPerk, Perk} from "../views/deadByDaylight/perks/Perk";
import axios from "axios";

export async function fetchAllPerksTyped(): Promise<Perk[]> { // TODO pull this function into an service
    const data = await axios.get("http://localhost:3000/api/perks") // TODO fix CORS issue - this is just a local fix

    const mappedPerks = Object.entries(data.data)
        .map((perk: [string, unknown], index) => {
            if (isPerk(perk[1])) {
                return {
                    id: index,
                    name: perk[1].name
                } satisfies Perk
            } else {
                return undefined
            }
        }).filter((perk) => perk !== undefined)

    return mappedPerks as Perk[];
}
