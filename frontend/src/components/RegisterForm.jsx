// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Skeleton from '@mui/material/Skeleton'
import CircularProgress from '@mui/material/CircularProgress'
// import Dropzone from "./ImageUploader";
import Dropzone from './ImageUploader'
import Input from './Input'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { login, register } from '../action/auth'
import { useFormik } from 'formik'
import { registerSchema } from '@/schemas'
import { clear } from '@/action/employee'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}
const RegisterForm = ({ setShowRegister, showRegister }) => {
  const dispatch = useDispatch()
  const handleClose = () => {
    setShowRegister(false)
  }

  const handleCreateAccount = () => {
    if (!email || !password || !phoneNo || !name || !avatar) {
      toast.error('Fill in all forms', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })

      return
    }

    dispatch(register(email, password, phoneNo, name, avatar))
  }
  const onSubmit = async (values, actions) => {
    console.log(values)
    dispatch(register({ ...values }))
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // actions.resetForm();
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      phoneNo: '',
    },
    validationSchema: registerSchema,
    onSubmit,
  })

  console.log(errors)
  const { loading, status } = useSelector(state => state?.register)
  console.log(status)

  useEffect(() => {
    if (status == 'success') {
      setShowRegister(false)
      dispatch(clear())
    }
  }, [status])

  return (
    <div>
      <Modal
        open={showRegister}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bg-white text-[14px] exo z-10 rounded-md overflow-hidden w-[90vw] h-fit md:w-[27.5rem] md:h-[46.5rem]">
            <div className="flex flex-row justify-between py-4 px-8 bg-slate-100 ">
              <p className="text-slate-900 font-[600] text-[15px]">Register</p>
              <p className="text-red-500 cursor-pointer" onClick={handleClose}>
                Close
              </p>
            </div>

            <div className="md:px-8 px-[1rem] pt-8 ">
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="flex flex-col gap-y-4"
              >
                {/* <div className="flex flex-col sm:flex-row gap-4"> */}

                <Input
                  placeholder="Type in your Username"
                  type="text"
                  label="Username"
                  value={values.username}
                  handleChange={handleChange}
                  error={
                    errors.username && touched.username
                      ? errors.username
                      : undefined
                  }
                  id="username"
                />

                <Input
                  placeholder="Type in your Email"
                  type="email"
                  label="Email"
                  value={values.email}
                  handleChange={handleChange}
                  error={
                    errors.email && touched.email ? errors.email : undefined
                  }
                  id="email"
                />
                <Input
                  placeholder="Type in your Phone no"
                  type="text"
                  label="Phone no"
                  value={values.phoneNo}
                  handleChange={handleChange}
                  error={
                    errors.phoneNo && touched.phoneNo
                      ? errors.phoneNo
                      : undefined
                  }
                  id="phoneNo"
                />
                {/* </div> */}

                <Input
                  placeholder="Type in your password"
                  type="password"
                  label="Password"
                  value={values.password}
                  handleChange={handleChange}
                  error={
                    errors.password && touched.password
                      ? errors.password
                      : undefined
                  }
                  id="password"
                />

                <div className="mt-2 md:mt-6 flex flex-col md:flex-row justify-between gap-y-3 md:items-center w-[100%]">
                  <button
                    className={`border-2 w-[40%] text-[14px] py-2 border-slate-300 rounded-md ${loading && 'cursor-not-allowed'}`}
                    // onClick={onSubmit}
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? 'Loading...' : 'Register'}
                  </button>
                  <div className="flex flex-row gap-4">
                    <input
                      type="checkbox"
                      className="w-5 border outline-green-500"
                    />
                    <p className="text-gray-400 text-[14px]">
                      Remember me here
                    </p>
                  </div>
                </div>
              </form>
              {/* <Dropzone state={avatar} setState={setAvatar} showImage/> */}

              <div className="mt-7 flex flex-row gap-3 items-center">
                <div className="flex-1 h-[1px] bg-slate-600"></div>
                <p className="text-gray-500">or</p>
                <div className="flex-1 h-[1px] bg-slate-600"></div>
              </div>
            </div>
            <div className="mt-8 border px-6 py-7">
              <p className="text-[14px] text-center text-slate-600">
                By signing in you agree to these{' '}
                <span className="text-slate-400">Terms & Conditions</span> &
                consent to{' '}
                <span className="text-slate-400">
                  Cookie Policy & Privacy Policy
                </span>
              </p>
            </div>

            <div className="flex flex-row">
              <div className="flex-1 text-center border border-white border-r-gray-200 py-5">
                <p>
                  Not a member?{' '}
                  <span className="text-slate-400">Signup Now</span>
                </p>
              </div>
              <div className="flex-1 text-center py-5">
                <p>Forgot password?</p>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default RegisterForm
