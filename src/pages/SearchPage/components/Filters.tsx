import Select from 'react-select'

import { genderList, matchList } from '@/data/listData'
import { FC } from 'react'
import { Product } from '@/types/productTypes'

interface FiltersProps {
  setLowerPrice: (lowerPrice: string) => void
  lowerPrice: string
  setHighPrice: (highPrice: string) => void
  highPrice: string
  setGender: (gender: string) => void
  gender: string
  setMatch: (match: string) => void
  match: string
}

const Filters: FC<FiltersProps> = ({
  setLowerPrice,
  lowerPrice,
  setHighPrice,
  highPrice,
  setGender,
  gender,
  setMatch,
  match,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <Select
        value={matchList?.find((c: any) => c.value === match)}
        onChange={(e: any) =>
          e.value ? setMatch!(e.value) : setMatch!(e.map((c: any) => c.value))
        }
        placeholder="Best match"
        options={matchList}
      />
      <div className="flex flex-col gap-2 ">
        <h2 className="text-[22px]">Price</h2>
        <div className="flex gap-2 items-center">
          <input
            value={lowerPrice}
            onChange={(e) => setLowerPrice(e.target.value)}
            type="text"
            placeholder="from"
            className="rounded-full outline-none border-neutral-300 border-[1px] border-solid text-[15px] p-2 w-32 h-10"
          />
          <input
            value={highPrice}
            onChange={(e) => setHighPrice(e.target.value)}
            type="text"
            placeholder="to"
            className="rounded-full outline-none border-neutral-300 border-[1px] border-solid text-[15px] p-2 w-32 h-10"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <h2 className="text-[22px]">Gender</h2>
        <div className="flex gap-2 items-center">
          <Select
            value={genderList?.find((c: any) => c.value === gender)}
            onChange={(e: any) =>
              e.value
                ? setGender!(e.value)
                : setGender!(e.map((c: any) => c.value))
            }
            placeholder="choose gender..."
            options={genderList}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Filters
