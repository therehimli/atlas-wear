import React from 'react'
import Select from 'react-select'
import './Select.scss'

interface LanguageSelectProps {
  options: any
  placeholder: string
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  options,
  placeholder,
}) => {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      classNamePrefix="custom-select"
      classNames={{
        control: () => 'p-2 rounded-full',
        input: () => 'text-lg',
        option: () => 'text-lg rounded-full',
        menuList: () => 'border-2 rounded-3xl p-2',
      }}
      formatOptionLabel={(option: any) => (
        <div
          className="
          flex justify-between items-center cursor-pointer"
        >
          <div>{option.label}</div>
          <div className="text-xl">{option.flag}</div>
        </div>
      )}
      theme={(theme) => ({
        ...theme,
        borderRadius: 25,
        cursor: 'pointer',
        colors: {
          ...theme.colors,
          primary: '#EEEEEE',
          borderColor: 'black',
          primary25: '#EEEEEE',
        },
      })}
    />
  )
}

export default LanguageSelect
