import axios from "axios";

const api = axios.create({
  baseURL: "https://silba-be.onrender.com/api",
});

// BUSINESS REQUESTS
export const getBusinesses = async () => {
  const res = await api.get("/business");
  return res.data;
};

export const getBusinessById = async (id) => {
  const res = await api.get(`/business/${id}`);
  return res.data;
};

export const postBusiness = async (body) => {
  const res = await api.post("/business", body);
  return res.data;
};

// get business by category

// USER REQUESTS
export const getUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

export const getUserById = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

// post signup user

export const postSignUp = async (body) => {
  const res = await api.post("/auth/register", body);
  return res.data;
};

// patch user

//BASKET REQUESTS
export const getBasketByUserId = async (id) => {
  const res = await api.get(`/users/basket/${id}`);
  return res.data;
};

export const postToBasket = async (id, body) => {
  const res = await api.post(`/users/basket/${id}`, body);
};

export const deleteFromBasket = async (id) => {
  // does this delete all of the basket? or just the basket items?
};

//ORDERS REQUESTS
export const getOrdersByUserId = async (id) => {
  const res = await api.get(`/users/order/${id}`);
  return res.data;
};

export const postOrder = async (id, body) => {
  const res = await api.post(`/users/order/${id}`, body);
  return res.data;
};

export const deleteOrder = async (id) => {
  const res = await api.delete(`/users/order/${id}`);
};

// MARKETPLACE ITEMS REQUESTS
export const getMarketplaceItems = async () => {
  console.log("api");
  const res = await api.get("/items");
  console.log(res.data, "<=== api");
  return res.data;
};

export const getMarketplaceItemsById = async (id) => {
  const res = await api.get(`/items/${id}`);
  return res.data;
};

export const postToMarketplace = async (body) => {
  const res = await api.post("/items", body);
};
// patch marketplace item

// REVIEWS REQUESTS
export const getReviews = async () => {
  const res = await api.get("/reviews");
  return res.data;
};

export const getReviewsByBusinessId = async (id) => {
  const res = await api.get(`/reviews/${id}`);
  return res.data;
};

export const postReviews = async (id, body) => {
  const res = await api.post(`/reviews/${id}`);
};
// get reviews by user id
