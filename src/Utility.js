export var getSiblings = function (elem) {
  // Setup siblings array and get the first sibling
  var siblings = [];
  var sibling = elem.parentNode.firstChild;

  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
};

export var findProduct = (productId, productsArray) => {
  var desiredProduct = productsArray.filter(
    (prod) => prod.productId === productId
  );
  return desiredProduct[0];
};

var delay = (t, v) => {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
};

export function keepTrying(triesRemaining, storageRef) {
  if (triesRemaining < 0) {
    return Promise.reject("out of tries");
  }

  return storageRef
    .getDownloadURL()
    .then((url) => {
      return url;
    })
    .catch((error) => {
      switch (error.code) {
        case "storage/object-not-found":
          return delay(2000).then(() => {
            return keepTrying(triesRemaining - 1, storageRef);
          });
        default:
          console.log(error);
          return Promise.reject(error);
      }
    });
}

export const totalCalculator = (array) => {
  return array.reduce((a, b) => a + b.price * b.quantity, 0);
};
// export  const statusMessage = (statusCode)=>{

// 	  if(statusCode == 200 || statusCode == 201 || statusCode == 204){
// 		  return toast.success
// 	  }
// 	  else if(statusCode == 400 || statusCode == 404){
// 		  return toast.error
// 	  }
// 	  return toast
//   }

//   export const convertToDate = (date)=>{
// 	var d = new Date(date);

//    return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
//   }

export const createChunks = (array,size) => {
  var temp = []
  for (let i = 0; i < size; i++) {
    var temp2 = []
    for (let j = i * size; j < size * (i+1); j++) {
      if(!array[j]) break;
      else{

        temp2.push(array[j])
      }
      
    }
    if(temp2.length)
    temp.push(temp2)
  }

  return temp;
}