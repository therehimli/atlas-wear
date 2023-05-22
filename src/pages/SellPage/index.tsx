import { Navigate } from 'react-router-dom'
import { useForm, FieldValues } from 'react-hook-form'

import useUserLogin from '@/store/useUserLogin'
import MainInfo from './MainInfo'
import TypeInfo from './TypeInfo'
import DescriptionInfo from './DescriptionInfo'
import PhotosInfo from './PhotosInfo'
import Button from '@/UI/Button'

const SellPage = () => {
  const { userLogin, ready } = useUserLogin()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      price: null,
      category: '',
      gender: '',
      description: '',
      photoLink: '',
    },
  })

  if (!userLogin.email && ready) {
    return <Navigate to="/" />
  }

  const onSubmit = () => {}

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-start gap-10"
    >
      {/* <div className="text-[32px] w-full gap-2 font-semibold border-b-[0.4px] border-solid border-black">
        Sell your wears
      </div>
      <div className="w-full flex flex-col items-center gap-10">
        <div className="grid grid-cols-2 w-full gap-3">
          <MainInfo register={register} errors={errors} />
          <TypeInfo />
        </div>
        <div className="w-full flex justify-between gap-5">
          <DescriptionInfo
            register={register}
            id="price"
            required={true}
            errors={errors}
          />
          <PhotosInfo register={register} errors={errors} />
        </div>
      </div>
      <Button
        bgcolor="bg-[#e12649]"
        hoverbgcolor="hover:bg-[#ef3356]"
        textcolor="text-white"
      >
        <div>Create</div>
      </Button> */}
    </form>
  )
}

export default SellPage
