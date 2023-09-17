import React from 'react'


interface headinprops{
    title:string
}
const Heading:React.FC<headinprops> = ({title}) => {
  return (
    <div className=' text-3xl font-medium  text-center capitalize mb-2'>

{title}
      
    </div>
  )
}

export default Heading
