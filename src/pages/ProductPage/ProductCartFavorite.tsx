import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'

import Button from '@/UI/Button'

const ProductCartFavorite = () => {
  return (
    <div className="flex gap-5 items-center">
      <Button
        text="Добавить в корзину"
        textcolor="text-white"
        bgcolor="bg-[#d8218f]"
        hoverbgcolor="hover:bg-[#EC008C]"
      ></Button>
      {true ? (
        <AiOutlineHeart color="red" size={40} cursor="pointer" />
      ) : (
        <AiFillHeart color="red" size={40} />
      )}
    </div>
  )
}

export default ProductCartFavorite
