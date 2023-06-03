import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useForm, FieldValues } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import MainInfo from './components/MainInfo'
import PhotosInfo from './components/PhotosInfo'
import StateInfo from './components/StateInfo'
import GenderInfo from './components/GenderInfo'
import DescriptionInfo from './components/DescriptionInfo'
import Button from '@/UI/Button'
import {
  editAccommodationHandler,
  createAccommodationHandler,
  getAccommodationIdHandler,
} from '@/api/accommodations'

const SellPage = () => {
  const [photoLink, setPhotoLink] = useState('')
  const [redirect, setRedirect] = useState(false)
  const { id } = useParams()
  const client = useQueryClient()

  const {
    register,
    handleSubmit,
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
      gender: '',
      contactEmail: '',
      contactNumber: null,
      state: '',
      delivery: '',
      city: '',
      colors: [],
      sizes: [],
      photos: [],
    },
  })

  const { mutate: editAccommodation } = useMutation({
    mutationFn: editAccommodationHandler,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['accommodations'] })
    },
  })

  const { mutate: createAccommodation } = useMutation({
    mutationFn: createAccommodationHandler,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['accommodations'] })
    },
  })

  const onSaveProduct = async (fields: FieldValues) => {
    if (id) {
      const data = { id, ...fields }
      editAccommodation(data)

      setRedirect(true)
      reset()
    } else {
      createAccommodation(fields)

      setRedirect(true)
      reset()
    }
  }

  useEffect(() => {
    if (!id) return

    const editAccommodation = async () => {
      const { data } = await getAccommodationIdHandler(id)
      reset(data)
    }
    editAccommodation()
  }, [id])

  if (redirect) {
    return <Navigate to="/account/accommodations" />
  }

  if (!localStorage.getItem('token')) return <Navigate to="/" />

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
          <MainInfo register={register} errors={errors} control={control} />
          <GenderInfo register={register} errors={errors} />
          <StateInfo register={register} />
        </div>
        <PhotosInfo
          setPhotoLink={setPhotoLink}
          photoLink={photoLink}
          control={control}
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
