import React, { useEffect, useState } from 'react'
import firstStyle from '../FirstAuth/FirstAuth.module.scss'
import Text from '../../components/Text/Text'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
  reset,
  // signin,
  signup,
} from '../../../../redux/features/auth/AuthSlice'
const FirstAuth = (props) => {
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [placeOfBirth, setPlaceOfBirth] = useState('')

  const vales = {
    email,
    firstName,
    lastName,
    password,
    confirmPass,
    placeOfBirth,
    phoneNumber,
  }
  const userData = JSON.stringify(vales, null, 2)
  const dispatch = useDispatch()
  function newPages() {
    console.log('asd')
    dispatch(signup(userData))
    props.onNext()
  }
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  )
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      // newPages()
      // navigate('')
      toast.success(message)
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, dispatch])
  console.log()

  // const validShema = yup.object().shape({
  //   firstName: yup
  //     .number()
  //     .typeError('должен быть число')
  //     // .min(1, 'Имя должно содержать более чем 2 символа.')
  //     .required('Введите имя.'),
  // email: yup
  //   .string()
  //   .email('Неправильный email адрес.')
  //   .required('Введите email.'),
  // age: yup
  //   .number()
  //   .min(5, 'Минимальный возраст должен быть 18.')
  //   .required('Введите возраст.'),
  // password: yup
  //   .string()
  //   .min(8, 'Пароль должен содержать минимум 8 символов.')
  //   .required('Введите пароль.'),
  // terms: yup
  //   .boolean()
  //   .required('Необходимо согласие!')
  //   .oneOf([true], 'Необходимо согласие!'),
  // })

  // if (isLoading) {
  //   return <h2>Loading...</h2>
  // }
  return (
    <>
      {/* <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          confirmPass: '',
          placeOfBirth: '',
          phoneNumber: '',
          terms: false,
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validShema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => ( */}
      <div className={firstStyle.first_container}>
        <div className={firstStyle.first}>
          <div className={firstStyle.first_item}>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              // onChange={handleChange}
              name="firstName"
              className={firstStyle.input_small}
              type="text"
              placeholder="имя"
            />
            {/* {touched.name && errors.name && <p>{errors.name}</p>} */}
            <input
              onChange={(e) => setLastName(e.target.value)}
              className={firstStyle.input_small}
              type="text"
              placeholder="фамилия"
              value={lastName}
              name="lastName"
            />
          </div>
          <div className={firstStyle.first_item}>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={firstStyle.input_big}
              type="number"
              placeholder="номер телефона"
              value={phoneNumber}
              name="phoneNumber"
            />
          </div>
          <div className={firstStyle.first_item}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className={firstStyle.input_small}
              type="email"
              name="email"
              placeholder="e-mail"
              value={email}
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className={firstStyle.input_small}
              type="password"
              placeholder="пароль вашего e-mail"
              name="password"
              value={password}
            />
          </div>
          <div className={firstStyle.first_item}>
            <input
              onChange={(e) => setPlaceOfBirth(e.target.value)}
              className={firstStyle.input_small}
              type="text"
              placeholder="место проживания"
              value={placeOfBirth}
              name="placeOfBirth"
            />
            <input
              className={firstStyle.input_small}
              onChange={(e) => setConfirmPass(e.target.value)}
              name="password"
              type="password"
              placeholder="подтверждение пароля"
              value={confirmPass}
            />
          </div>

          <div className={firstStyle.first_text}>
            <input type="checkbox" />
            <Text
              p={' Я согласен с условиями'}
              a={' пользовательского соглашения'}
            />
          </div>

          <div className={firstStyle.first_button}>
            <button
              // disabled={!isValid && !dirty}
              // onClick={handleSubmit}
              // onClick={() => dispatch(signup(userData))}
              onClick={() => newPages()}
              type="submit"
              className={firstStyle.first_btn}
            >
              Зарегистрироваться
            </button>
          </div>
          <div className={firstStyle.first_text}>
            <Text
              p={'вы уже зарегистрированы?'}
              link={'/LoginUser'}
              a={'войти'}
            />
          </div>
        </div>
      </div>
      {/* )}
        </Formik> */}
    </>
  )
}

export default FirstAuth
