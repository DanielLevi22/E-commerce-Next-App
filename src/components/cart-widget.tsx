'use client'
import { useCart } from '@/context/cart-context'
import { ShoppingBagIcon } from 'lucide-react'

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBagIcon className="w-4 h-4" />
      <span className="text-sm">Cart ({items.length})</span>
    </div>
  )
}
