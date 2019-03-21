import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { darken } from 'polished'

const StyledButton = styled.button`
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryContrastColor};
  border: ${({ theme }) => darken(0.025, theme.primaryColor)};
  border-radius: 8px;
  font-size: 14px;
  padding: 9px 12px;
  cursor: pointer;
  outline: 0;

  &:active,
  &:focus,
  &:hover {
    background: ${({ theme }) => darken(0.025, theme.primaryColor)};
    transition: all 0.3s;
  }
`

const Button = ({ children, ...props }) => (
  <StyledButton
    {...props}
  >
    { children }
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Button
