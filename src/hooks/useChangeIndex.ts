import { useState } from 'react'

export interface IMouseProps {
  x: number
  y: number
}
const useChangeIndex = () => {
  const [imageIndex, setImageIndex] = useState(0)

  return { imageIndex, setImageIndex }
}

export default useChangeIndex
