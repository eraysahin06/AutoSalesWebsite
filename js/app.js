/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Eray Sahin
 *      Student ID: 156387201
 *      Date:       11.20.2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

function createButtons() {
  for (let i = 0; i < categories.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = categories[i].description;
    button.id = "newButton";
    document.getElementById("category-menu").appendChild(button);

    button.addEventListener("click", () => {
      showProductList(categories[i].id);
    });
  }
}

function createProductCard(product) {
  let section = document.querySelector(".cards");
  section.className = "cards";
  let card = document.createElement("div");
  card.id = "product-card";
  card.classList.add("product-card");

  let img = document.createElement("img");
  img.className = "vehicle-img";
  img.src = product.image;
  img.alt = product.name;
  let h2 = document.createElement("h2");
  h2.className = "car-name";
  h2.innerHTML = product.name;
  let p = document.createElement("p");
  p.innerHTML = product.description;
  p.className = "description";
  let price = document.createElement("span");
  price.innerHTML = `${new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD"
  }).format(product.price)}`;
  price.className = "price";
  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(price);
  section.appendChild(card);
  // Return the card’s <div> element to the caller
  return section;
}

function showProductList(categoryId) {
  let title = document.getElementById("category");
  switch (categoryId) {
    case "c1":
      title.innerHTML = "All Vehicles";
      //display all products
      break;
    case "c2":
      title.innerHTML = "Sedan Vehicles";
      break;
    case "c3":
      title.innerHTML = "SUV Vehicles";
      break;
    case "c4":
      title.innerHTML = "Truck Vehicles";
      break;
    case "c5":
      title.innerHTML = "Van Vehicles";
      break;
    case "c6":
      title.innerHTML = "Motorcycle Vehicles";
      break;
    case "c7":
      title.innerHTML = "Coupe Vehicles";
      break;
    default:
      title.innerHTML = "All Vehicles";
      break;
  }

  const filteredProducts = products.filter((product) => {
    if (categoryId === "c1") {
      return true;
    } else if (product.discontinued === true) {
      return false;
    } else if (product.categories.includes(categoryId)) {
      return true;
    }
    return false;
  });

  if (categoryId === "c1") {
    //display all products
    let section = document.querySelector(".cards");
    section.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
      createProductCard(products[i]);
    }
  } else if (categoryId === "c2") {
    let section = document.querySelector(".cards");
    section.innerHTML = "";
    for (let i = 0; i < filteredProducts.length; i++) {
      createProductCard(filteredProducts[i]);
    }
  } else if (categoryId === "c3") {
    let section = document.querySelector(".cards");
    section.innerHTML = "";
    for (let i = 0; i < filteredProducts.length; i++) {
      createProductCard(filteredProducts[i]);
    }
  } else if (categoryId === "c4") {
    let section = document.querySelector(".cards");
    section.innerHTML = "";
    for (let i = 0; i < filteredProducts.length; i++) {
      createProductCard(filteredProducts[i]);
    }
  } else if (categoryId === "c5") {
    let section = document.querySelector(".cards");
    section.innerHTML = "";
    for (let i = 0; i < filteredProducts.length; i++) {
      createProductCard(filteredProducts[i]);
    }
  } else if (categoryId === "c6") {
    let section = document.querySelector(".cards");
    section.innerHTML = "";
    for (let i = 0; i < filteredProducts.length; i++) {
      createProductCard(filteredProducts[i]);
    }
  } else if (categoryId === "c7") {
    let section = document.querySelector(".cards");
    section.innerHTML = "";
    for (let i = 0; i < filteredProducts.length; i++) {
      createProductCard(filteredProducts[i]);
    }
  }
}

function main() {
  createButtons();
  showProductList();
}

addEventListener("DOMContentLoaded", main);
