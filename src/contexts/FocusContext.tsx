'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Focus = 'sales-marketing' | 'hrd' | 'resilience' | 'reinsurance' | 'accounting' | null

interface FocusContextValue {
  focus: Focus
  setFocus: (focus: Focus) => void
}

const FocusContext = createContext<FocusContextValue | undefined>(undefined)

export function FocusProvider({ children }: { children: ReactNode }) {
  const [focus, setFocus] = useState<Focus>(null)
  return (
    <FocusContext.Provider value={{ focus, setFocus }}>
      {children}
    </FocusContext.Provider>
  )
}

export function useFocus() {
  const ctx = useContext(FocusContext)
  if (!ctx) throw new Error('useFocus must be used within a FocusProvider')
  return ctx
}
