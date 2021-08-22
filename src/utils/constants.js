import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Our mission is to create Value for our customers through Reliability and Flexibility. We want our customers to experience the warmth and comfort through Respect and Trust.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to be a leading international furniture manufacturer offering innovative and superior quality products.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "New designs have been added to the unique collection of hand crafted English oak, burr oak, and ash country furniture with elm, walnut, forged steel and glass added to the mix of materials that the company works with.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
