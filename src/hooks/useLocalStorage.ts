import { useEffect, useState } from 'react'

const useLocalStorage = <T>(key: string, initialValue: T) => {
  // console.log(initialValue)
  const [value, setValue] = useState(() => {
    let currentValue
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(initialValue)
      )
    } catch (error) {
      currentValue = initialValue
    }

    return currentValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}
export default useLocalStorage
