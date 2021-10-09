import {
  PRODUCTS_FETCHED,
  REQUEST_FETCH_PRODUCTS,
  REQUEST_FETCH_SINGLE_PRODUCT,
  SINGLE_PRODUCT_FETCHED,
} from "./productContants";

const initialState = {
  data: [],
  pages: 1,
  page: 1,
  singleProduct: {
    isLoading: false,
    data: {},
    selected: "",
  },
  isLoading: false,
  queryParams: {},
  error: "",
};

const productsReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case REQUEST_FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
        queryParams: payload.queryParams,
        error: "",
      };
    case PRODUCTS_FETCHED:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    case REQUEST_FETCH_SINGLE_PRODUCT:
      return {
        ...state,
        queryParams:payload.queryParams,
        error:"",
        singleProduct: {
          ...state.singleProduct,
          isLoading: true,
         
          selected: payload.id,
        },
      };
    case SINGLE_PRODUCT_FETCHED:
    
      return {
        ...state,
        singleProduct: {
          ...state.singleProduct,
          isLoading: false,
          data: payload.data,
        },
      };
    default:
      return state;
  }
};
export default productsReducer;
