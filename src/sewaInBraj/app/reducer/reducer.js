import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'profile',
  initialState: {
    data: [
  {
    "id": 1,
    "name": "Krishna dolls",
    "price": "₹1100",
    "description": "Standard doll ₹1100, with extra dress ₹200 and accessories ₹100",
    "img": "",
    "description2": "Handcrafted Krishna dolls designed for festive and spiritual decor.",
    "moreInfo": `
        Length: "47 cm / 18.5 inches",
        Breadth: "27 cm / 10.5 inches",
        Length While Sitting: "31 cm / 12 inches",
      Market Price: "₹1500",
    `
  },
  {
    "id": 2,
    "name": "Radharani dolls",
    "price": " ₹1100",
    "description": "Single ₹1100, Radha Krishna pair ₹2000, Krishna Balram pair ₹2000",
    "img": "",
    "description2": "Delicately made dolls symbolizing devotion and divine love.",
    "moreInfo": {}
  },
  {
    "id": 3,
    "name": "Jagannath Baldev Subhadra Mayia dolls",
    "price": "₹3000",
    "description": "Set of 3 with sofa set ₹500",
    "img": "",
    "description2": "Complete deity set perfect for home altars and temple use.",
    "moreInfo": {}
  },
  {
    "id": 4,
    "name": "Jute and cloth bangles",
    "price": "₹120",
    "description": "Available in ₹50, ₹70, ₹100 as per selected material and size",
    "img": "",
    "description2": "Eco-friendly handcrafted bangles suitable for all occasions.",
    "moreInfo": `
      Sizes: ["2'2"/ "2'4"/ "2'6"],
      Material: "Plastic bangles covered with jute and added ghungroo",
      Available: ["2'2", "2'4"],
      Market Price: "₹200",
    `
  },
  {
    "id": 5,
    "name": "Prandis",
    "price": "₹350",
    "description": "Traditional prandi accessory",
    "img": "",
    "description2": "Elegant hair accessory used in Indian traditional attire.",
    "moreInfo": {}
  },
  {
    "id": 6,
    "name": "Hair long accessories",
    "price": "₹100",
    "description": "Hair extension accessory",
    "img": "",
    "description2": "Quality hair extensions for enhancing traditional looks.",
    "moreInfo": {}
  },
  {
    "id": 7,
    "name": "Bharat Natyam prandi",
    "price": "₹130",
    "description": "Classical dance prandi",
    "img": "",
    "description2": "Accessory specifically designed for Bharat Natyam dancers.",
    "moreInfo": {}
  },
  {
    "id": 8,
    "name": "Flower bangles",
    "price": "₹50",
    "description": "Decorative floral bangles",
    "img": "",
    "description2": "Beautiful floral-themed bangles for festive wear.",
    "moreInfo": {}
  },
  {
    "id": 9,
    "name": "Flower jewelry set",
    "price": "₹300",
    "description": "Necklace with earrings and maang tikka",
    "img": "",
    "description2": "Coordinated floral jewelry set for special occasions.",
    "moreInfo": {}
  },
  {
    "id": 10,
    "name": "Flower bracelet, anklet and belt",
    "price": "₹70 - ₹100",
    "description": "Bracelet ₹100, anklet ₹100, belt ₹70",
    "img": "",
    "description2": "Matching floral accessories for complete adornment.",
    "moreInfo": {}
  },
  {
    "id": 11,
    "name": "Ribbon mala",
    "price": "₹10 - ₹70",
    "description": "Available in ₹10, ₹20, ₹30, ₹50, ₹70",
    "img": "",
    "description2": "Colorful ribbon malas for various uses.",
    "moreInfo": {}
  },
  {
    "id": 12,
    "name": "Plastic flower garland",
    "price": "₹150",
    "description": "With Radha naam",
    "img": "",
    "description2": "Durable plastic garlands featuring sacred inscriptions.",
    "moreInfo": {}
  },
  {
    "id": 13,
    "name": "Chanting recorder",
    "price": "₹120",
    "description": "Electronic chanting device",
    "img": "",
    "description2": "Device to aid in chanting and spiritual practice.",
    "moreInfo": {}
  },
  {
    "id": 14,
    "name": "God's images on curtains",
    "price": "₹250 - ₹400",
    "description": "Available in 2 sizes: ₹250 and ₹400",
    "img": "",
    "description2": "Spiritual curtains featuring divine imagery.",
    "moreInfo": {}
  },
  {
    "id": 15,
    "name": "Cow dung diyas",
    "price": "₹10",
    "description": "Eco-friendly lamps",
    "img": "",
    "description2": "Traditional cow dung lamps used in religious ceremonies.",
    "moreInfo": {}
  },
  {
    "id": 16,
    "name": "Cow dung pot",
    "price": "₹50",
    "description": "For Tulsi plant",
    "img": "",
    "description2": "Natural cow dung pots suitable for Tulsi plants.",
    "moreInfo": {}
  },
  {
    "id": 17,
    "name": "Cow dung cup with havan samagri",
    "price": "₹20",
    "description": "Cup filled with havan materials",
    "img": "",
    "description2": "Cup containing materials essential for havan rituals.",
    "moreInfo": {}
  },
  {
    "id": 18,
    "name": "Neem datun",
    "price": "₹50",
    "description": "Pack of 20",
    "img": "",
    "description2": "Natural neem toothsticks for oral hygiene.",
    "moreInfo": {}
  },
  {
    "id": 19,
    "name": "Handmade Tulsi mala",
    "price": "₹20",
    "description": "Original hand made Tulsi mala",
    "img": "",
    "description2": "Handcrafted Tulsi bead malas for spiritual chanting.",
    "moreInfo": {}
  },
  {
    "id": 20,
    "name": "Pearl/plastic earrings",
    "price": "₹20 - ₹50",
    "description": "Available in ₹20, ₹30, ₹50",
    "img": "",
    "description2": "Elegant pearl and plastic earrings in assorted prices.",
    "moreInfo": {}
  },
  {
    "id": 21,
    "name": "Pram for Krishna dolls",
    "price": "₹700",
    "description": "Toy pram for dolls",
    "img": "",
    "description2": "Miniature prams designed specifically for Krishna dolls.",
    "moreInfo": {}
  },
  {
    "id": 22,
    "name": "Cot for dolls",
    "price": "₹500 - ₹900",
    "description": "Single doll ₹500, double cot ₹900",
    "img": "",
    "description2": "Comfortable cots available for one or two dolls.",
    "moreInfo": {}
  },
  {
    "id": 23,
    "name": "Steel utensils for bhoga",
    "price": "₹300",
    "description": "Utensils for offering food",
    "img": "",
    "description2": "Durable steel utensils used in bhoga preparations.",
    "moreInfo": {}
  },
  {
    "id": 24,
    "name": "Pittal Arti thali",
    "price": "₹1000",
    "description": "Brass thali for worship",
    "img": "",
    "description2": "Traditional brass plate used for arti rituals.",
    "moreInfo": {}
  },
  {
    "id": 25,
    "name": "Handmade lufa",
    "price": "₹20",
    "description": "Hygienic bathing sponge",
    "img": "",
    "description2": "Natural and hygienic handmade luffa sponge for bathing.",
    "moreInfo": {}
  },
  {
    "id": 26,
    "name": "Chandan tilak",
    "price": "₹15",
    "description": "Sandalwood paste for forehead",
    "img": "",
    "description2": "Pure sandalwood paste applied as a spiritual tilak.",
    "moreInfo": {}
  },
  {
    "id": 27,
    "name": "Laddu Gopal dresses",
    "price": "₹200+",
    "description": "Starting from ₹200",
    "img": "",
    "description2": "Handmade dresses specifically for Laddu Gopal idols.",
    "moreInfo": {}
  },
  {
    "id": 28,
    "name": "Peacock feathers",
    "price": "₹10 each",
    "description": "Natural peacock feather",
    "img": "",
    "description2": "Authentic peacock feathers used in decoration and worship.",
    "moreInfo": {}
  },
  {
    "id": 29,
    "name": "Chammar for arti",
    "price": "₹20 - ₹50+",
    "description": "Sizes available from ₹20 to ₹50 onwards",
    "img": "",
    "description2": "Traditional chammar fans used during arti ceremonies.",
    "moreInfo": {}
  },
  {
    "id": 30,
    "name": "Jagannath plastic set",
    "price": "₹500",
    "description": "Plastic deity set",
    "img": "",
    "description2": "Plastic set featuring Jagannath and related deities.",
    "moreInfo": {}
  },
  {
    "id": 31,
    "name": "Bridal celebration accessories",
    "price": "Varies",
    "description": "Yellow and green accessories; price depends on number of orders",
    "img": "",
    "description2": "Customizable bridal celebration sets tailored to order size.",
    "moreInfo": {}
  },
  {
    "id": 32,
    "name": "Shankh (Conchshell)",
    "price": "Varies",
    "description": "Spiritual conchshell for rituals",
    "img": "",
    "description2": "Sacred conchshells used in Hindu worship and ceremonies.",
    "moreInfo": {}
  },
  {
    "id": 33,
    "name": "Laddu Gopal pagri",
    "price": "Varies",
    "description": "Headwear for Laddu Gopal",
    "img": "",
    "description2": "Traditional pagris designed for Laddu Gopal idols.",
    "moreInfo": {}
  },
  {
    "id": 34,
    "name": "Kartaal",
    "price": "Varies",
    "description": "Hand cymbals for bhajans",
    "img": "",
    "description2": "Musical hand cymbals used during devotional singing.",
    "moreInfo": {}
  },
  {
    "id": 35,
    "name": "Mridanga",
    "price": "Varies",
    "description": "Traditional percussion instrument",
    "img": "",
    "description2": "Classic mridanga drum for accompanying bhajans and kirtans.",
    "moreInfo": {}
  },
  {
    "id": 36,
    "name": "Harmonium",
    "price": "Varies",
    "description": "Keyboard instrument for devotional music",
    "img": "",
    "description2": "Portable harmonium ideal for spiritual gatherings.",
    "moreInfo": {}
  },
  {
    "id": 37,
    "name": "Dhoti kurta",
    "price": "Varies",
    "description": "Traditional attire",
    "img": "",
    "description2": "Classic Indian traditional dress for men.",
    "moreInfo": {}
  },
  {
    "id": 38,
    "name": "Handmade painted Gopi dresses",
    "price": "₹1500",
    "description": "Hand-painted devotional attire",
    "img": "",
    "description2": "Exquisitely hand-painted dresses for Gopi idols.",
    "moreInfo": {}
  },
  {
    "id": 39,
    "name": "Handmade painted bead bags",
    "price": "₹200",
    "description": "For japa chanting",
    "img": "",
    "description2": "Handcrafted bead bags designed to hold prayer beads.",
    "moreInfo": {}
  },
  {
    "id": 40,
    "name": "Wicks with tulsi sticks",
    "price": "₹70",
    "description": "Pack of 50",
    "img": "",
    "description2": "Natural wicks bundled with tulsi sticks for havan rituals.",
    "moreInfo": {}
  },
  {
    "id": 41,
    "name": "Pure bilona ghee",
    "price": "₹1200 per kg",
    "description": "Traditional handmade ghee",
    "img": "",
    "description2": "Authentic bilona ghee prepared using traditional methods.",
    "moreInfo": {}
  },
  {
    "id": 42,
    "name": "Handmade badam oil",
    "price": "N/A",
    "description": "Price not mentioned",
    "img": "",
    "description2": "Natural almond oil, handmade for wellness purposes.",
    "moreInfo": {}
  },
  {
    "id": 43,
    "name": "Srimad Bhagavad Gita",
    "price": "₹250 - ₹350",
    "description": "₹250 for Hindi, ₹350 for English edition",
    "img": "",
    "description2": "Sacred scripture available in multiple languages.",
    "moreInfo": {}
  },
  {
    "id": 44,
    "name": "Spiritual small books",
    "price": "₹10 each",
    "description": "Small books for spiritual learning",
    "img": "",
    "description2": "Compact spiritual literature for daily reading.",
    "moreInfo": {}
  },
  {
    "id": 45,
    "name": "All-in-one book for beginners",
    "price": "₹150",
    "description": "Introductory spiritual guidebook",
    "img": "",
    "description2": "Comprehensive beginner's guide to spirituality.",
    "moreInfo": {}
  }
]
  },
  reducers: {
   
  },
});

export default usersSlice.reducer;