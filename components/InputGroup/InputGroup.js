import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledInputGroup = styled.div`
  display: grid;
  grid-template-columns: 150px 200px;
  align-items: center;
  margin-bottom: 8px;
`

const InputGroup = ({ children }) => (
  <StyledInputGroup>{ children }</StyledInputGroup>
)

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InputGroup
