import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useForm, FieldValues, useWatch } from 'react-hook-form'

import useUserLogin from '@/store/useUserLogin'
import MainInfo from './MainInfo'
import TypeInfo from './TypeInfo'
import DescriptionInfo from './DescriptionInfo'
import PhotosInfo from './PhotosInfo'
import Button from '@/UI/Button'
import * as api from '@/api/products'

const SellPage = () => {
  const { userLogin, ready } = useUserLogin()
  const [photoLink, setPhotoLink] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      price: null,
      category: '',
      description: '',
      type: '',
      colors: [],
      sizes: [],
      photos: [],
    },
  })

  const onSubmit = (data: FieldValues) => {
    reset()
  }

  const onAddPhotoHandler = async () => {
    const { data: filename } = await api.postPhotoLink(photoLink)
    setValue('photos', [...watch('photos'), filename])

    setPhotoLink('')
  }

  if (!userLogin.email && ready) {
    return <Navigate to="/" />
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-start gap-10"
    >
      <div className="text-[32px] w-full gap-2 font-semibold border-b-[0.4px] border-solid border-black">
        Sell your wears
      </div>
      <div className="w-full flex flex-col items-center gap-10">
        <div className="grid grid-cols-2 w-full gap-3">
          <MainInfo
            register={register}
            errors={errors}
            control={control}
            watch={watch}
          />
          <TypeInfo register={register} errors={errors} />
        </div>
        <PhotosInfo
          setPhotoLink={setPhotoLink}
          photoLink={photoLink}
          register={register}
          errors={errors}
          control={control}
          watch={watch}
          onAddPhotoHandler={onAddPhotoHandler}
        />
        <DescriptionInfo register={register} id="description" />
      </div>
      <Button
        bgcolor="bg-[#e12649]"
        hoverbgcolor="hover:bg-[#ef3356]"
        textcolor="text-white"
      >
        <div>Create</div>
      </Button>
    </form>
  )
}

export default SellPage
