import { Product } from '@/types/products.interface'
import { useCallback, useEffect, useState } from 'react'

export interface IMouseProps {
  x: number
  y: number
}
const useHandleMouseMove = (product: Product, imageRef: any) => {
  const [mousePos, setMousePos] = useState<IMouseProps>({ x: 0, y: 0 })
  const [imageIndex, setImageIndex] = useState(0)

  const handleMouseFn = useCallback(
    (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY })
      if (product.images.length > 1 && mousePos.x > 407) {
        setImageIndex(0)
      }
      if (product.images.length > 1 && mousePos.x > 437) {
        setImageIndex(1)
      }
      if (product.images.length > 2 && mousePos.x > 467) {
        setImageIndex(2)
      }
      if (product.images.length > 3 && mousePos.x > 497) {
        setImageIndex(3)
      }
      if (product.images.length > 4 && mousePos.x > 527) {
        setImageIndex(4)
      }

      if (product.images.length > 1 && mousePos.x > 650) {
        setImageIndex(0)
      }
      if (product.images.length > 1 && mousePos.x > 680) {
        setImageIndex(1)
      }
      if (product.images.length > 2 && mousePos.x > 710) {
        setImageIndex(2)
      }
      if (product.images.length > 3 && mousePos.x > 740) {
        setImageIndex(3)
      }
      if (product.images.length > 4 && mousePos.x > 770) {
        setImageIndex(4)
      }

      if (product.images.length > 1 && mousePos.x > 840) {
        setImageIndex(0)
      }
      if (product.images.length > 1 && mousePos.x > 930) {
        setImageIndex(1)
      }
      if (product.images.length > 2 && mousePos.x > 960) {
        setImageIndex(2)
      }
      if (product.images.length > 3 && mousePos.x > 1000) {
        setImageIndex(3)
      }
      if (product.images.length > 4 && mousePos.x > 1030) {
        setImageIndex(4)
      }

      if (product.images.length > 1 && mousePos.x > 1093) {
        setImageIndex(0)
      }
      if (product.images.length > 1 && mousePos.x > 1123) {
        setImageIndex(1)
      }
      if (product.images.length > 2 && mousePos.x > 1156) {
        setImageIndex(2)
      }
      if (product.images.length > 3 && mousePos.x > 1189) {
        setImageIndex(3)
      }
      if (product.images.length > 4 && mousePos.x > 1215) {
        setImageIndex(4)
      }
    },
    [event]
  )

  useEffect(() => {
    if (imageRef.current)
      imageRef.current.addEventListener('mousemove', handleMouseFn)
  }, [mousePos])

  return { imageIndex, setImageIndex }
}

export default useHandleMouseMove
