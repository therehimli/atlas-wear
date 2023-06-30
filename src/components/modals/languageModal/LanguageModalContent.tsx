import { useTranslation } from 'react-i18next'

import LanguageSelect from './LanguageSelect'
import { currencyList, languagesList } from '@/data/listData'

const LanguageModalContent: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="text-[22px] font-bold text-neutral-500">
          {t('choose-language')}
        </p>
        <LanguageSelect options={languagesList} placeholder="Language" />
        <p className="text-[22px] font-bold text-neutral-500">
          {t('choose-currency')}
        </p>
        <LanguageSelect options={currencyList} placeholder="Currency" />
      </div>
    </>
  )
}

export default LanguageModalContent
