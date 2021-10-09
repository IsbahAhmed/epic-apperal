import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import {
  PRODUCTS_FETCHED,
  REQUEST_FETCH_PRODUCTS,
  REQUEST_FETCH_SINGLE_PRODUCT,
} from "../../productsReducer/productContants";

import { fetchProducts, fetchSingleProduct } from "./productsApi";
import { productsFetched, singleProductFetched } from "../../productsReducer/productActions";

const queryParams = (state) => state.products.queryParams;
const selectedSingleProduct = (state) => state.products.singleProduct.selected;
function* handleFetchProductsAction() {
  try {
    const params = yield select(queryParams);
    const result = yield call(fetchProducts, params);
 

    yield put(
      productsFetched({
        data: result.data.data,
        pages: result.data.pages,
        error: result.error,
      })
    );
  } catch (error) {
    yield put(
      productsFetched({
        error: "Something went wrong",
      })
    );
  }
}
function* handleFetchSingleProductAction() {
  try {
    const params = yield select(queryParams);
    const selected = yield select(selectedSingleProduct);
    const result = yield call(fetchSingleProduct, selected, params);
 

    yield put(
      singleProductFetched({
        data: result.data.data[0],
        error: result.error,
      })
    );
  } catch (error) {
    yield put(
        singleProductFetched({
        error: "Something went wrong",
      })
    );
  }
}

function* productsWatcher() {
  yield takeEvery(REQUEST_FETCH_PRODUCTS, handleFetchProductsAction);
  yield takeEvery(REQUEST_FETCH_SINGLE_PRODUCT, handleFetchSingleProductAction);
}

export default productsWatcher;
