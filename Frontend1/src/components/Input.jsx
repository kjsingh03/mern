import React from 'react'

function Input({type="text",name,className,...props},ref) {
  return (
    
        <input type={type} className={`w-full bg-[#DADAD8]/75 px-[1.6vw] py-[1vw]  outline-gray-400/50 rounded-[2vw]`} {...props} name={name} ref={ref} />
    
  )
}

export default React.forwardRef(Input)
