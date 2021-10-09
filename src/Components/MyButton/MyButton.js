import React from 'react'

const MyButton = (props) => {

    var {className = "" ,style = {},...restProps} = props;
    return (
        <button className={`btn ${className}`} 
        {...restProps}
        style={{padding:'1rem 3rem',...style}}>
            {props.children}
        </button>
    )
}

export default MyButton
