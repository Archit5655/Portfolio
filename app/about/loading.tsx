"use client"

import { useTheme } from '@/context/theme-context'
import React from 'react'
import { PacmanLoader } from 'react-spinners'

const loading = () => {
  return (
<div className=' flex items-center justify-center mt-48'>

<PacmanLoader  color='#424242' size={70} />
</div>

   

  )
}

export default loading
