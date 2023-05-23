import { SlCloudUpload } from 'react-icons/sl'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import Input from '@/UI/Input'
import Button from '@/UI/Button'
import { FC } from 'react'

interface PhotosInfoProps {
  register: UseFormRegister<FieldValues>
  errors?: FieldErrors
  watch: any
  setPhotoLink: (photoLink: string) => void
  photoLink: string
  control: any
  onAddPhotoHandler: () => void
}

const PhotosInfo: FC<PhotosInfoProps> = ({
  register,
  errors,
  watch,
  photoLink,
  setPhotoLink,
  onAddPhotoHandler,
  control,
}) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex gap-2 items-center">
        <Input
          label="Add using a link"
          register={register}
          errors={errors}
          id="photoLink"
          formatPrice={false}
          value={photoLink}
          setValue={setPhotoLink}
          control={control}
        />
        <div className="w-52">
          <Button
            bgcolor="bg-neutral-300"
            hoverbgcolor="hover:bg-neutral-200"
            textcolor="text-black"
            type="button"
            disabled={watch('photos').length > 9}
            onSubmit={onAddPhotoHandler}
          >
            <div>Add photo</div>
          </Button>
        </div>
      </div>

      <div className="flex gap-5 items-center">
        <div className="grid grid-cols-5 gap-2 ">
          {watch('photos').length > 0 &&
            watch('photos').map((link: string, i: number) => (
              <div
                key={i}
                className="flex flex-col items-center h-[163px] w-[178px] cursor-pointer hover:translate-y-[-3px]"
              >
                <img
                  src={'http://localhost:4000/uploads/' + link}
                  className="w-full h-full rounded-2xl border-2"
                />
              </div>
            ))}
        </div>

        <div className="flex flex-col items-center w-[120px] py-10 px-20 border-2 rounded-xl cursor-pointer hover:translate-y-[-3px]">
          <SlCloudUpload size={30} />
          <div className="">Upload photos</div>
        </div>
      </div>
    </div>
  )
}

export default PhotosInfo
