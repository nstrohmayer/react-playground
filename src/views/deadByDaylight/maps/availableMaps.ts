/* eslint-disable */

import AzarovsRestingPlace from "../../../assets/AZAROVS RESTING PLACE.png"
import BloodLodge from "../../../assets/BLOOD LODGE.png"
import CoalTower from "../../../assets/COAL TOWER.png"
import DeadDawgSaloon from "../../../assets/DEAD DAWG SALOON.png"
import DisturbedWard from "../../../assets/DISTURBED WARD.png"
import EyrieOfCrows from "../../../assets/EYRIE OF CROWS.png"
import FamilyResidence from "../../../assets/FAMILY RESIDENCE.png"
import FatherCampbellsChapel from "../../../assets/FATHER CAMPBELLS CHAPEL.png"
import FracturedCowshed from "../../../assets/FRACTURED COWSHED.png"
import GardenOfJoy from "../../../assets/GARDEN OF JOY.png"
import GasHeaven from "../../../assets/GAS HEAVEN.png"
import GrimPantry from "../../../assets/GRIM PANTRY.png"
import GroaningStorehouse from "../../../assets/GROANING STOREHOUSE.png"
import Haddonfield from "../../../assets/HADDONFIELD.png"
import IronworksOfMisery from "../../../assets/IRONWORKS OF MISERY.png"
import Lerys from "../../../assets/LERYS.png"
import MidwichBottom from "../../../assets/MIDWICH BOTTOM.png"
import MidwichTop from "../../../assets/MIDWICH TOP.png"
import MidwichGif from "../../../assets/midwich-map.gif"
import MothersDwelling from "../../../assets/MOTHERS DWELLING.png"
import MoundOrmondResort from "../../../assets/ORMOND.png"
import PaleRose from "../../../assets/PALE ROSE.png"
import Preschool1 from "../../../assets/Preschool1.png"
import Preschool2 from "../../../assets/Preschool2.png"
import Preschool3 from "../../../assets/Preschool3.png"
import Preschool4 from "../../../assets/Preschool4.png"
import Preschool5 from "../../../assets/Preschool5.png"
import RancidAbbatooir from "../../../assets/RANCID ABBATOOIR.png"
import RottenFields from "../../../assets/ROTTEN FIELDS.png"
import RpdEast from "../../../assets/RPD_EAST.png"
import RpdWest from "../../../assets/RPD_WEST.png"
import SanctumOfWrath from "../../../assets/SANCTUM OF WRATH.png"
import ShatteredSquare from "../../../assets/SHATTERED SQUARE.png"
import ShelterWoods from "../../../assets/SHELTER WOODS.png"
import SuffocationPit from "../../../assets/SUFFOCATION PIT.png"
import TempleOfPurgation from "../../../assets/TEMPLE OF PURGATION.png"
import TheGame from "../../../assets/THE GAME.png"
import TompsonHouse from "../../../assets/TOMPSON HOUSE.png"
import TormentCreek from "../../../assets/TORMENT CREEK.png"
import Wreckers from "../../../assets/WRECKERS.png"
import WretchedShop from "../../../assets/WRETCHED SHOP.png"

export type DbdMap = {
  name: string
  imageName: string
  realmName: string | undefined
}
export const availableMaps: DbdMap[] = [
  // TODO enter realmNames
  { name: "Azarovs Resting Place", imageName: AzarovsRestingPlace, realmName: "" },
  { name: "Blood Lodge", imageName: BloodLodge, realmName: "" },
  { name: "Coal Tower", imageName: CoalTower, realmName: "" },
  { name: "Dead Dawg Saloon", imageName: DeadDawgSaloon, realmName: "" },
  { name: "Disturbed Ward", imageName: DisturbedWard, realmName: "" },
  { name: "Eyrie Of Crows", imageName: EyrieOfCrows, realmName: "" },
  { name: "Family Residence", imageName: FamilyResidence, realmName: "" },
  { name: "Father Campbells Chapel", imageName: FatherCampbellsChapel, realmName: "" },
  { name: "Fractured Cowshed", imageName: FracturedCowshed, realmName: "" },
  { name: "Garden Of Joy", imageName: GardenOfJoy, realmName: "" },
  { name: "Gas Heaven", imageName: GasHeaven, realmName: "" },
  { name: "Grim Pantry", imageName: GrimPantry, realmName: "" },
  { name: "Groaning Storehouse", imageName: GroaningStorehouse, realmName: "" },
  { name: "Haddonfield", imageName: Haddonfield, realmName: "" },
  { name: "Ironworks Of Misery", imageName: IronworksOfMisery, realmName: "" },
  { name: "Lery's Memorial Institute", imageName: Lerys, realmName: "" },
  { name: "Midwich Bottom", imageName: MidwichBottom, realmName: "" },
  { name: "Midwich Top", imageName: MidwichTop, realmName: "" },
  { name: "Midwich-map", imageName: MidwichGif, realmName: "" },
  { name: "Mothers Dwelling", imageName: MothersDwelling, realmName: "" },
  { name: "Mount Ormond Resort", imageName: MoundOrmondResort, realmName: undefined },
  { name: "Pale Rose", imageName: PaleRose, realmName: "" },
  { name: "Preschool 1", imageName: Preschool1, realmName: "" },
  { name: "Preschool 2", imageName: Preschool2, realmName: "" },
  { name: "Preschool 3", imageName: Preschool3, realmName: "" },
  { name: "Preschool 4", imageName: Preschool4, realmName: "" },
  { name: "Preschool 5", imageName: Preschool5, realmName: "" },
  { name: "Rancid Abbatooir", imageName: RancidAbbatooir, realmName: "" },
  { name: "Rotten Fields", imageName: RottenFields, realmName: "" },
  { name: "RPD East", imageName: RpdEast, realmName: "" },
  { name: "RPD West", imageName: RpdWest, realmName: "" },
  { name: "Sanctum Of Wrath", imageName: SanctumOfWrath, realmName: "" },
  { name: "Shattered Square", imageName: ShatteredSquare, realmName: "" },
  { name: "Shelter Woods", imageName: ShelterWoods, realmName: "" },
  { name: "Suffocation Pit", imageName: SuffocationPit, realmName: "" },
  { name: "Temple Of Purgation", imageName: TempleOfPurgation, realmName: "" },
  { name: "The Game", imageName: TheGame, realmName: "" },
  { name: "Tompson House", imageName: TompsonHouse, realmName: "" },
  { name: "Torment Creek", imageName: TormentCreek, realmName: "" },
  { name: "Wreckers", imageName: Wreckers, realmName: "" },
  { name: "Wretched Shop", imageName: WretchedShop, realmName: "" },
]
