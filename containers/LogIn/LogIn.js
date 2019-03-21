import React from 'react'

import styled from 'styled-components'

import SVGInline from 'react-svg-inline'

import Button from 'components/Button'
import Input from 'components/Input'
import InputGroup from 'components/InputGroup'
import Label from 'components/Label'
import Select from 'components/Select'

import logoSvg from 'assets/logo.svg'

const StyledLogIn = styled.div`
  display: grid;
  grid-template-columns: 200px 350px;
  align-items: center;
  position: absolute;
  top: 45%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`

const LogIn = () => (
  <StyledLogIn>
    <SVGInline
      svg={logoSvg}
      width={'170px'}
      height={'170px'}
    />
    <form>
      <InputGroup>
        <Label>{ 'Name' }</Label>
        <Input
          focus
        />
      </InputGroup>
      <InputGroup>
        <Label>{ 'Date of birth' }</Label>
        <Input
          type={'date'}
        />
      </InputGroup>
      <InputGroup>
        <Label>{ 'Sex' }</Label>
        <Select
          options={[{
            name: 'Female',
            value: 'female',
          }, {
            name: 'Male',
            value: 'male',
          }]}
        />
      </InputGroup>
      <InputGroup>
        <Label>{ 'Country' }</Label>
        <Input />
      </InputGroup>
      <InputGroup>
        <div />
        <Button>
          { 'Submit' }
        </Button>
      </InputGroup>
    </form>
  </StyledLogIn>
)

export default LogIn
