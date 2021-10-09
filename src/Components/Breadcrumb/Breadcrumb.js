import React from 'react'

const Breadcrumb = (props) => {
    return (
        <div className="breadcrumb-area bg-gray">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <ul className="breadcrumb-list mb-0">
                  {props.children}
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Breadcrumb
