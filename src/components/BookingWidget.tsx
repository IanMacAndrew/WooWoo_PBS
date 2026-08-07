'use client'

import { useState } from 'react'

export type Band = { minQty: number; maxQty: number; pricePerPerson: number; href: string }
export type DateOption = { label: string; hours?: string; bands: Band[] }

export function BookingWidget({
  dateOptions,
  singleBands,
  currency = 'RM',
}: {
  dateOptions?: DateOption[]
  singleBands?: Band[]
  currency?: string
}) {
  const options = dateOptions ?? (singleBands ? [{ label: '', bands: singleBands }] : [])
  const [dateIndex, setDateIndex] = useState(0)
  const bands = options[dateIndex]?.bands ?? []
  const maxQty = bands.length ? Math.max(...bands.map((b) => b.maxQty)) : 1
  const [qty, setQty] = useState(1)
  const band = bands.find((b) => qty >= b.minQty && qty <= b.maxQty) ?? bands[0]
  const total = band ? band.pricePerPerson * qty : 0

  return (
    <div className="mt-4 p-4 rounded-xl" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.12)' }}>
      {dateOptions && dateOptions.length > 1 && (
        <div className="flex gap-2 mb-3 flex-wrap">
          {dateOptions.map((d, i) => (
            <button
              key={d.label}
              onClick={() => {
                setDateIndex(i)
                setQty(1)
              }}
              className="text-xs font-semibold px-3 py-1.5 rounded-full gentle-animation"
              style={{ background: i === dateIndex ? '#1a1a1a' : '#EFE3D2', color: i === dateIndex ? '#fafafa' : '#1a1a1a' }}
            >
              {d.label}
            </button>
          ))}
        </div>
      )}
      {options[dateIndex]?.hours && (
        <p className="text-xs font-semibold mb-3" style={{ color: '#4a4a4a' }}>
          {options[dateIndex].hours}
        </p>
      )}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-7 h-7 rounded-full border flex items-center justify-center text-sm font-bold"
            style={{ borderColor: '#1a1a1a', color: '#1a1a1a' }}
            aria-label="Decrease quantity"
          >
            {'\u2212'}
          </button>
          <span className="text-sm font-bold w-6 text-center">{qty}</span>
          <button
            onClick={() => setQty((q) => Math.min(maxQty, q + 1))}
            className="w-7 h-7 rounded-full border flex items-center justify-center text-sm font-bold"
            style={{ borderColor: '#1a1a1a', color: '#1a1a1a' }}
            aria-label="Increase quantity"
          >
            +
          </button>
          <span className="text-xs text-muted-foreground ml-1">{qty === 1 ? 'person' : 'people'}</span>
        </div>
        <div className="text-sm font-black" style={{ color: '#1a1a1a' }}>
          {currency} {total.toLocaleString()}
          <span className="font-normal text-xs text-muted-foreground ml-1">total</span>
        </div>
      </div>
      {band && (
        <a
          href={band.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-center text-xs font-semibold px-4 py-2.5 rounded-full gentle-animation hover:-translate-y-0.5"
          style={{ background: '#1a1a1a', color: '#fafafa' }}
        >
          Book {qty} {qty === 1 ? 'seat' : 'seats'} {'\u2192'}
        </a>
      )}
    </div>
  )
}
