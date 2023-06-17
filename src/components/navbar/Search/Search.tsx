import { KeyboardEvent, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import useSearchState from '@/store/useSearchState'
import useLocalStorage from '@/hooks/useLocalStorage'

const Search = () => {
  library.add(faX)
  const navigate = useNavigate()

  const [value, setValue] = useLocalStorage<string>('search', '')
  const searchState = useSearchState()

  const clearInputHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setValue('')
  }

  const onEnterDownHandler = (event: KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      localStorage.removeItem('category')
      searchState.setChange(value)
      navigate('/search')
    }
  }

  return (
    <form
      onKeyDown={onEnterDownHandler}
      className="px-2 py-[6px] rounded-full border-black border-solid border-[2px] flex gap-2 items-center"
    >
      <AiOutlineSearch color="grey" size={23} className="" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="outline-none border-none sm:w-[100px] md:w-[250px] lg:w-[500px]"
        placeholder="Свитер..."
      />
      <button onClick={clearInputHandler}>
        <FontAwesomeIcon size="lg" icon={faX} className="cursor-pointer" />
      </button>
    </form>
  )
}

export default Search
