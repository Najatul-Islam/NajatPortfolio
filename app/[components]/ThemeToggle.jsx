'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
      const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div>
       <button
      onClick={() =>
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }
      className="py-2.5 px-3.5 light: bg-amber-50 text-black dark:bg-blue-200 rounded-full"
    > 
      {theme === 'dark' ? ' Dark' : ' Light'}
    </button>
    </div>
  )
}

export default ThemeToggle
