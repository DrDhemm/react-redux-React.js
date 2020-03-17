import React from 'react'

const Rainbow = (Component) => {
    const color = ['blue', 'green', 'yellow', 'pink', 'purple']
    // Math.floor(Math.random() * (1 + max - min)) + min (recepie to set limit)
    const random = color[Math.floor(Math.random() * (1 + 4 - 0)) + 0]
    const className = random + '-text'

    return (props) => {
        // console.log(props);
        
        return(
            <div className={className}>
                <Component {...props} />
            </div>
        )
    }
}

export default Rainbow