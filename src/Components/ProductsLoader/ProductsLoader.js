import React from "react";
import {
  ShimmerButton,
  ShimmerTitle,
  ShimmerText,
  ShimmerCircularImage,
  ShimmerThumbnail,
  ShimmerBadge,
  ShimmerTableCol,
  ShimmerTableRow,
} from "react-shimmer-effects";
const ProductsLoader = () => {
  return (
    <>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </>
  );
};

const ListItem = () => {
  return (
    <div className="col-sm-3 px-5">
      <ShimmerThumbnail
        height={300}
        style={{ width: "100% !important" }}
        className="m-0"
        rounded
      />
      <ShimmerTitle />
      {/* <ShimmerBadge width={100} /> */}
    </div>
  );
};

export default ProductsLoader;
