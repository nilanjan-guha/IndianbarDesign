const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "art",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Old Monk Rum",
    country: "IN",
    detail: "750 ml",
    price: "₹1200",
  },
  {
    name: "Black Dog Scotch",
    country: "IN",
    detail: "750 ml",
    price: "₹2500",
  },
  {
    name: "Amrut Fusion Whisky",
    country: "IN",
    detail: "750 ml",
    price: "₹3500",
  },
  {
    name: "Royal Challenge Whisky",
    country: "IN",
    detail: "750 ml",
    price: "₹1500",
  },
];

const mockTailLists = [
  {
    name: "Masala Shikanji",
    country: "IN",
    detail: "300 ml",
    price: "₹150",
  },
  {
    name: "Aam Panna",
    country: "IN",
    detail: "300 ml",
    price: "₹120",
  },
  {
    name: "Rose Lassi",
    country: "IN",
    detail: "400 ml",
    price: "₹180",
  },
  {
    name: "Nimbu Soda",
    country: "IN",
    detail: "250 ml",
    price: "₹100",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Blends inspired by Indian heritage",
  "Signature local ingredients",
  "Perfect serve, every time",
  "Artisanal bartending experience",
];

const goodLists = [
  "Handpicked Indian spices",
  "Traditional infusion methods",
  "Craft & culture in every sip",
  "Fresh seasonal flavors",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "Connaught Place, New Delhi, India",
  contact: {
    phone: "+91 98765 43210",
    email: "hello@indiancocktails.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "12:00pm – 12am" },
  { day: "Fri", time: "12:00pm – 2am" },
  { day: "Sat", time: "11:00am – 2am" },
  { day: "Sun", time: "11:00am – 1am" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "https://instagram.com/indiancocktails",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "https://twitter.com/indiancocktails",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "https://facebook.com/indiancocktails",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Old Monk Mojito",
    image: "/images/OldMonkdrink1.png",
    title: "Classic Rum With an Indian Twist",
    description:
      "The legendary Old Monk dark rum, muddled with mint, lime, and soda for a refreshing desi spin on the Cuban classic.",
  },
  {
    id: 2,
    name: "Black Dog Sour",
    image: "/images/BlackDogSourdrink2.png",
    title: "Smooth Scotch Meets Tangy Citrus",
    description:
      "Premium Black Dog Scotch paired with lemon juice and sugar syrup, finished with a dash of egg white for a silky texture.",
  },
  {
    id: 3,
    name: "Amrut Fusion Tonic",
    image: "/images/AmrutFusionTonicdrink3.png",
    title: "Indian Whisky at its Finest",
    description:
      "A refreshing highball featuring Amrut Fusion whisky, Indian tonic water, and a hint of ginger.",
  },
  {
    id: 4,
    name: "Royal Challenge Mule",
    image: "/images/RoyalChallengeMuledrink4.png",
    title: "A Kick of Spice and Freshness",
    description:
      "Royal Challenge whisky shaken with lime juice, topped with ginger beer and garnished with fresh mint.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
