import useCountries from '@/hooks/useCountries'
import LanguageSelect from './LanguageSelect'
import { languages } from '@/data/LanguagesList'

const LanguageModalContent: React.FC = () => {
  const { getAll } = useCountries()

  return (
    <>
      <div className="flex flex-col gap-4">
        <LanguageSelect options={languages} placeholder="Language" />
        <LanguageSelect options={getAll()} placeholder="Currency" />
      </div>
    </>
  )
}

export default LanguageModalContent
