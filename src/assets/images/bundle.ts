import ChrisCringles from "./ChrisCringles.svg";
import CatherineDawe from "./CatherineDawe.svg";
import FrankieFreak from "./FrankieFreak.svg";
import SelenaGomez from "./SelenaGomez.svg";

type FriendTypes = {
  name: string;
  img: string;
};

const friendImages: FriendTypes[] = [
  {
    name: "Chris Cringles",
    img: ChrisCringles,
  },
  {
    name: "Catherine Dawe",
    img: CatherineDawe,
  },
  {
    name: "Frankie Freak",
    img: FrankieFreak,
  },
  {
    name: "Selena Gomez",
    img: SelenaGomez,
  },
];

export default friendImages;
