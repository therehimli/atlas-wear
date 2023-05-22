import useCountries from '@/hooks/useCountries'
import LanguageSelect from './LanguageSelect'
import { languagesList } from '@/data/listData'

const LanguageModalContent: React.FC = () => {
  const { getAll } = useCountries()

  return (
    <>
      <div className="flex flex-col gap-4">
        <LanguageSelect options={languagesList} placeholder="Language" />
        <LanguageSelect options={getAll()} placeholder="Currency" />
      </div>
    </>
  )
}

export default LanguageModalContent
