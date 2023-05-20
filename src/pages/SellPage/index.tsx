import { AiOutlinePlus } from 'react-icons/ai'
import Select, { StylesConfig } from 'react-select'

import Input from '@/UI/Input'
import { ISizeList, sizeList } from '@/data/sizeList'
import Button from '@/UI/Button'

const SellPage = () => {
  const customStyles: StylesConfig<ISizeList, true> = {
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: '',
      padding: '15px',
      boxShadow: 'none',
      borderRadius: '999px',
      border: '2px solid rgba(128, 128, 128, 0.2)',
      '&:hover': {
        borderColor: 'black',
      },
    }),
  }

  return (
    <div className="flex flex-col justify-center items-start gap-10">
      <div className="text-[32px] w-full gap-2 font-semibold border-b-[0.4px] border-solid border-black">
        Sell your wears
      </div>
      <div className="w-full flex items-center justify-between gap-10">
        <div className="grid grid-cols-2 w-full gap-3">
          <Input value="dsadsa" label="Title" />
          <Input value="dsadsa" label="Price" />
          <Input value="dsadsa" label="Category" />
          <Input value="dsadsa" label="Gender" />
          <Input value="dsadsa" label="Description" />
          <Select
            placeholder="Select your sizes..."
            isMulti
            options={sizeList}
            styles={customStyles}
          />
        </div>
        <div className="flex flex-col items-center w-[350px] px-24 py-[90px] border-2 rounded-xl cursor-pointer hover:translate-y-[-3px]">
          <AiOutlinePlus size={30} />
          <div className="">Upload images</div>
        </div>
      </div>
      <Button
        bgcolor="bg-[#e12649]"
        hoverbgcolor="hover:bg-[#ef3356]"
        textcolor="text-white"
      >
        <div>Create</div>
      </Button>
    </div>
  )
}

export default SellPage
