'use client'
import { useCart } from '@/context/cart-context'

interface AddToCartButtonProps {
  productId: number
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleProductInToCart() {
    addToCart(productId)
  }
  return (
    <button
      onClickCapture={handleProductInToCart}
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full  bg-emerald-600 text-white font-semibold"
    >
      Adicionar ao Carrinho
    </button>
  )
}
