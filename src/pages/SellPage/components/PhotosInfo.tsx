import { SlCloudUpload } from 'react-icons/sl'
import { BiTrash } from 'react-icons/bi'
import {
  useWatch,
  Control,
  FieldValues,
  UseFormSetValue,
} from 'react-hook-form'
import { ChangeEvent, DragEvent, FC, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '@/UI/Button'
import {
  postProductPhotoLinkHandler,
  uploadProductPhotoHandler,
} from '@/api/accommodations'

interface PhotosInfoProps {
  setPhotoLink: (photoLink: string) => void
  photoLink: string
  control: Control<FieldValues>
  setValue: UseFormSetValue<FieldValues>
}

const PhotosInfo: FC<PhotosInfoProps> = ({
  photoLink,
  setPhotoLink,
  setValue,
  control,
}) => {
  const photosWatch = useWatch({ control, name: 'photos' })
  const [currentCard, setCurrentCard] = useState('')
  const { t } = useTranslation()

  const inputRef = useRef<HTMLInputElement | null>(null)

  const onInputFocus = () => {
    inputRef?.current?.focus()
  }

  const addPhotoLinkHandler = async () => {
    const { data: filename } = await postProductPhotoLinkHandler(photoLink)
    setValue('photos', [...photosWatch, filename])

    setPhotoLink('')
  }

  const uploadPhotoHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    const data = new FormData()

    for (let i = 0; i < files!.length; i++) {
      data.append('photos', files![i])
    }

    const { data: filenames } = await uploadProductPhotoHandler(data)
    setValue('photos', [...photosWatch, ...filenames])

    setPhotoLink('')
  }

  const onImageDelete = (link: string) => {
    setValue(
      'photos',
      photosWatch.filter((photo: string) => photo !== link)
    )
  }

  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    setValue('photos', [
      currentCard,
      ...photosWatch.filter((photo: string) => photo !== currentCard),
    ])
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex gap-2 items-center">
        <div className="relative w-full">
          <input
            value={photoLink}
            ref={inputRef}
            onChange={(e) => setPhotoLink(e.target.value)}
            className={`peer w-full p-4 text-[18px] pt-6 font-light bg-white border-2 rounded-full outline-none transition disabled:opacity-70 disabled:cursor-not-allowed hover:border-black focus:border-black `}
          />
          <label
            onClick={onInputFocus}
            className={`absolute cursor-text text-md duration-150 transform -translate-y-1 top-7 origin-[0] peer-placeholder-shown:scale-100 left-6 text-[16px] text-neutral-500 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 ml-2 peer-focus:-translate-y-6  ${
              photoLink ? '-translate-y-[24px] scale-75' : ''
            }`}
          >
            {t('photo-link')}
          </label>
        </div>
        <div className="w-52">
          <Button
            bgcolor="bg-neutral-300"
            hoverbgcolor="hover:bg-neutral-200"
            textcolor="text-black"
            type="button"
            disabled={photosWatch.length > 9}
            onSubmit={addPhotoLinkHandler}
          >
            <div>{t('add')}</div>
          </Button>
        </div>
      </div>

      <div className="flex items-center flex-wrap gap-2">
        {photosWatch.map((link: string, i: number) => (
          <div
            draggable
            onDragStart={(e) => setCurrentCard(link)}
            onDragOver={(e) => {
              e.preventDefault()
            }}
            onDrop={(e) => dropHandler(e)}
            key={i}
            className="w-[200px] h-[200px] relative cursor-grab"
          >
            <img
              src={'http://localhost:4000/uploads/images/' + link}
              className="w-full h-full rounded-2xl border-2 object-cover shadow-xl"
            />
            <BiTrash
              onClick={() => onImageDelete(link)}
              size={27}
              className="absolute cursor-pointer right-3 bottom-3 border-black border-[1px] border-solid rounded-md p-1"
            />
          </div>
        ))}

        <label className="flex flex-col items-center justify-center self-start shadow-xl px-[70px] py-[75px] border-2 rounded-xl cursor-pointer hover:translate-y-[-3px]">
          <input
            type="file"
            className="hidden"
            onChange={uploadPhotoHandler}
            multiple
          />
          <SlCloudUpload size={25} />
          <div className="text-[14px]">{t('upload')}</div>
        </label>
      </div>
    </div>
  )
}

export default PhotosInfo
