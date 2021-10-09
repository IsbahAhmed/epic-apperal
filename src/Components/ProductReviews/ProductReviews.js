import React from 'react'
import RatingStars from '../RatingStars/RatingStars'

const ProductReviews = ({reviews}) => {
    return (
        <div id="review" className="tab-pane fade-up">
            {
              reviews.length ?   <div className="review">
              <table className="table table-striped table-bordered table-responsive">
                <tbody>
                  <tr>
                    <td className="table-name"><strong>
                        <h4>Palora Themes</h4>
                        </strong></td>
                    <td className="text-right">
                        <h4>08/06/2018</h4>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>It’s both good and bad. If Nikon had achieved a high-quality wide lens camera with a 1 inch sensor, that would have been a very competitive product. So in that sense, it’s good for us. But actually, from the perspective of driving the 1 inch sensor market, we want to stimulate this market and that means multiple manufacturers.</p>    
                     <RatingStars/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>:
            <h3 className="text-center">
              No reviews yet
            </h3>
            }
      
     
   
    </div>
    )
}

export default ProductReviews
