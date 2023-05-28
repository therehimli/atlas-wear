import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useForm, FieldValues } from 'react-hook-form'

import useUserLogin from '@/store/useUserLogin'
import MainInfo from './components/MainInfo'
import DescriptionInfo from './components/DescriptionInfo'
import PhotosInfo from './components/PhotosInfo'
import Button from '@/UI/Button'
import * as api from '@/api/accommodations'
import StateInfo from './components/StateInfo'
import GenderInfo from './components/GenderInfo'

const SellPage = () => {
  const { userLogin, ready } = useUserLogin()
  const [photoLink, setPhotoLink] = useState('')
  const [redirect, setRedirect] = useState(false)
  const { id } = useParams()

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      price: null,
      category: '',
      description: '',
      gender: '',
      contactEmail: '',
      contactNumber: null,
      state: '',
      delivery: '',
      colors: [],
      sizes: [],
      photos: [],
    },
  })

  const onSaveProduct = async (fields: FieldValues) => {
    if (id) {
      const data: FieldValues & { id: string } = { id, ...fields }
      await api.editAccommodation<FieldValues>(data)
      setRedirect(true)
      reset()
    } else {
      const { data } = await api.createAccommodation<FieldValues>(fields)
      console.log(data)
      setRedirect(true)
      reset()
    }
  }

  useEffect(() => {
    if (!id) return

    const editAccommodation = async () => {
      const { data } = await api.getAccommodationId(id)
      reset(data)
    }
    editAccommodation()
  }, [id])

  if (!userLogin.email && ready) {
    return <Navigate to="/" />
  }

  if (redirect) {
    return <Navigate to="/account/accommodations" />
  }

  return (
    <form
      onSubmit={handleSubmit(onSaveProduct)}
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
          <GenderInfo register={register} errors={errors} />
          <StateInfo register={register} />
        </div>
        <PhotosInfo
          setPhotoLink={setPhotoLink}
          photoLink={photoLink}
          control={control}
          getValues={getValues}
          watch={watch}
          setValue={setValue}
        />
        <DescriptionInfo register={register} id="description" />
      </div>
      <Button
        bgcolor="bg-[#e12649]"
        hoverbgcolor="hover:bg-[#ef3356]"
        textcolor="text-white"
      >
        <div>{id ? 'Обновить' : 'Разместить'}</div>
      </Button>
    </form>
  )
}

export default SellPage
