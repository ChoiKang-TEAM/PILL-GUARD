import React, { useState } from 'react'
import { ButtonByMui } from 'components/buttons/Button'
import { InputByMui } from 'components/inputs/Input'
import { RadioByMui } from 'components/radios/Radio'
import { handleChange } from 'utils/handlers/DataChangeHandler'
import { RadioButtonsGroup } from 'components/radios/RadioGroup'
import { getUser } from 'apis/get-user'
import { Form } from 'components/forms/Form'
import { FormControl } from '@mui/material'

const Login = () => {
  const [fields, setFields] = useState<{ [key: string]: string }>({
    userId: '',
    password: '',
    gender: 'a',
  })

  const onLogin = () => {
    const dto = {
      userId: fields.userId,
      password: fields.password,
    }
    console.log(fields)
    getUser(dto)
  }
  return (
    <Form>
      <FormControl>
        <InputByMui
          value={fields.userId}
          type="text"
          label="아이디"
          onChange={(e) => handleChange(e, 'userId', fields, setFields)}
        />
      </FormControl>
      <FormControl>
        <InputByMui
          value={fields.password}
          type="password"
          label="비밀번호"
          onChange={(e) => handleChange(e, 'password', fields, setFields)}
        />
      </FormControl>
      <FormControl>
        <ButtonByMui
          color="primary"
          variant="outlined"
          label="로그인"
          onClick={onLogin}
        />
      </FormControl>
      <FormControl>
        <RadioByMui
          checked={fields.gender === 'a'}
          value={'a'}
          name="radio-buttons"
          label="a"
          onChange={(e) => handleChange(e, 'gender', fields, setFields)}
        />
        <RadioByMui
          checked={fields.gender === 'b'}
          value={'b'}
          name="radio-buttons"
          label="b"
          onChange={(e) => handleChange(e, 'gender', fields, setFields)}
        />
      </FormControl>
      <RadioButtonsGroup label="buddy" value={['buddy', 'maxi', 'lucy']} />
    </Form>
  )
}

export default Login