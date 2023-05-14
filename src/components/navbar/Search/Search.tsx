import { ChangeEvent, useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { AiOutlineSearch } from 'react-icons/ai'
import { debounce } from 'lodash'

import useSearchModalToggle from '@/store/useSearchModalToggle'
import useSearchState from '@/store/useSearchState'
import useLocalStorage from '@/hooks/useLocalStorage'

const Search = () => {
  library.add(faX)

  const [text, setText] = useState('')
  const [value, setValue] = useLocalStorage('search', text)

  const useModalSearch = useSearchModalToggle()
  const searchState = useSearchState()

  const changeHandler = useCallback(
    debounce((searchStorage) => {
      searchState.setChange(searchStorage)
    }, 800),
    []
  )
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    setValue(e.target.value)
    changeHandler(value)
  }

  const clearInputHandler = () => {
    setText('')
    searchState.setChange('')
    setValue('')
  }

  return (
    <div className="px-2 py-[6px] rounded-full border-black border-solid border-[2px] flex gap-2 items-center">
      <AiOutlineSearch color="grey" size={23} className="" />
      <input
        onFocus={() => useModalSearch.setOpen()}
        onBlur={() => useModalSearch.setClose()}
        value={value}
        onChange={(e) => onChangeInput(e)}
        type="text"
        className="outline-none border-none sm:w-[100px] md:w-[250px] lg:w-[500px]"
        placeholder="Pants..."
      />
      <button onClick={() => clearInputHandler()}>
        <FontAwesomeIcon size="lg" icon={faX} className="cursor-pointer" />
      </button>
    </div>
  )
}

export default Search
