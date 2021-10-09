import { request } from "../../../Axios";
import { SUCCESS } from "../../../HTTPStatus";

export const fetchProducts = async (params) => {
  const { page = 1, limit = 12, fields = "" } = params;

  try {
    const result = await request.get(
      `/products?page=${page}&limit=${limit}&fields=${fields}`
    );

    if (result.data.status !== SUCCESS) throw new Error("Error");
    else {
      result.error = result.data.result ? "" : "No items found";
      return result;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const fetchSingleProduct = async (id,params) => {
    const {fields = ""} = params;
  
    try {
      const result = await request.get(
        `/products?_id=${id}&fields=${fields}`
      );
  
      if (result.data.status !== SUCCESS) throw new Error("Error");
      else {
     
        return result;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };