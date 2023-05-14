import {
  FC,
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'

type User = {
  iat: number | null
  email: string
  id: string
}

interface userIsActiveState {
  userIsActive: User
  setUserIsActive: Dispatch<SetStateAction<User>>
}

const defaultState = {
  userIsActive: {
    iat: null,
    email: '',
    id: '',
  },
  setUserIsActive: (userIsActive: User | null) => {},
} as userIsActiveState

export const UserContext = createContext<userIsActiveState>(defaultState)

interface userContextProps {
  children: ReactNode
}

export const UserContextProvider: FC<userContextProps> = ({ children }) => {
  const [userIsActive, setUserIsActive] = useState<User>({
    iat: null,
    email: '',
    id: '',
  })

  return (
    <UserContext.Provider value={{ userIsActive, setUserIsActive }}>
      {children}
    </UserContext.Provider>
  )
}
