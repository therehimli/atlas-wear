import Select from 'react-select'
import { useTranslation } from 'react-i18next'

import useCurrencyToggle from '@/store/useCurrencyToggle'
import './Select.scss'

interface LanguageSelectProps {
  options: any
  placeholder: string
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  options,
  placeholder,
}) => {
  const { i18n } = useTranslation()
  const { toggleCurrency } = useCurrencyToggle()

  const onChange = (value: string) => {
    toggleCurrency(value)
    i18n.changeLanguage(value)
  }

  return (
    <Select
      options={options}
      onChange={(e: any) =>
        e.value ? onChange!(e.value) : onChange!(e.map((c: any) => c.value))
      }
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
