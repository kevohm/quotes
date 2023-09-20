import React, { useState } from 'react'

const Error = ({error}) => {
  const [show, setShow] = useState(true)
  console.log(error)
  return (
    <div className={`${show || "hidden"} w-full  relative rounded-lg pl-5 py-5 bg-red-50 text-red-300 border border-red-300`}>
      <p>{error || "Server Error "}</p>
      <p className="absolute top-4 bg-white rounded-lg p-1 px-2 cursor-pointer right-[10px] text-black hover:text-black-lighter" onClick={()=>setShow(!show)}>x</p>
    </div>
  )
}

export default Error