import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus } from "react-dom";

const SumbitButton = () => {
    const {pending}=experimental_useFormStatus()
  return (
    <div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 dark:bg-gray-50 text-white rounded-full outline-none transition-all  group focus:scale-110 hover:scale-110 active:scale-105  hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 "
          disabled={pending}
        >
            {
                
                pending? <div className=' h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-black'></div>:(
                    <>
                   <span className=' dark:text-gray-950'>Sumbit</span>
                    <FaPaperPlane className="text-xs group-hover:translate-x-1   dark:text-gray-950 group-hover:-translate-y-1 opacity-70 transition-all" />
                    </>
                )
            }
       
         
        </button>
    </div>
  )
}

export default SumbitButton
