import { FC } from 'react'
import Select from 'react-select'

interface CustomSelectProps {
  styles?: any
  options?: any
  formatOptionLabel?: any
  placeholder?: string
  isMulti: boolean
}

const CustomSelect: FC<CustomSelectProps> = ({
  styles,
  options,
  formatOptionLabel,
  placeholder,
  isMulti,
}) => {
  return (
    <>
      <Select
        options={options}
        isMulti={isMulti}
        styles={styles}
        placeholder={placeholder}
        formatOptionLabel={formatOptionLabel}
        classNames={{
          placeholder: () => 'text-[16px] font-normal',
          option: () => 'text-md p-2 rounded-full',
          menuList: () => 'border-2 rounded-3xl no-scrollbar',
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 25,
          cursor: 'pointer',
          colors: {
            ...theme.colors,
            primary: '#1111111',
            borderColor: 'black',
            primary25: '#EEEEEE',
          },
        })}
      />
    </>
  )
}

export default CustomSelect
