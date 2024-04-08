import { IProduct } from "@/types";

export default [
  {
    image: "/img2.svg",
    title: "Six-piece clothing set (blouse - pants - hat and ...",
    price: 1000,
    isFavorite: true,
    sale: true,
    lotStartAt: new Date(),
  },
  {
    image: "/img1.svg",
    title: "Jeep Car, new, used for only one time",
    price: 1000,
    isFavorite: false,
    sale: false,
    lotStartAt: new Date(),
  },
] as IProduct[];
