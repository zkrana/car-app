'use client'
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

export default function CustomButton({title, containerStyles, handleClick}: CustomButtonProps) {
  return (
    <button
    disabled={true}
    type={"button"}
    className={`custom-btn ${containerStyles}`}
    onClick={()=>{}}
    >
        <span className={`flex-1`}>{title}</span>
    </button>
  )
}
