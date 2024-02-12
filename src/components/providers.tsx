"use client";

import React from 'react'
import { ThemeProvider } from './theme-provider'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from './ui/sonner';

export default function providers({ children} : {children: React.ReactNode}) {

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
    </QueryClientProvider>
  )
}