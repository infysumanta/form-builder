"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

/**
 * Provides a theme for the application.
 *
 * @param children - The child components to be wrapped by the theme provider.
 * @param props - Additional props to be passed to the underlying NextThemesProvider component.
 * @returns The wrapped child components with the theme provider applied.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
