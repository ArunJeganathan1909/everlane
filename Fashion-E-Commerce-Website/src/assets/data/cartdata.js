// cartProducts.js

import ShortsGreen from "../images/shortsgray.jpeg";
//import ShortsGreen from "../assets/shortsgray.jpeg";

const cartProducts = [
  {
    name: "Summer Dress",
    originalPrice: 49.99,
    offer: 20,
    shippingPrice: 5.99,
    color: {
      name: "Red",
      hex: "#FF0000",
      image: "https://via.placeholder.com/150/red1",
      material: {
        type: "Handcrafted",
      },
      size: "S", // Adjust as needed
    },
    orderProduct: 1,
  },
  {
    name: "Winter Coat",
    originalPrice: 99.99,
    offer: 15,
    shippingPrice: 5.99,
    color: {
      name: "Black",
      hex: "#000000",
      image: "https://via.placeholder.com/150/black1",
      material: {
        type: "Premium Quality",
      },
      size: "M", // Adjust as needed
    },
  },
  {
    name: "Yoga Pants",
    originalPrice: 29.99,
    shippingPrice: 5.99,
    color: {
      name: "Black",
      hex: "#000000",
      image: "https://via.placeholder.com/150/black1",
      material: {
        type: "Handcrafted",
      },
      size: "S", // Adjust as needed
    },
    orderProduct: 1,
  },
  {
    name: "Casual Shirt",
    originalPrice: 39.99,
    offer: 10,
    shippingPrice: 5.99,
    color: {
      name: "White",
      hex: "#FFFFFF",
      image: "https://via.placeholder.com/150/white1",
      material: {
        type: "Premium Quality",
      },
      size: "S", // Adjust as needed
    },
    orderProduct: 1,
  },
  {
    name: "Leather Boots",
    originalPrice: 89.99,
    shippingPrice: 5.99,
    color: {
      name: "Brown",
      hex: "#A52A2A",
      image: "https://via.placeholder.com/150/brown1",
      material: {
        type: "Normal Quality",
      },
      size: 36, // Adjust as needed
    },
    orderProduct: 1,
  },
  {
    name: "Denim Jacket",
    originalPrice: 59.99,
    shippingPrice: 5.99,
    color: {
      name: "Blue",
      hex: "#0000FF",
      image: "https://via.placeholder.com/150/blue1",
      material: {
        type: "Handcrafted",
      },
      size: "S", // Adjust as needed
    },
  },
  {
    name: "Maxi Skirt",
    originalPrice: 45.99,
    shippingPrice: 5.99,
    color: {
      name: "Red",
      hex: "#FF0000",
      image: "https://via.placeholder.com/150/red1",
      material: {
        type: "Normal Quality",
      },
      size: "M", // Adjust as needed
    },
    orderProduct: 1,
  },
  {
    name: "Blazer",
    originalPrice: 79.99,
    shippingPrice: 5.99,
    color: {
      name: "Black",
      hex: "#000000",
      image: "https://via.placeholder.com/150/black1",
      material: {
        type: "Handcrafted",
      },
      size: "M", // Adjust as needed
    },
    orderProduct: 1,
  },
  {
    name: "Track Pants",
    originalPrice: 34.99,
    shippingPrice: 5.99,
    color: {
      name: "Gray",
      hex: "#808080",
      image: "https://via.placeholder.com/150/gray1",
      material: {
        type: "Premium Quality",
      },
      size: "S", // Adjust as needed
    },
    orderProduct: 1,
  },
  {
    name: "Shorts",
    originalPrice: 99.99,
    offer: 20,
    shippingPrice: 5.99,
    color: {
      name: "Gray",
      hex: "#808080",
      image: ShortsGreen,
      material: {
        type: "Normal Quality",
      },
      size: "S", // Adjust as needed
    },
    orderProduct: 1,
  },
  {
    name: "Cardigan",
    originalPrice: 52.99,
    shippingPrice: 5.99,
    color: {
      name: "Beige",
      hex: "#F5F5DC",
      image: "https://via.placeholder.com/150/beige1",
      material: {
        type: "Normal Quality",
      },
      size: "S", // Adjust as needed
    },
    orderProduct: 1,
  },
];

export default cartProducts;
