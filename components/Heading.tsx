import React from 'react'


interface headinprops{
    title:string
}
const Heading:React.FC<headinprops> = ({title}) => {
  return (
    <div className=' text-3xl font-medium capitalize mb-8'>

{title}
      
    </div>
  )
}

export default Heading
