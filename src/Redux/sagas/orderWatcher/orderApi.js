import { request } from "../../../Axios"
import { CREATED } from "../../../HTTPStatus";

export const placeOrder = async (orderObj)=>{
try {
    const result = await request.post(`/orders`,orderObj);
    if(result.status == CREATED){
        return result;
    }
    else{
      return 0;
    }
} catch (error) {
    console.log(error);
    throw error.message;
}
}