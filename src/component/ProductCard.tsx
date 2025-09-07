'use client'
import { BadgeInfo } from 'lucide-react'

export interface ProductType {
  title: string
  image: string
  discount?: number
  discountedPrice?: number
  price: number
}

interface PropsType {
  product: ProductType
}

const ProductCard: React.FC<PropsType> = ({ product }) => {
  const { title, image, discount, discountedPrice, price } = product

  const handleAddToCart = () => {
    console.log(`Add ${title} to cart`)
  }

  const handleShowProductInfo = () => {
    console.log(`View details for ${title}`)
  }

  return (
    <div className="rounded-2xl border-[#14a085] border bg-white p-[6px]">
      <div className="relative flex h-[180px] w-full items-center justify-center rounded-xl p-4">
        <img src={image} alt={`${title} image`} className="max-h-full max-w-full object-contain" />
        {discount && (
          <span className="absolute top-2 left-2 rounded-md bg-[#14a085] px-2 py-1 text-sm text-white">
            -{discount}%
          </span>
        )}
      </div>

      <div className="p-2 pt-0">
        <h3 className="my-2 line-clamp-2 text-sm font-medium sm:h-12">{title}</h3>

        <div className="mb-2 flex items-center">
          <span className="mr-2 text-lg font-medium text-[#14a085]">PKR {price}</span>
          {discountedPrice && (
            <span className="font-medium text-[#C9C9C9] line-through">PKR {discountedPrice}</span>
          )}
        </div>

        <div className="flex gap-[10px]">
          <button
            onClick={handleShowProductInfo}
            className="rounded-md bg-blue-50 p-2 hover:bg-[#e1e2e6] focus:outline-[#e1e2e6]"
            aria-label={`View details of ${title}`}
          >
            <BadgeInfo color="#C9C9C9" />
          </button>
          <button
            onClick={handleAddToCart}
            className="w-full rounded-md bg-blue-50 py-[6px] font-medium text-[#1C7690] hover:bg-[#e1e2e6] focus:outline-[#e1e2e6]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard