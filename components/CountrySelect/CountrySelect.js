import React from 'react'

import Select from 'components/Select'

import countries from './countries'

const CountrySelect = props => (
  <Select
    {...props}
    options={countries}
  />
)

export default CountrySelect
