const productList = document.querySelector("#product-list");
const productDetail = document.querySelector("#product-detail");

const createBrandHtml = (brand) => {
  return `
    <div class="flex items-center gap-2">
      <img src="${brand.logo}" alt="" class="h-6" />
      <p class="text-sm text-slate-500">${brand.name}</p>
    </div>
  `;
};

export const showProducts = (products) => {
  const productCards = products.map((product) => {
    return `
      <a href="?id=${product.id}" class="block overflow-hidden rounded-xl bg-white shadow hover:shadow-md">
        <img src="${product.image}" alt="${product.name}" class="aspect-4/3 w-full object-cover" />
        <div class="p-4">
          ${createBrandHtml(product.brand)}
          <h2 class="mt-2 font-bold">${product.name}</h2>
        </div>
      </a>
    `;
  });

  productList.innerHTML = productCards.join("");
};

export const showListMessage = (text) => {
  productList.innerHTML = `<p class="col-span-full rounded-xl bg-white p-6 text-slate-600 shadow">${text}</p>`;
};

export const showProduct = (product) => {
  productDetail.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="w-full rounded-lg object-cover sm:w-64" />
    <div>
      ${createBrandHtml(product.brand)}
      <h2 class="mt-2 text-2xl font-bold">${product.name}</h2>
      <p class="mt-2 text-slate-600">${product.description}</p>
    </div>
  `;
  productDetail.scrollIntoView();
};

export const showMessage = (text) => {
  productDetail.innerHTML = `<p class="text-lg font-semibold">${text}</p>`;
  productDetail.scrollIntoView();
};
