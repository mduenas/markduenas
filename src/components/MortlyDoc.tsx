import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export function MortlyDoc({
  kicker,
  title,
  lede,
  children,
  appSlug = 'mortlymd',
  appName = 'Mortly MD',
}: {
  kicker: string
  title: string
  lede: string
  children: ReactNode
  appSlug?: string
  appName?: string
}) {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href={`/projects/${appSlug}`}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {appName}
          </Link>
          <Link href="/" className="text-sm font-semibold">
            <span className="text-blue-500">Mark</span>
            <span className="text-slate-300"> Duenas</span>
          </Link>
        </div>

        <header className="mb-10">
          <div className="flex items-center gap-4 mb-5">
            <Image
              src={`/images/projects/${appSlug}/icon.png`}
              alt={`${appName} icon`}
              width={64}
              height={64}
              className="rounded-2xl"
            />
            <p className="text-sm font-medium text-emerald-400">{kicker}</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-slate-400 leading-relaxed">{lede}</p>
        </header>

        <div className="space-y-6">{children}</div>
      </div>
    </div>
  )
}

export function MortlySection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
      <div className="space-y-3 text-slate-300 leading-relaxed">{children}</div>
    </div>
  )
}
