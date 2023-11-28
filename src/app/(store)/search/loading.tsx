'use client'

import { Skeleton } from '@/components/skeleton'
import { useSearchParams } from 'next/navigation'

export default function LoadingSearc() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')
  return (
    <div className="flex flex-col gap-4">
      <p>Resultados para:{query}</p>
      <div className=" grid grid-cols-3 gap-6">
        <Skeleton className="h-[420px]" />
        <Skeleton className="h-[420px]" />
        <Skeleton className="h-[420px]" />
        <Skeleton className="h-[420px]" />
        <Skeleton className="h-[420px]" />
        <Skeleton className="h-[420px]" />
      </div>
    </div>
  )
}
