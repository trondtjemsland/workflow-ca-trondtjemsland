import { createProduct } from "./helpers/objectHelpers";
import { newProduct } from "./interfaces/newProduct";
import { makeUppercase } from "./helpers/stringHelpers";

const Product: newProduct = createProduct({
  id: 12,
  code: "d f g",
  title: "d f g",
});

console.log(Product);

console.log(makeUppercase("TROND"));
