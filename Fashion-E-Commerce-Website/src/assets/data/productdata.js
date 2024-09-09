import ShortsGreen from "../images/shortsgray.jpeg";
import ShortsBlack from "../images/shortsblue.jpeg";

const products = [
  {
    name: "Summer Dress",
    originalPrice: 49.99,
    offer: 20,
    shippingDetails: "Free shipping on orders over $50.",
    shippingPrice: 5.99,
    colors: [
      {
        name: "Red",
        hex: "#FF0000",
        images: [
          "https://via.placeholder.com/150/red1",
          "https://via.placeholder.com/150/red2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              S: 5,
              M: 3,
              L: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              S: 3,
              M: 2,
              L: 1,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              S: 2,
              M: 1,
              L: 1,
            },
          },
        ],
      },
      {
        name: "Blue",
        hex: "#0000FF",
        images: [
          "https://via.placeholder.com/150/blue1",
          "https://via.placeholder.com/150/blue2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              S: 5,
              M: 3,
              L: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              S: 4,
              M: 3,
              L: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              S: 2,
              M: 2,
              L: 1,
            },
          },
        ],
      },
      {
        name: "Green",
        hex: "#00FF00",
        images: [
          "https://via.placeholder.com/150/green1",
          "https://via.placeholder.com/150/green2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              S: 5,
              M: 3,
              L: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              S: 4,
              M: 3,
              L: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              S: 3,
              M: 2,
              L: 1,
            },
          },
        ],
      },
    ],
    categories: ["Women", "Shirts", "Casual collection"],
    sizes: ["S", "M", "L"],
  },
  {
    name: "Winter Coat",
    originalPrice: 99.99,
    offer: 15,
    shippingDetails: "Free shipping on orders over $50.",
    shippingPrice: 5.99,
    colors: [
      {
        name: "Black",
        hex: "#000000",
        images: [
          "https://via.placeholder.com/150/black1",
          "https://via.placeholder.com/150/black2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              M: 3,
              L: 2,
              XL: 1,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              M: 3,
              L: 2,
              XL: 1,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              M: 3,
              L: 2,
              XL: 1,
            },
          },
        ],
      },
      {
        name: "Gray",
        hex: "#808080",
        images: [
          "https://via.placeholder.com/150/gray1",
          "https://via.placeholder.com/150/gray2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              M: 3,
              L: 2,
              XL: 1,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              M: 3,
              L: 2,
              XL: 1,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              M: 3,
              L: 2,
              XL: 1,
            },
          },
        ],
      },
    ],
    categories: ["Women", "Formal collection", "Official"],
    sizes: ["M", "L", "XL"],
  },
  {
    name: "Yoga Pants",
    originalPrice: 29.99,
    shippingDetails: "Free shipping on orders over $50.",
    shippingPrice: 5.99,
    colors: [
      {
        name: "Black",
        hex: "#000000",
        images: [
          "https://via.placeholder.com/150/black1",
          "https://via.placeholder.com/150/black2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              S: 3,
              M: 2,
              L: 1,
              XL: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              S: 3,
              M: 2,
              L: 1,
              XL: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              S: 3,
              M: 2,
              L: 1,
              XL: 2,
            },
          },
        ],
      },
      {
        name: "Purple",
        hex: "#800080",
        images: [
          "https://via.placeholder.com/150/purple1",
          "https://via.placeholder.com/150/purple2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              S: 3,
              M: 2,
              L: 1,
              XL: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              S: 3,
              M: 2,
              L: 1,
              XL: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              S: 3,
              M: 2,
              L: 1,
              XL: 2,
            },
          },
        ],
      },
    ],
    categories: ["Women", "Casual collection", "Outdoor collection"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Casual Shirt",
    originalPrice: 39.99,
    offer: 10,
    shippingDetails: "Free shipping on orders over $50.",
    shippingPrice: 5.99,
    colors: [
      {
        name: "White",
        hex: "#FFFFFF",
        images: [
          "https://via.placeholder.com/150/white1",
          "https://via.placeholder.com/150/white2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              S: 3,
              M: 2,
              L: 1,
              XL: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              S: 3,
              M: 2,
              L: 1,
              XL: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              S: 3,
              M: 2,
              L: 1,
              XL: 2,
            },
          },
        ],
      },
      {
        name: "Blue",
        hex: "#0000FF",
        images: [
          "https://via.placeholder.com/150/blue1",
          "https://via.placeholder.com/150/blue2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              S: 3,
              M: 2,
              L: 1,
              XL: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              S: 3,
              M: 2,
              L: 1,
              XL: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              S: 3,
              M: 2,
              L: 1,
              XL: 2,
            },
          },
        ],
      },
    ],
    categories: ["Men", "Shirts", "Casual collection"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Leather Boots",
    originalPrice: 89.99,
    shippingDetails: "Free shipping on orders over $50.",
    shippingPrice: 5.99,
    colors: [
      {
        name: "Brown",
        hex: "#A52A2A",
        images: [
          "https://via.placeholder.com/150/brown1",
          "https://via.placeholder.com/150/brown2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              36: 6,
              38: 5,
              40: 3,
              42: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              36: 6,
              38: 5,
              40: 3,
              42: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              36: 6,
              38: 5,
              40: 3,
              42: 2,
            },
          },
        ],
      },
      {
        name: "Black",
        hex: "#000000",
        images: [
          "https://via.placeholder.com/150/black1",
          "https://via.placeholder.com/150/black2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              36: 6,
              38: 5,
              40: 3,
              42: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              36: 6,
              38: 5,
              40: 3,
              42: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              36: 6,
              38: 5,
              40: 3,
              42: 2,
            },
          },
        ],
      },
    ],
    categories: ["Unisex", "Outdoor collection"],
    sizes: [36, 38, 40, 42],
  },
  {
    name: "Denim Jacket",
    originalPrice: 59.99,
    shippingDetails: "Free shipping on orders over $50.",
    shippingPrice: 5.99,
    colors: [
      {
        name: "Blue",
        hex: "#0000FF",
        images: [
          "https://via.placeholder.com/150/blue1",
          "https://via.placeholder.com/150/blue2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              S: 7,
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              S: 7,
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              S: 7,
              M: 5,
              L: 3,
              XL: 2,
            },
          },
        ],
      },
      {
        name: "Black",
        hex: "#000000",
        images: [
          "https://via.placeholder.com/150/black1",
          "https://via.placeholder.com/150/black2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              S: 7,
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              S: 7,
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              S: 7,
              M: 5,
              L: 3,
              XL: 2,
            },
          },
        ],
      },
    ],
    categories: ["Men", "Casual collection", "Outdoor collection"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Maxi Skirt",
    originalPrice: 45.99,
    shippingDetails: "Free shipping on orders over $50.",
    shippingPrice: 5.99,
    colors: [
      {
        name: "Red",
        hex: "#FF0000",
        images: [
          "https://via.placeholder.com/150/red1",
          "https://via.placeholder.com/150/red2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              M: 5,
              L: 3,
              XL: 2,
            },
          },
        ],
      },
      {
        name: "White",
        hex: "#FFFFFF",
        images: [
          "https://via.placeholder.com/150/white1",
          "https://via.placeholder.com/150/white2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              M: 5,
              L: 3,
              XL: 2,
            },
          },
        ],
      },
    ],
    categories: ["Women", "Casual collection", "Beach outfit"],
    sizes: ["M", "L", "XL"],
  },
  {
    name: "Blazer",
    originalPrice: 79.99,
    shippingDetails: "Free shipping on orders over $50.",
    shippingPrice: 5.99,
    colors: [
      {
        name: "Black",
        hex: "#000000",
        images: [
          "https://via.placeholder.com/150/black1",
          "https://via.placeholder.com/150/black2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              M: 5,
              L: 3,
              XL: 2,
            },
          },
        ],
      },
      {
        name: "Gray",
        hex: "#808080",
        images: [
          "https://via.placeholder.com/150/gray1",
          "https://via.placeholder.com/150/gray2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              M: 5,
              L: 3,
              XL: 2,
            },
          },
        ],
      },
    ],
    categories: ["Men", "Formal collection", "Official"],
    sizes: ["M", "L", "XL"],
  },
  {
    name: "Track Pants",
    originalPrice: 34.99,
    shippingDetails: "Free shipping on orders over $50.",
    shippingPrice: 5.99,
    colors: [
      {
        name: "Gray",
        hex: "#808080",
        images: [
          "https://via.placeholder.com/150/gray1",
          "https://via.placeholder.com/150/gray2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              S: 6,
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              S: 6,
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              S: 6,
              M: 5,
              L: 3,
              XL: 2,
            },
          },
        ],
      },
      {
        name: "Blue",
        hex: "#0000FF",
        images: [
          "https://via.placeholder.com/150/blue1",
          "https://via.placeholder.com/150/blue2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              S: 6,
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              S: 6,
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              S: 6,
              M: 5,
              L: 3,
              XL: 2,
            },
          },
        ],
      },
    ],
    categories: ["Men", "Casual collection", "Outdoor collection"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Shorts",
    originalPrice: 99.99,
    offer: 20,
    shippingDetails: "Free shipping on orders over $50.",
    shippingPrice: 5.99,
    colors: [
      {
        name: "Gray",
        hex: "#808080",
        images: [ShortsGreen, ShortsBlack, ShortsGreen, ShortsBlack, ShortsGreen, ShortsBlack],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              S: 6,
              M: 5,
              L: 3,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              S: 6,
              M: 5,
              L: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              S: 6,
              M: 5,
              L: 5,
            },
          },
        ],
      },
      {
        name: "Blue",
        hex: "#7676ff",
        images: [ShortsBlack],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              S: 6,
              M: 5,
              L: 3,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              S: 6,
              M: 5,
              L: 3,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              S: 6,
              M: 5,
              L: 3,
            },
          },
        ],
      },
    ],
    categories: ["Men", "Casual collection", "Beach outfit"],
    sizes: ["S", "M", "L"],
    model: 'Model is 6\'2" wearing a size M'
  },
  {
    name: "Cardigan",
    originalPrice: 52.99,
    shippingDetails: "Free shipping on orders over $50.",
    shippingPrice: 5.99,
    colors: [
      {
        name: "Beige",
        hex: "#F5F5DC",
        images: [
          "https://via.placeholder.com/150/beige1",
          "https://via.placeholder.com/150/beige2",
        ],
        materials: [
            {
              type: "Handcrafted",
              quantities: {
                S: 7,
                M: 5,
                L: 3,
                XL: 2,
              },
            },
            {
              type: "Premium Quality",
              quantities: {
                S: 7,
                M: 5,
                L: 3,
                XL: 2,
              },
            },
            {
              type: "Normal Quality",
              quantities: {
                S: 7,
                M: 5,
                L: 3,
                XL: 2,
              },
            },
          ],
      },
      {
        name: "Brown",
        hex: "#A52A2A",
        images: [
          "https://via.placeholder.com/150/brown1",
          "https://via.placeholder.com/150/brown2",
        ],
        materials: [
          {
            type: "Handcrafted",
            quantities: {
              S: 7,
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Premium Quality",
            quantities: {
              S: 7,
              M: 5,
              L: 3,
              XL: 2,
            },
          },
          {
            type: "Normal Quality",
            quantities: {
              S: 7,
              M: 5,
              L: 3,
              XL: 2,
            },
          },
        ],
      },
    ],
    categories: ["Women", "Casual collection", "Formal collection"],
    sizes: ["S", "M", "L", "XL"],
  },
];

export default products;
