import Azarovs_Resting_Place from '../../assets/Azarovs Resting Place.png'
import BloodLodge from '../../assets/Blood Lodge.png'
import Boneyard from '../../assets/Boneyard.jpg.png'
import CoalTower from '../../assets/Coal Tower.png'
import DeadDawgSaloon from '../../assets/Dead Dawg Saloon.png'
import DisturbedWard from '../../assets/Disturbed Ward.png'
import FamilyResidence from '../../assets/Family Residence.png'
import FatherCampbellsChapel from '../../assets/Father Campbells Chapel.png'
import FracturedCowshed from '../../assets/Fractured Cowshed.png'
import GardenofJoy from '../../assets/Garden of Joy.png'
import GasHeaven from '../../assets/Gas Heaven.png'
import GideonMeatplant from '../../assets/Gideon Meatplant.png'
import GrimPantry from '../../assets/Grim Pantry.png'
import GroaningStorehouse from '../../assets/Groaning Storehouse.png'
import Haddonfield from '../../assets/Haddonfield.png'
import IronworksOfMisery from '../../assets/Ironworks Of Misery.png'
import MountOrmondResort from '../../assets/Mount Ormond Resort.png'
import PaleRose from '../../assets/Pale Rose.png'
import RancidAbbatoir from '../../assets/Rancid Abbatoir.png'
import RottenFields from '../../assets/Rotten Fields.png'
import SanctumOfWrath from '../../assets/Sanctum Of Wrath.png'
import ShelterWoods from '../../assets/Shelter Woods.png'
import SuffocationPit from '../../assets/Suffocation Pit.png'
import TempleOfPurgation from '../../assets/Temple Of Purgation.png'
import TheThompsonHouse from '../../assets/The Thompson House.png'
import TormentCreek from '../../assets/Torment Creek.png'
import TreatmentTheater from '../../assets/Treatment Theater (Lerys).png'
import Wreckers from '../../assets/Wreckers.png'
import WretchedShop from '../../assets/Wretched Shop.png'

export type DbdMap = {
    name: string
    imageName: string
}

export const availableMaps: Array<DbdMap> = [
    {name: "Azarovs Resting Place", imageName: Azarovs_Resting_Place},
    {name: "Blood Lodge", imageName: BloodLodge},
    {name: "Boneyard.jpg", imageName: Boneyard},
    {name: "Coal Tower", imageName: CoalTower},
    {name: "Dead Dawg Saloon", imageName: DeadDawgSaloon},
    {name: "Disturbed Ward", imageName: DisturbedWard},
    {name: "Family Residence", imageName: FamilyResidence},
    {name: "Father Campbells Chapel", imageName: FatherCampbellsChapel},
    {name: "Fractured Cowshed", imageName: FracturedCowshed},
    {name: "Garden_of_Joy", imageName: GardenofJoy},
    {name: "Gas Heaven", imageName: GasHeaven},
    {name: "Gideon Meatplant", imageName: GideonMeatplant},
    {name: "Grim Pantry", imageName: GrimPantry},
    {name: "Groaning Storehouse", imageName: GroaningStorehouse},
    {name: "Haddonfield", imageName: Haddonfield},
    {name: "Ironworks Of Misery", imageName: IronworksOfMisery},
    {name: "Mount Ormond Resort", imageName: MountOrmondResort},
    {name: "Pale Rose", imageName: PaleRose},
    {name: "Rancid Abbatoir", imageName: RancidAbbatoir},
    {name: "Rotten Fields", imageName: RottenFields},
    {name: "Sanctum Of Wrath", imageName: SanctumOfWrath},
    {name: "Shelter Woods", imageName: ShelterWoods},
    {name: "Suffocation Pit", imageName: SuffocationPit},
    {name: "Temple Of Purgation", imageName: TempleOfPurgation},
    {name: "The Thompson House", imageName: TheThompsonHouse},
    {name: "Torment Creek", imageName: TormentCreek},
    {name: "Treatment Theater (Lerys)", imageName: TreatmentTheater},
    {name: "Wreckers", imageName: Wreckers},
    {name: "Wretched Shop", imageName: WretchedShop},
]
