import { useQuery } from "@tanstack/react-query"
import React, { useState } from "react"
import { type Perk, Role } from "./Perk"
import { fetchAllPerksTyped, getLocation } from "../../../service/DeadByDaylightService"
import { Switch } from "@mui/material"

const PerkList: () => React.JSX.Element = () => {
  const [selectedRole, setSelectedRole] = useState(Role.SURVIVOR)
  const { isLoading, data, isError, error, isSuccess } = useQuery<Perk[]>(
    ["fetch-all-perks"],
    async () => {
      return await fetchAllPerksTyped()
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  )

  function handleSelectedRoleChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    setSelectedRole(event.target.checked ? Role.SURVIVOR : Role.KILLER)
  }

  if (isLoading) {
    return <h2>Loading all perks...</h2>
  }

  if (isSuccess) {
    return (
      <div>
        <div>
          Killer
          <Switch checked={selectedRole === Role.SURVIVOR} onChange={handleSelectedRoleChanged} />
          Survivor
        </div>
        {data.map((perk: Perk) => {
          if (perk.role !== selectedRole) {
            return undefined
          }
          return (
            <div key={perk.id}>
              <p>{`${perk.name} (${getLocation(perk)})`}</p>
            </div>
          )
        })}
      </div>
    )
  } else {
    if (isError) {
      // @ts-expect-error TODO fix message property unknown
      return <h2>{error?.message}</h2>
    } else {
      return <h2>Unknown error</h2>
    }
  }
}

export default PerkList
