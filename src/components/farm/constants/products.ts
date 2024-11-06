import natural1 from "@/assets/farm/icons/Icon_Apple.png";
import natural2 from "@/assets/farm/icons/blueberry 3.png";
import natural3 from "@/assets/farm/icons/icon-Strawberry.png";
import natural4 from "@/assets/farm/icons/eggplant.png";
import natural5 from "@/assets/farm/icons/cabbage.png";
import natural6 from "@/assets/farm/icons/carrot.png";

interface IProduct {
  id: number;
  name: string;
  image: any;
}

const products: IProduct[] = [
  { id: 1, name: "Apple", image: natural1 },
  { id: 2, name: "Blueberry", image: natural2 },
  { id: 3, name: "Strawberry", image: natural3 },
  { id: 4, name: "Eggplant", image: natural4 },
  { id: 5, name: "Cabbage", image: natural5 },
  { id: 6, name: "Carrot", image: natural6 },
];

export default products;
