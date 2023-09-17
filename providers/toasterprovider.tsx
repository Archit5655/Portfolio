"use client"
import {Toaster} from 'react-hot-toast'
import React from 'react'

const ToasterProvider = () => {
  return (
   <Toaster toastOptions={{
    success:{
        iconTheme:{
primary:"gray",
secondary:"black"
        },
        style:{
            background:"gray",
            color:'#fff'
        }
    },

   }}/>
  )
}

export default ToasterProvider
