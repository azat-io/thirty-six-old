import React, { Fragment, useState } from 'react'

import { useTranslation } from 'react-i18next'

import styled from 'styled-components'

import SVGInline from 'react-svg-inline'

import Button from 'components/Button'
import CountrySelect from 'components/CountrySelect'
import Input from 'components/Input'
import InputGroup from 'components/InputGroup'
import Label from 'components/Label'
import LanguageChanger from 'components/LanguageChanger'
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

const LogIn = () => {
  const [t] = useTranslation('general')
  const [sex, setSex] = useState(null)
  const [country, setCountry] = useState(null)
  return (
    <Fragment>
      <LanguageChanger />
      <StyledLogIn>
        <SVGInline
          svg={logoSvg}
          width={'170px'}
          height={'170px'}
        />
        <form>
          <InputGroup>
            <Label>{ t('date-of-birth') }</Label>
            <Input
              type={'date'}
            />
          </InputGroup>
          <InputGroup>
            <Label>{ t('sex') }</Label>
            <Select
              name={'sex'}
              onChange={({ target: { value } }) => setSex(value)}
              value={sex}
              options={[{
                name: t('female'),
                value: 'female',
              }, {
                name: t('male'),
                value: 'male',
              }]}
            />
          </InputGroup>
          <InputGroup>
            <Label>{ t('country') }</Label>
            <CountrySelect
              name={'country'}
              onChange={({ target: { value } }) => setCountry(value)}
              value={country}
            />
          </InputGroup>
          <InputGroup>
            <div />
            <Button>
              { t('submit') }
            </Button>
          </InputGroup>
        </form>
      </StyledLogIn>
    </Fragment>
  )
}

export default LogIn
