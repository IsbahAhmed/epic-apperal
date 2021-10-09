import { request } from "../../../Axios"
import { CREATED } from "../../../HTTPStatus";

export const placeOrder =async (orderObj)=>{
try {
    const result = await request.post(`/orders`,orderObj);
    if(result.status == CREATED){
        return 1;
    }
    else{
        throw "Order cannot be placed"
    }
} catch (error) {
    console.log(error);
    throw error.message;
}
}