import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { PuffLoader } from 'react-spinners'

import Button from '../UI/Button'
import {
  getAccommodationsHandler,
  deleteAccommodationHandler,
} from '@/api/accommodations'
import { Product } from '@/types/productTypes'

const Accommodations = () => {
  const client = useQueryClient()

  const {
    data: accommodations,
    isSuccess,
    isLoading,
  } = useQuery({
    queryFn: getAccommodationsHandler,
    queryKey: ['accommodations'],
  })

  const { mutate: deleteAccommodation } = useMutation({
    mutationFn: deleteAccommodationHandler,
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ['accommodations'],
      })
    },
  })

  if (isLoading) return <PuffLoader color="#36d7b7" />

  return (
    <div className="flex w-full flex-col gap-10">
      <Link to="/sell" className="flex items-center w-80 self-center gap-1 ">
        <Button
          bgcolor="bg-[#e12649]"
          hoverbgcolor="hover:bg-[#FF395C]"
          textcolor="text-white"
        >
          <div className="flex item-center gap-2 rounded-full">
            <AiOutlinePlus size={27} />
            <div>Разместить объявление</div>
          </div>
        </Button>
      </Link>
      <div className="flex flex-col w-full gap-2">
        {isSuccess &&
          accommodations.map((accommodation: Product) => (
            <div
              key={accommodation._id}
              className="w-full flex gap-3 border-2 p-2 rounded-3xl shadow-md"
            >
              <div className="w-[250px] h-[200px]">
                {accommodation.photos.length > 0 ? (
                  <img
                    className="w-full h-full"
                    src={`http://localhost:4000/uploads/images/${accommodation.photos[0]}`}
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
                    {accommodation.title}
                  </h2>
                  <h4 className="text-sm overflow-hidden">
                    {accommodation.description}
                  </h4>
                </div>
                <div className="flex flex-col justify-between items-end border-l-2 p-2">
                  <p className="font-bold text-2xl">{accommodation.price}₽</p>
                  <div className="flex gap-2 items-center w-[310px]">
                    <Link
                      to={`/account/accommodations/${accommodation._id}`}
                      className="p-2 bg-green-500 hover:bg-green-600 rounded-full text-white"
                    >
                      редактировать
                    </Link>
                    <button
                      onClick={() => deleteAccommodation(accommodation._id)}
                      className="p-2 bg-red-500 hover:bg-red-600 rounded-full text-white"
                    >
                      Удалить объявление
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Accommodations
