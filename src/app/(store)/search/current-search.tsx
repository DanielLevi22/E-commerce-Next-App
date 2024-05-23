'use client'
import { useSearchParams } from 'next/navigation'

export  function CurrentSearch() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')
  return (
    <div className='text-sm'>
      <p>Resultados para: <span className='font-semibold'>{query}</span></p>
    </div>

  )
}
