"use client"


import {ThemeProvider as NextThemesProvider , ThemeProviderProps as NextThemesProviderProps} from 'next-themes'
import React from 'react'

export function ThemeProvider({children}:NextThemesProviderProps) {
    return (
        <NextThemesProvider attribute="class" defaultTheme='system' enableSystem>
            {children}
        </NextThemesProvider>
    )
}