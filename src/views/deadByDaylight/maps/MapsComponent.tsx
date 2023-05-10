import React, { useState } from "react"
import { availableMaps, type DbdMap } from "./availableMaps"
import { MenuItem, Select, type SelectChangeEvent } from "@mui/material"

const initialMap = availableMaps[0].imageName

const MapsComponent: React.FC = () => {
  const [selectedMap, setSelectedMap] = useState<string | undefined>(initialMap)

  function handleMapChanged(event: SelectChangeEvent<string>): void {
    setSelectedMap(event.target.value)
  }

  const availableMapEntries = availableMaps.map((value: DbdMap) => (
    <MenuItem key={value.name} value={value.imageName}>
      {value.name}
    </MenuItem>
  ))

  return (
    <div>
      <Select value={selectedMap} onChange={handleMapChanged}>
        {availableMapEntries}
      </Select>
      <div>
        <img alt={"DBD Map"} src={selectedMap} height={"1000px"} />
      </div>
    </div>
  )
}

export default MapsComponent
