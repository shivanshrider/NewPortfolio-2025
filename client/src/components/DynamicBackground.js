'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Dynamic3D = dynamic(() => import('./DynamicBackground3D'), { ssr: false })

const DynamicBackground = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null
  return <Dynamic3D />
}

export default DynamicBackground 