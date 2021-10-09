import React from 'react'
import { ShimmerButton, ShimmerText, ShimmerThumbnail, ShimmerTitle } from 'react-shimmer-effects'

const SingleProductLoader = () => {
    return (
        <>
              <div className="col-xl-4  col-lg-4 offset-xl-1 col-md-5 col-sm-12">
              <ShimmerThumbnail
          height={300}
          style={{ width: "100% !important" }}
          className="m-0"
          rounded
        />
              </div>
              <div className="col-xl-7 col-lg-8 col-md-7 col-sm-12">
              <ShimmerTitle />
        <ShimmerText/>
        <ShimmerButton />
                  </div>
        </>
    )
}

export default SingleProductLoader
