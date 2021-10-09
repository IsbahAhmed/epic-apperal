import React from 'react'
import { ShimmerButton, ShimmerText, ShimmerThumbnail, ShimmerTitle } from 'react-shimmer-effects'

const QuickViewLoader = () => {
    return (
   <>
     <div className="col-md-6 px-5">
        <ShimmerThumbnail
          height={300}
          style={{ width: "100% !important" }}
          className="m-0"
          rounded
        />
      
        {/* <ShimmerBadge width={100} /> */}
      </div>
      <div className="col-md-6 px-5">
       
        <ShimmerTitle />
        <ShimmerText/>
        <ShimmerButton />
        {/* <ShimmerBadge width={100} /> */}
      </div>
   </>
    )
}

export default QuickViewLoader
