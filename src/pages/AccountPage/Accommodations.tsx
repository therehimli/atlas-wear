import { AiOutlinePlus } from 'react-icons/ai'

import Button from '@/UI/Button'
import { Link } from 'react-router-dom'

const Accommodations = () => {
  return (
    <div className="">
      <Button
        bgcolor="bg-[#e12649]"
        hoverbgcolor="hover:bg-[#ef3356]"
        textcolor="text-white"
      >
        <Link to="/sell" className="flex items-center gap-1">
          <AiOutlinePlus size={27} />
          <div>Add new accommodation</div>
        </Link>
      </Button>
    </div>
  )
}

export default Accommodations
