"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect, useState, ReactNode } from "react"

interface ThemeProviderProps {
  children: ReactNode;
  props: any;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}