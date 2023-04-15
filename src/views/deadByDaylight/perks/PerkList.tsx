import {useQuery} from "@tanstack/react-query";
import {Perk} from "./Perk";
import {fetchAllPerksTyped} from "../../../service/DeadByDaylightService";

const PerkList = () => {
    const {isLoading, data, isError, error, isSuccess} = useQuery<Perk[]>(
        ["fetch-all-perks"],
        async () => {
            return await fetchAllPerksTyped()
        },
        {
            refetchOnWindowFocus: false
        }
    )

    if (isLoading) {
        return <h2>Loading all perks...</h2>
    }

    if (isSuccess) {
        return (
            <div>
                {data.map((perk: Perk) => {
                    return <p key={perk.id}>{perk.name}</p>
                })}
            </div>
        )
    } else {
        if (isError) {
            // @ts-ignore TODO fix message property unknown
            return <h2>{error?.message}</h2>
        } else {
            return <h2>Unknown error</h2>
        }
    }
}

export default PerkList;
