import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { Scrollbars } from 'react-custom-scrollbars'
import SVGInline from 'react-svg-inline'

import styled, { css, keyframes } from 'styled-components'
import { lighten } from 'polished'

import filter from 'lodash/filter'
import find from 'lodash/find'
import get from 'lodash/get'
import includes from 'lodash/includes'
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'
import map from 'lodash/map'
import split from 'lodash/split'
import toLower from 'lodash/toLower'
import trim from 'lodash/trim'

import selectSVG from './select-icon.svg'

const StyledSelect = styled.div`
  display: block;
  position: relative;
  background: ${({ theme }) => theme.primaryContrastColor};
  font-size: 15px;
  font-weight: normal;
`
const StyledValue = styled.div`
  color:
    ${({ theme, focused, ishidden }) => focused && !ishidden ? lighten(0.5, theme.textColor)
    : ishidden ? theme.primaryContrastColor : theme.textColor};
  border: ${({ theme, focused }) => focused ? `1px solid ${theme.primaryColor}` : theme.border};
  border-radius: 8px;
  padding: 8px 20px 8px 8px;
  min-height: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    border-color: ${({ theme }) => theme.primaryColor};
    transition: all 0.5s;
  }
`

const StyledSelectInput = styled.input`
  display: ${({ focused }) => focused ? 'block' : 'none'};
  position: absolute;
  background: transparent;
  color: ${({ theme }) => theme.textColor};
  top: 0;
  border: 0;
  padding: 8px;
  outline: 0;
`

const StyledOptionList = styled.div`
  position: absolute;
  width: 100%;
  border: ${({ theme }) => theme.border};
  border-radius: 8px;
  margin-top: 2px;
  z-index: 2;
`

const StyledOption = styled.div`
  display: block;
  background: ${({ theme, selected }) => selected ? lighten(0.1, theme.primaryColor) : theme.primaryContrastColor};
  color: ${({ theme, selected }) => selected ? theme.primaryContrastColor : theme.textColor};
  font-size: 15px;
  padding: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
  }

  &:only-child {
    border-radius: 8px;
  }

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryContrastColor};
    transition: all 0.3s;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
    top: 10px;
  }

  to {
    transform: rotate(180deg);
    top: 8px;
  }
`

const StyledSelectIcon = styled(SVGInline)`
  display: ${({ ishidden }) => ishidden ? 'none' : 'block'};
  position: absolute;
  color: rgba(0, 0, 0, 0.75);
  right: 10px;
  top: 10px;
  ${({ focused }) => focused && css`
    animation: ${rotate} 0.15s linear;
    animation-fill-mode: forwards;
  `}
`

const Select = ({
  options,
  value: currentValue,
  name: selectName,
  multiple,
  onChange,
  ...props
}) => {
  const [selectValue, setSelectValue] = useState(find(options, { value: currentValue }))
  const [focused, setFocused] = useState(false)
  const [filterValue, setFilterValue] = useState('')
  const inputRef = useRef(null)
  const onFilter = event => {
    setFilterValue(event.target.value)
  }
  const onFocus = () => {
    setFocused(true)
    setTimeout(() => {
      inputRef.current.focus()
    }, 0)
  }
  const onChangeValue = option => {
    const { value } = option
    setSelectValue(option)
    onChange({
      target: {
        name: selectName,
        value,
      },
    })
  }
  const ishidden = !isEmpty(filterValue)
  const collapseSelect = () => {
    setFilterValue('')
    setFocused(false)
  }
  const filteredOptions = () => filter(options, ({ name: optionName }) => {
    return includes(toLower(optionName), trim(toLower(filterValue)))
  })
  useEffect(() => {
    window.addEventListener('keypress', event => {
      if (focused && event.keyCode === 13) {
        event.preventDefault()
        if (!isEmpty(filterValue)) {
          onChangeValue(filteredOptions()[0])
          collapseSelect()
        } else {
          collapseSelect()
        }
      }
    })
  })

  const getHighlightedText = (text, higlight) => {
    let parts = split(text, new RegExp(`(${higlight})`, 'gi'))
    return (
      <span>
        {
          map(parts, (part, i) =>
            <span
              key={i}
              style={toLower(part) === toLower(higlight) ? {
                fontWeight: 'bold',
              } : {}}
            >
              { part }
            </span>)
        }
      </span>
    )
  }

  return (
    <StyledSelect {...props}>
      <StyledValue
        onClick={onFocus}
        focused={focused}
        ishidden={ishidden ? 1 : 0}
      >
        { isNil(selectValue) ? '' : selectValue.name }
      </StyledValue>
      <StyledSelectInput
        value={filterValue}
        focused={focused ? 1 : 0}
        onChange={onFilter}
        onBlur={collapseSelect}
        ref={inputRef}
      />
      <StyledSelectIcon
        svg={selectSVG}
        fill={'currentColor'}
        width={'13px'}
        height={'13px'}
        focused={focused ? 1 : 0}
        ishidden={ishidden ? 1 : 0}
      />
      {
        focused ? (
          <StyledOptionList>
            <Scrollbars autoHeightMax={120} autoHeight>
              {
                map(filteredOptions(), option => {
                  const { name, value, view } = option
                  return (
                    <StyledOption
                      value={value}
                      key={value}
                      name={selectName}
                      selected={value === get(selectValue, 'value')}
                      onMouseDown={() => onChangeValue(option)}
                    >
                      { view && view() }
                      <span>
                        { getHighlightedText(name, trim(filterValue)) }
                      </span>
                    </StyledOption>
                  )
                })
              }
            </Scrollbars>
          </StyledOptionList>
        ) : ''
      }
    </StyledSelect>
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]).isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  multiple: PropTypes.bool.isRequired,
}

Select.defaultProps = {
  multiple: false,
  value: null,
}

export default Select
