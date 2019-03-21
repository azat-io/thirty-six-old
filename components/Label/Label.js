import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledLabel = styled.label`
  font-weight: normal;
  margin: 0;
`

const Label = ({ children }) => (
  <StyledLabel>{ children }</StyledLabel>
)

Label.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Label
