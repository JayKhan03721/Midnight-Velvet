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
	id: "work",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
 {
	name: "Chapel Hill Shiraz",
	country: "AU",
	detail: "Bottle",
	price: "$2000",
 },
 {
	name: "Caten Malbee",
	country: "AU",
	detail: "Bottle",
	price: "$9500",
 },
 {
	name: "Rhino Pale Ale",
	country: "CA",
	detail: "750 ml",
	price: "$4000",
 },
 {
	name: "Irish Guinness",
	country: "IE",
	detail: "600 ml",
	price: "$4900",
 },
];

const mockTailLists = [
 {
	name: "Tropical Bloom",
	country: "US",
	detail: "Bottle",
	price: "$2000",
 },
 {
	name: "Passionfruit Mint",
	country: "US",
	detail: "Bottle",
	price: "$4900",
 },
 {
	name: "Citrus Glow",
	country: "CA",
	detail: "750 ml",
	price: "$2000",
 },
 {
	name: "Lavender Fizz",
	country: "IE",
	detail: "600 ml",
	price: "$2900",
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
 "Perfectly balanced blends",
 "Garnished to perfection",
 "Chilled to perfection",
 "Expertly shaken & stirred",
];

const goodLists = [
 "Handpicked ingredients",
 "Signature techniques",
 "Artistry behind every pour",
 "Vibrantly muddled flavors",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "237, sec. X Rob street , Georgtown, Guyana",
 contact: {
	phone: "(592) 615-1098",
	email: "hello@jkcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "10:00am – 12am" },
 { day: "Fri", time: "10:00am – 2am" },
 { day: "Sat", time: "9:00am – 3am" },
 { day: "Sun", time: "10:00am – 1am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Classic Mojito",
	image: "/images/drink1.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Crafted with tequila, lime juice, and orange liqueur, the Margarita is simple yet full of flavor. A salted rim makes it ideal for summer evenings.",
 },
 {
	id: 2,
	name: "Raspberry Mojito",
	image: "/images/drink2.png",
	title: "A Citrus-Kissed Favorite That Always Delivers",
	description:
	 "Crisp, tangy, and perfectly balanced, the Margarita combines lime, tequila, and a hint of sweetness. Shaken, frozen, or on the rocks, it never disappoints.",
 },
 {
	id: 3,
	name: "Violet Breeze",
	image: "/images/drink3.png",
	title: "Just a Few, Packed with Flavor",
	description:
	 "Tequila, lime juice, and orange liqueur come together in this classic Margarita, full of character. Top with a salted rim for the ultimate summer sip.",
 },
 {
	id: 4,
	name: "Curacao Mojito",
	image: "/images/drink4.png",
	title: "Handcrafted With Care, Poured to Perfection",
	description:
	 "From fresh ingredients to expertly poured perfection, every cocktail is designed for celebration or relaxation.",
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
