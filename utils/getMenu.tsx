import { Combo } from "@/types/Combo";
import { Product } from "@/types/Product";

const sashimi: Product = {
  name: "Sashimi",
  description: "Fatias de salmão fresco.",
  image: "./products/sashimi.jpg",
};

const niguiri: Product = {
  name: "Niguiri",
  description: "Bolinhos de arroz com salmão fresco por cima.",
  image: "./products/niguiri-min.jpg",
};

const hossoKani: Product = {
  name: "Hossomaki de Kani",
  description: "Rolinho de arroz com alga e kani.",
  image: "./products/hosso-kani.png",
};

const hossoSalmao: Product = {
  name: "Hossomaki de Salmão",
  description: "Rolinho de arroz com alga e salmão fresco.",
  image: "./products/hosso-salmao.png",
};

const uramakiPate: Product = {
  name: "Uramaki de Patê de Salmão",
  description: "Rolinho de arroz com alga, gergelim torrado e patê de salmão.",
  image: "./products/uramaki-pate-min.jpeg",
};

const hotRoll: Product = {
  name: "Hot Roll",
  description:
    "Rolinho de arroz com alga crocante, recheado com salmão e coberto com tarê.",
  image: "./products/hot-roll.png",
};

const hotFiladelfia: Product = {
  name: "Hot Filadélfia",
  description:
    "Rolinho de arroz com alga crocante, recheado com salmão e coberto com cream cheese.",
  image: "./products/hot-filadelfia-min.jpeg",
};

const hotSalmao: Product = {
  name: "Hot Filadélfia Especial",
  description:
    "Rolinho de arroz com alga crocante, recheado com salmão e coberto com cream cheese e salmão fresco em cubos.",
  image: "./products/hot-filadelfia-especial-min.jpg",
};

const sushiJoe: Product = {
  name: "Sushi Joe",
  description: "Bolinho de arroz enrolado com salmão fresco e cream cheese.",
  image: "./products/sushi-joe-min.jpg",
};

const haruHot: Product = {
  name: "Haru Hot",
  description:
    "Rolinho de arroz enrolado na massa de harumaki e recheado com salmão.",
  image: "./products/haru-hot.png",
};

const uramakiSkin: Product = {
  name: "Uramaki Skin",
  description:
    "Rolinho de arroz com alga, gergelim torrado, pele de salmão grelhada e cream cheese",
  image: "./products/uramaki-skin-min.jpeg",
};

const uramakiFiladelfia: Product = {
  name: "Uramaki Filadélfia",
  description:
    "Rolinho de arroz com alga, gergelim torrado e salmão fresco e cream cheese.",
  image: "./products/uramaki-filadelfia-min.jpg",
};

const bigHot: Product = {
  name: "Big Hot",
  description: "",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjqA4VyhCzQ3IxDZkqR1eD7JAJGlN-ulhfg&usqp=CAU",
};

const combo25: Combo = [
  {
    product: sashimi,
    amount: 3,
  },
  {
    product: niguiri,
    amount: 2,
  },
  {
    product: hossoKani,
    amount: 4,
  },
  {
    product: uramakiPate,
    amount: 4,
  },
  {
    product: hotRoll,
    amount: 8,
  },
  {
    product: hossoSalmao,
    amount: 4,
  },
];

const combo50 = [
  {
    product: sashimi,
    amount: 3,
  },
  {
    product: niguiri,
    amount: 3,
  },
  {
    product: sushiJoe,
    amount: 3,
  },
  {
    product: uramakiFiladelfia,
    amount: 8,
  },
  {
    product: uramakiSkin,
    amount: 4,
  },
  {
    product: hossoKani,
    amount: 8,
  },
  {
    product: hossoSalmao,
    amount: 8,
  },
  {
    product: hotRoll,
    amount: 8,
  },
  {
    product: haruHot,
    amount: 5,
  },
];

const combo70 = [
  {
    product: sashimi,
    amount: 4,
  },
  {
    product: niguiri,
    amount: 6,
  },
  {
    product: sushiJoe,
    amount: 4,
  },
  {
    product: uramakiFiladelfia,
    amount: 10,
  },
  {
    product: uramakiSkin,
    amount: 8,
  },
  {
    product: hossoSalmao,
    amount: 8,
  },
  {
    product: haruHot,
    amount: 10,
  },
  {
    product: hossoKani,
    amount: 8,
  },
  {
    product: hotFiladelfia,
    amount: 12,
  },
];

export const getMenu = () => {
  return {
    combo25,
    combo50,
    combo70,
  };
};
