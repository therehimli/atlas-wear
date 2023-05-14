import { FormEvent, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom'

import Button from '@/components/modals/UI/Button'
import { formats, modules } from '@/data/reactQuill'

const SellPage = () => {
  const [title, setTitle] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [genre, setGenre] = useState<string>('')
  const [files, setFiles] = useState<FileList | null>()
  const [description, setDescription] = useState<string>('')

  return (
    <form className="flex flex-col gap-4 items-center">
      <div className="flex gap-4 w-full justify-between items-center">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full h-[40px] outline-none border-solid border-[1px] border-neutral-400 p-4 rounded-lg "
          type="title"
          name="files"
          placeholder={'Название'}
        />
        <input
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          className="w-full h-[40px] outline-none border-solid border-[1px] border-neutral-400 p-4 rounded-lg "
          type="price"
          name="files"
          placeholder={'Цена'}
        />
        <input
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
          className="w-full h-[40px] outline-none border-solid border-[1px] border-neutral-400 p-4 rounded-lg "
          type="price"
          name="files"
          placeholder={'Жанр'}
        />
      </div>
      <input
        className="w-full"
        type="file"
        name="files"
        onChange={(event) => setFiles(event.target.files)}
      />
      <ReactQuill
        className="w-full"
        value={description}
        onChange={(value) => setDescription(value)}
        formats={formats}
        modules={modules}
      />
      <Button
        text="Завершить"
        bgcolor="bg-[#111111]"
        textcolor="text-white"
        hoverbgcolor=""
      />
    </form>
  )
}

export default SellPage
