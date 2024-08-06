import React from 'react'

function Item(name) {
    const handleClick = () => {
        
    };

  return (
    <div>
        {name}
        <button onClick={handleClick}/>
    </div>
  )
}

export default Item