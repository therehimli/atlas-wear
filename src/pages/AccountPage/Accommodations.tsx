import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import Button from '@/UI/Button'

const Accommodations = () => {
  return (
    <div className="">
      <Link to="/sell" className="flex items-center gap-1">
        <Button
          bgcolor="bg-[#e12649]"
          hoverbgcolor="hover:bg-[#ef3356]"
          textcolor="text-white"
        >
          <div className="flex item-center gap-2">
            <AiOutlinePlus size={27} />
            <div>Add new accommodation</div>
          </div>
        </Button>
      </Link>
    </div>
  )
}

export default Accommodations
