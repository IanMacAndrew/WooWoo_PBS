'use client'

import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ReactNode } from 'react'

export function LegalPageLayout({
  title,
  eyebrow,
  updated,
  children,
}: {
  title: string
  eyebrow: string
  updated: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-6 px-6 sm:px-8 lg:px-12" style={{ background: '#1c0333' }}>
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#E9ECF2' }}>
            <ArrowLeft className="w-4 h-4" /> Back to WooWoo PBS
          </Link>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#c79529' }}>
            {eyebrow}
          </span>
        </div>
      </header>

      <section className="py-14 px-6 sm:px-8 lg:px-12" style={{ background: '#1c0333' }}>
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: '#fafafa' }}>
            {title}
          </h1>
          <p className="text-sm" style={{ color: '#c9c3d9' }}>Last updated: {updated}</p>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-3xl prose-legal">{children}</div>
      </section>

      <style>{`
        .prose-legal h2 {
          font-size: 1.35rem;
          font-weight: 900;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          color: #1a1a1a;
        }
        .prose-legal h3 {
          font-size: 1.05rem;
          font-weight: 800;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: #1a1a1a;
        }
        .prose-legal p {
          margin-bottom: 1rem;
          line-height: 1.7;
          color: #4a4a4a;
        }
        .prose-legal ul, .prose-legal ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          color: #4a4a4a;
          line-height: 1.7;
        }
        .prose-legal li {
          margin-bottom: 0.4rem;
        }
        .prose-legal strong {
          color: #1a1a1a;
        }
        .prose-legal .callout {
          background: #EFE3D2;
          border-left: 4px solid #c79529;
          border-radius: 8px;
          padding: 1rem 1.25rem;
          margin: 1.5rem 0;
        }
        .prose-legal .callout p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  )
}
