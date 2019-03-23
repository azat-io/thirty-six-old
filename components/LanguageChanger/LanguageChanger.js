import React from 'react'

import { useTranslation } from 'react-i18next'

import Select from 'components/Select'

const LanguageChanger = () => {
  const { i18n } = useTranslation()
  const languages = [{
    name: 'English',
    value: 'en',
  }, {
    name: 'Русский',
    value: 'ru',
  }]
  const onChange = ({ target: { value } }) => {
    i18n.changeLanguage(value)
  }
  return (
    <div>
      <Select
        name={'language'}
        value={'en'}
        options={languages}
        onChange={onChange}
        style={{
          position: 'absolute',
          width: 100,
          top: 20,
          right: 20,
        }}
      />
    </div>
  )
}

export default LanguageChanger
