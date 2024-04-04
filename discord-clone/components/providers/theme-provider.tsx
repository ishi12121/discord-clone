/**
 * The function `ThemeProvider` is a wrapper component that provides theming functionality using the
 * Next.js `ThemeProvider` from the `next-themes` package in a TypeScript React application.
 * @param {ThemeProviderProps}  - The `ThemeProvider` component is a custom wrapper component that
 * utilizes the `ThemeProviderProps` type from the `next-themes` package. It takes in the following
 * parameters:
 * @returns The `ThemeProvider` component is being returned, which wraps the `NextThemesProvider`
 * component and passes down any children and props it receives.
 */
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
