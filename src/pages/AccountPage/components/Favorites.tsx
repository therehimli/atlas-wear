import { useQuery } from '@tanstack/react-query'
import { PuffLoader } from 'react-spinners'

import { getFavoritesHandler } from '@/api/favorites'
import { FavoriteType } from '@/types/favoriteTypes'

const Favorites = () => {
  const { data: favorites, isLoading } = useQuery({
    queryFn: getFavoritesHandler,
    queryKey: ['favorites', 'products'],
  })

  if (isLoading) return <PuffLoader color="#36d7b7" />

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex flex-col w-full gap-2">
        {favorites.map((favorite: FavoriteType) => (
          <div
            key={favorite._id}
            className="w-full flex gap-3 border-2 p-2 rounded-3xl shadow-md"
          >
            <div className="w-[250px] h-[200px]">
              {favorite.product.photos.length > 0 ? (
                <img
                  className="w-full h-full"
                  src={`http://localhost:4000/uploads/images/${favorite.product.photos[0]}`}
                  alt="accommodation"
                />
              ) : (
                <img
                  className="w-full h-full"
                  src={`http://localhost:4000/uploads/images/defaultProduct.png`}
                  alt="accommodation"
                />
              )}
            </div>

            <div className="w-full h-[200px] flex justify-between gap-1">
              <div className="flex flex-col">
                <h2 className="font-semibold text-xl">
                  {favorite.product.title}
                </h2>
                <h4 className="text-sm overflow-hidden">
                  {favorite.product.description}
                </h4>
              </div>
              <div className="flex flex-col justify-between items-end border-l-2 p-2">
                <p className="font-bold text-2xl">{favorite.product.price}₽</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
