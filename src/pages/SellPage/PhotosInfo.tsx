import { SlCloudUpload } from 'react-icons/sl'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import Input from '@/UI/Input'
import Button from '@/UI/Button'
import { FC } from 'react'

interface PhotosInfoProps {
  register: UseFormRegister<FieldValues>
  errors?: FieldErrors
}

const PhotosInfo: FC<PhotosInfoProps> = ({ register, errors }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center w-[574px] py-[52px] border-2 rounded-xl cursor-pointer hover:translate-y-[-3px]">
        <SlCloudUpload size={30} />
        <div className="">Upload photos</div>
      </div>
      <div className="flex gap-2 items-center">
        <Input
          label="Add using a link"
          register={register}
          errors={errors}
          id="photo-link"
          formatPrice={false}
          required={false}
        />
        <div className="w-52">
          <Button
            bgcolor="bg-neutral-300"
            hoverbgcolor="hover:bg-neutral-200"
            textcolor="text-black"
          >
            <div>Add photo</div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PhotosInfo
