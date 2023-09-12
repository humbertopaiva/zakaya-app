import { Combo } from "@/types/Combo";
import { Product } from "@/types/Product";

const hotRoll: Product = {
  name: "Hot Roll",
  description: "BlaBlabLaslaslasl",
  image: "https://www.designi.com.br/images/preview/10745584.jpg",
};

const sashimi: Product = {
  name: "Sashimi",
  description: "Sashimi grande e suculento",
  image:
    "https://static.wixstatic.com/media/26d38e_7a3643275cf84abeb922eec7376b735c~mv2.png/v1/crop/x_0,y_68,w_1024,h_756/fill/w_558,h_412,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sashimi-normal.png",
};

const niguiri: Product = {
  name: "Niguiri",
  description: "Niguiri saboroso e delicoso",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjqA4VyhCzQ3IxDZkqR1eD7JAJGlN-ulhfg&usqp=CAU",
};

const combo25: Combo = [
  {
    product: hotRoll,
    amount: 8,
  },
  {
    product: sashimi,
    amount: 8,
  },
  {
    product: niguiri,
    amount: 8,
  },
];

const combo50 = [
  {
    product: hotRoll,
    amount: 8,
  },
  {
    product: sashimi,
    amount: 8,
  },
  {
    product: niguiri,
    amount: 8,
  },
];

const combo70 = [
  {
    product: hotRoll,
    amount: 8,
  },
  {
    product: sashimi,
    amount: 8,
  },
  {
    product: niguiri,
    amount: 8,
  },
];

export const getMenu = () => {
  return {
    combo25,
    combo50,
    combo70,
  };
};
