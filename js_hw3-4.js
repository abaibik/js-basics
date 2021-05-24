const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

const productsWithPhotoProp = products.filter((product) =>
  product.hasOwnProperty("photos")
);
const productsWithPhotos = productsWithPhotoProp.filter(
  (product) => product.photos.length > 0
);
const result = products.sort((a, b) => a.price - b.price);
console.log(result);
