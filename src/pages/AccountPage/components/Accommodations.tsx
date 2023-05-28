import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import Button from '../UI/Button'
import * as api from '@/api/accommodations'
import useAccommodationsStore from '@/store/useAccommodationsStore'

const Accommodations = () => {
  const { accommodations, setAccommodations } = useAccommodationsStore()

  useEffect(() => {
    const getAccommodationsHandler = async () => {
      try {
        const { data } = await api.getAccommodations()

        setAccommodations(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAccommodationsHandler()
  }, [])

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
        {accommodations.length > 0 &&
          accommodations.map((accommodation) => (
            <Link
              to={`/account/accommodations/${accommodation._id}`}
              className="w-full flex gap-3 border-2 p-2 rounded-3xl shadow-md"
              key={accommodation._id}
            >
              <div className="w-[250px] h-[200px]">
                <img
                  className="w-full h-full"
                  src={`http://localhost:4000/uploads/${accommodation.photos[0]}`}
                  alt=""
                />
              </div>

              <div className="w-full h-[200px] flex flex-col gap-1">
                <div className="flex items-center justify-between gap-5">
                  <h4 className="font-semibold text-xl">
                    {accommodation.title}
                  </h4>
                  <p className="font-bold">{accommodation.price}₽</p>
                </div>
                <h4 className="text-sm overflow-hidden">
                  {accommodation.description}
                </h4>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Accommodations
