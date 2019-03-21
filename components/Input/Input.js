import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { darken } from 'polished'

const StyledInput = styled.input`
  display: block;
  font-size: 15px;
  color: ${({ theme }) => theme.textColor};
  font-weight: normal;
  border: ${({ theme }) => theme.border};
  border-radius: 8px;
  padding: 8px;
  outline: 0;

  &:hover,
  &:active,
  &:focus {
    border-color: ${({ theme }) => darken(0.75, theme.primaryColor)};
    transition: all 0.5s;
  }
`

const Input = ({ focus, ...props }) => {
  const inputRef = useRef(null)
  if (focus) {
    useEffect(() => {
      inputRef.current.focus()
    }, [])
  }
  return (
    <StyledInput
      ref={inputRef}
      {...props}
    />
  )
}

Input.propTypes = {
  focus: PropTypes.bool,
}

export default Input
