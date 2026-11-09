import { products } from "./products.js";
import { showProducts, showListMessage, showProduct, showMessage } from "./show-products.js";

const API_URL = "https://api.course.biggerpixel.com";

// TODO 1: Skriv en async-funktion, getProducts, som hämtar alla produkter från API:et.

const findProduct = (products, productId) => {
  return products.find((product) => {
    return product.id === productId;
  });
};

const showList = () => {
  // TODO 2: Visa produkterna från API:et i stället för produkterna från products.js.
  // TODO 3: Visa "Laddar produkter…" medan vi väntar på svaret.
  showProducts(products);
};

const showDetail = () => {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  if (id === null) {
    return;
  }

  // TODO 4: Hämta bara produkten med rätt id från API:et i stället för att leta med find.
  const product = findProduct(products, Number(id));

  // TODO 5: Visa "Produkten finns inte." när API:et svarar att produkten saknas.
  if (product === undefined) {
    showMessage("Produkten finns inte.");
    return;
  }

  showProduct(product);
};

showList();
showDetail();
