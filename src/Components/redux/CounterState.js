import { createSlice } from "@reduxjs/toolkit";
import { CategoryApi } from "./api";
import { ProductsApi } from "./api";

export const counterSlice = createSlice({
  name: "Products",
  initialState: {
    productsApi: ProductsApi,
    categoryData: CategoryApi,
    categories: ProductsApi.filter((item) => item.id < 15),
    products: ProductsApi.filter((item) => item.id < 13),
    featured: ProductsApi.filter((item) => item.id > 14),
    otherProducts: localStorage.getItem("detailsProduct")
      ? ProductsApi.filter(
          (item) =>
            item.id != JSON.parse(localStorage.getItem("detailsProduct")).id &&
            item.id < 11
        )
      : [],
    navSections: false,
    cartDetails: {
      id: 0,
      qty: 1,
      nameColor: "",
      size: "",
      img: "",
      name: "",
      price: 0,
    },
    totalPrice: localStorage.getItem("totalPrice")
      ? Number(localStorage.getItem("totalPrice"))
      : 0,
    notSize: false,
    notColor: false,
    addedItem: localStorage.getItem("toCart")
      ? JSON.parse(localStorage.getItem("toCart"))
      : [],
    checkColorAndSize: false,
    nextProduct: {},
    prevProduct: {},
    quantityError: false,
    box: false,
    loading: false,
    filterBy: [],
    sortDirectione: "up",
    valueSort: "position",
    productsFilters: ProductsApi.filter((item) => item.size && item.id < 15),
    valueSize: "All",
    valuePrice: [39, 299],
    arrShopping: [],
    valueColor: "All",
  },
  reducers: {
    setLoading: (state, actions) => {
      state.loading = actions.payload;
    },
    toggleNav: (state) => {
      if (state.navSections === true) {
        state.navSections = false;
      } else {
        state.navSections = true;
      }
    },
    increment: (state) => {
      state.cartDetails.qty++;
    },
    decrement: (state) => {
      state.cartDetails.qty <= 0
        ? (state.cartDetails.qty = 0)
        : state.cartDetails.qty--;
    },
    setQuantity: (state, actions) => {
      state.cartDetails.qty = Number(actions.payload);
    },
    setColor: (state, actions) => {
      state.cartDetails.nameColor = actions.payload;
      state.notColor = true;
    },
    setSize: (state, actions) => {
      state.cartDetails.size = actions.payload;
      state.notSize = true;
    },
    AddToCart: (state, actions) => {
      state.cartDetails.id = actions.payload.id;
      state.cartDetails.name = actions.payload.name;
      state.cartDetails.img = actions.payload.img;
      state.cartDetails.price = actions.payload.price;
      state.checkColorAndSize = true;
      if (state.cartDetails.qty != 0) {
        if ((state.notSize && state.notColor) == false) {
          if (
            localStorage.getItem("detailsProduct") &&
            JSON.parse(localStorage.getItem("detailsProduct")).size
          ) {
            console.log(actions.payload);
            state.notColor = false;
            state.notSize = false;
            return;
          }
          if (state.addedItem.length != 0) {
            const isProductInCart = state.addedItem.some(
              (item) => item.id === state.cartDetails.id
            );
            state.addedItem.map((item) => {
              if (isProductInCart == item) {
                item.qty = item.qty += state.cartDetails.qty;
                state.totalPrice =
                  actions.payload.price * state.cartDetails.qty +
                  state.totalPrice;
                return item;
              } else {
                state.addedItem.push(state.cartDetails);
                state.totalPrice =
                  actions.payload.price * state.cartDetails.qty +
                  state.totalPrice;
              }
            });
          } else {
            state.addedItem.push(state.cartDetails);
            state.totalPrice =
              actions.payload.price * state.cartDetails.qty + state.totalPrice;
          }
        } else {
          if (state.addedItem.length != 0) {
            const isProductInCartBy = state.addedItem.some(
              (item) =>
                item.size === state.cartDetails.size &&
                item.nameColor === state.cartDetails.nameColor &&
                item.id === state.cartDetails.id
            );
            if (isProductInCartBy) {
              state.addedItem.map((item) => {
                if (
                  item.size == state.cartDetails.size &&
                  item.nameColor === state.cartDetails.nameColor
                ) {
                  item.qty = item.qty += state.cartDetails.qty;
                  state.totalPrice =
                    actions.payload.price * state.cartDetails.qty +
                    state.totalPrice;
                }
                return item;
              });
            } else {
              state.addedItem.push(state.cartDetails);
              state.totalPrice =
                actions.payload.price * state.cartDetails.qty +
                state.totalPrice;
            }
          } else {
            state.addedItem.push(state.cartDetails);
            state.totalPrice =
              actions.payload.price * state.cartDetails.qty + state.totalPrice;
          }
        }
      } else {
        state.quantityError = true;
      }
      localStorage.setItem("toCart", JSON.stringify(state.addedItem));
      localStorage.setItem("totalPrice", state.totalPrice);
      state.cartDetails = {
        id: 0,
        qty: 1,
        nameColor: "",
        size: "",
        img: "",
        name: "",
        price: 0,
      };
      state.checkColorAndSize = false;
      state.notColor = false;
      state.notSize = false;
    },
    updateQuantity: (state, actions) => {
      const index = state.addedItem.findIndex(
        (i) =>
          i.id === actions.payload.id &&
          i.size === actions.payload.size &&
          i.nameColor === actions.payload.color
      );
      const currentProduct = state.addedItem[index];
      const newQty = actions.payload.quantity - currentProduct.qty;
      state.totalPrice = newQty * currentProduct.price + state.totalPrice;
      currentProduct.qty = actions.payload.quantity;
      if (currentProduct.qty == 0) {
        const newArr = state.addedItem.filter((item) => item != currentProduct);
        state.addedItem = newArr;
      }
      localStorage.setItem("toCart", JSON.stringify(state.addedItem));
      localStorage.setItem("totalPrice", state.totalPrice);
    },
    removeCart: (state, actions) => {
      const index = state.addedItem.findIndex(
        (i) =>
          i.id === actions.payload.id &&
          i.size === actions.payload.size &&
          i.nameColor === actions.payload.color
      );
      const currentProduct = state.addedItem[index];
      state.totalPrice = Math.abs(
        currentProduct.qty * currentProduct.price - state.totalPrice
      );
      const newCarts = state.addedItem.filter((item) => item != currentProduct);
      state.addedItem = newCarts;
      localStorage.setItem("toCart", JSON.stringify(state.addedItem));
      localStorage.setItem("totalPrice", state.totalPrice);
    },
    toggleBox: (state) => {
      state.box ? (state.box = false) : (state.box = true);
    },
    valueSorting: (state, actions) => {
      state.valueSort = actions.payload;
    },
    setDirectioneSort: (state) => {
      state.sortDirectione == "up"
        ? (state.sortDirectione = "down")
        : (state.sortDirectione = "up");
    },
    sortingBySelect: (state) => {
      if (state.valueSort === "position") {
        state.categories = ProductsApi.filter((item) => item.id < 15);
      }
      if (state.sortDirectione == "up") {
        if (state.valueSort === "price") {
          state.categories = state.categories.sort((a, b) => a.price - b.price);
        }
        if (state.valueSort === "name") {
          state.categories = state.categories.sort((a, b) =>
            a.name > b.name ? 1 : -1
          );
        }
      }
      if (state.sortDirectione == "down") {
        if (state.valueSort === "price") {
          state.categories = state.categories.sort((a, b) => b.price - a.price);
        }
        if (state.valueSort === "name") {
          state.categories = state.categories.sort((a, b) =>
            a.name < b.name ? 1 : -1
          );
        }
      }
    },
    filterByPrice: (state, actions) => {
      if (actions.payload == "All") {
        state.valuePrice = [39, 299];
        state.arrShopping = state.arrShopping.filter((item) => item != "price");
        state.categories = ProductsApi.filter((item) => item.id < 15);
      } else {
        state.valuePrice = actions.payload;
        state.categories = state.categories.filter(
          (item) =>
            item.price >= state.valuePrice[0] &&
            item.price <= state.valuePrice[1]
        );
        state.arrShopping = [...state.arrShopping, "price"];
      }
    },
    filterBySize: (state, actions) => {
      state.valueSize = actions.payload;
      if (state.valueSize == "All") {
        state.categories = ProductsApi.filter((item) => item.id < 15);
        state.arrShopping = state.arrShopping.filter((item) => item != "size");
      } else {
        if (state.valueSize == "55 cm") {
          state.categories = ProductsApi.filter((item) => item.id < 15);
          state.arrShopping = [...state.arrShopping, "size"];
        } else {
          state.categories = state.productsFilters.filter((item) => {
            if (item.size.includes(state.valueSize) == true) {
              return item;
            }
          });
          state.arrShopping = [...state.arrShopping, "size"];
        }
      }
    },
    filterByColor: (state, actions) => {
      state.valueColor = actions.payload;
      if (state.valueColor == "All") {
        state.categories = ProductsApi.filter((item) => item.id < 15);
        state.arrShopping = state.arrShopping.filter((item) => item != "color");
      } else {
        state.categories = state.productsFilters.filter((item) => {
          if (JSON.stringify(item.color).includes(state.valueColor)) {
            return item;
          }
        });
        state.arrShopping = [...state.arrShopping, "color"];
      }
    },
    filterClear: (state) => {
      state.categories = ProductsApi.filter((item) => item.id < 15);
      state.arrShopping = [];
    },
    detailsProduct: (state, actions) => {
      localStorage.setItem(
        "detailsProduct",
        JSON.stringify(
          ProductsApi.find((product) => product.id === actions.payload)
        )
      );
      state.otherProducts = ProductsApi.filter(
        (item) =>
          item.id != JSON.parse(localStorage.getItem("detailsProduct")).id &&
          item.id < 11
      );
    },
    getPrevProduct: (state) => {
      const idProductDetails =
        JSON.parse(localStorage.getItem("detailsProduct")).id - 1;
      state.prevProduct =
        idProductDetails != 0 &&
        ProductsApi.find((product) => product.id === idProductDetails);
    },
    getNextProduct: (state) => {
      const idProductDetails =
        JSON.parse(localStorage.getItem("detailsProduct")).id + 1;
      state.nextProduct =
        idProductDetails != ProductsApi.length + 1 &&
        ProductsApi.find((product) => product.id === idProductDetails);
    },
  },
});

export const {
  toggleNav,
  detailsProduct,
  increment,
  decrement,
  setQuantity,
  setColor,
  setSize,
  AddToCart,
  updateQuantity,
  removeCart,
  getNextProduct,
  getPrevProduct,
  toggleBox,
  valueSorting,
  filterByPrice,
  setDirectioneSort,
  sortingBySelect,
  filterBySize,
  filterByColor,
  filterClear,
  setLoading,
} = counterSlice.actions;

export default counterSlice.reducer;
