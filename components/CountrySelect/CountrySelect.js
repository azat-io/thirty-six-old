import React from 'react'

import { useTranslation } from 'react-i18next'

import styled from 'styled-components'

import map from 'lodash/map'
import sortBy from 'lodash/sortBy'

import Select from 'components/Select'

import countries from './countries'

const StyledFlag = styled.svg`
  margin-right: 8px;
`

const CountrySelect = props => {
  const [t] = useTranslation('countries')
  const options = sortBy(map(countries, ({ name, value, icon }) => ({
    name: t(name),
    value,
    view: () => (
      <StyledFlag width={'12'} height={'12'}>
        <use xlinkHref={icon.url} />
      </StyledFlag>
    ),
  })), 'name')
  return (
    <Select
      {...props}
      options={options}
    />
  )
}

export default CountrySelect
