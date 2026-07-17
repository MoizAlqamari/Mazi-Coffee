// Menu data. Edit items here; components render them.
// Prices are placeholders (PKR) — replace with real values.

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  note?: string; // optional small detail, e.g. origin or pairing
};

export type MenuSection = {
  id: string;
  title: string;
  blurb: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "coffee",
    title: "Coffee",
    blurb: "Single-origin and house blends, pulled with patience.",
    items: [
      {
        name: "Mazi Espresso",
        description: "A short, syrupy shot with cocoa and toasted almond.",
        price: "Rs. 350",
        note: "House blend",
      },
      {
        name: "Slow Pour V60",
        description: "Clean, floral, and bright. Brewed to order, never rushed.",
        price: "Rs. 550",
        note: "Rotating single origin",
      },
      {
        name: "Café Latte",
        description: "Silky steamed milk over a double shot. The everyday comfort.",
        price: "Rs. 500",
      },
      {
        name: "Cappuccino",
        description: "Equal parts espresso, milk, and a cloud of microfoam.",
        price: "Rs. 480",
      },
      {
        name: "Cold Brew",
        description: "Steeped eighteen hours, then cut with cold water. Smooth and low-acid.",
        price: "Rs. 450",
      },
    ],
  },
  {
    id: "signature",
    title: "Signature Drinks",
    blurb: "Recipes you will only find in this room.",
    items: [
      {
        name: "Cardamom Kulhad",
        description: "Espresso steamed with green cardamom in a clay cup. Warm and familiar.",
        price: "Rs. 520",
        note: "House favourite",
      },
      {
        name: "Rose Doodh Patti",
        description: "A nostalgic milk tea, gently spiced, finished with rose.",
        price: "Rs. 420",
      },
      {
        name: "Date & Oat Shake",
        description: "Medjool dates, oats, and cold brew blended into something close to dessert.",
        price: "Rs. 580",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    blurb: "Baked through the morning, gone by evening.",
    items: [
      {
        name: "Walnut Brownie",
        description: "Dense, fudgy, and loaded with toasted walnuts.",
        price: "Rs. 380",
      },
      {
        name: "Cinnamon Roll",
        description: "Soft spiral, slow-baked, glazed while still warm.",
        price: "Rs. 420",
      },
      {
        name: "Seasonal Cake",
        description: "One cake a day, decided by the kitchen. Ask at the counter.",
        price: "Rs. 400",
      },
    ],
  },
  {
    id: "seasonal",
    title: "Seasonal Specials",
    blurb: "Here for the weather, not the year.",
    items: [
      {
        name: "Winter Fig Latte",
        description: "Roasted fig, honey, and a double shot under a cap of foam.",
        price: "Rs. 560",
        note: "Winter only",
      },
      {
        name: "Summer Citrus Tonic",
        description: "Cold brew, tonic, and a squeeze of kinoo over ice.",
        price: "Rs. 480",
        note: "Summer only",
      },
    ],
  },
];