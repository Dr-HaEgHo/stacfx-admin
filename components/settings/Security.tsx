import React, { useEffect, useState } from 'react'
import { InputFade, PasswordInputFade } from '../Input'
import Image from 'next/image'
import { useFormik } from 'formik'
import { securitySchema } from '@/schemas'

const Security = () => {


    const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(true)

    const onSubmit = () => {

    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        password: "",
        newPassword: "",
        confirmPassword: ""
      },
      validationSchema: securitySchema,
      onSubmit,
    });
  
  
    useEffect(() => {
      if (
        values.password !== "" &&
        values.newPassword !== "" &&
        values.confirmPassword !== "" &&
        !errors.password &&
        !errors.newPassword &&
        !errors.confirmPassword 
      ) {
        setFormButtonDisabled(true);
      } else {
          setFormButtonDisabled(false);
      }
      
      
    }, [values, errors]);


  return (
      <div className='w-full' >

          {/* TOP  */}
          <div className='w-full mb-[56px]' >
              <h3 className='text-lg 2xl:text-xl text-headDesc ' >Password</h3>
          </div>


          {/* PROFILE DIV */}
          <div className='w-full flex flex-col items-center' >


              {/* PROFILE FORM */}
              <div className='w-[360px]'>
                  <form className='w-full flex flex-col gap-4 ' >
                  <PasswordInputFade 
                        id="password"
                        value={values.password} 
                        touched={touched.password}
                        blur={handleBlur}
                        handleChange={handleChange}
                        error={errors.password}
                        isDisabled={false} 
                        label="Existing Password" 
                        placeholder='Enter password' 
                    />
                  <PasswordInputFade 
                        id="newPassword"
                        value={values.newPassword} 
                        touched={touched.newPassword}
                        blur={handleBlur}
                        handleChange={handleChange}
                        error={errors.newPassword}
                        isDisabled={false} 
                        label="New Password" 
                        placeholder='Enter new password' 
                    />
                  <PasswordInputFade 
                        id="confirmPassword"
                        value={values.confirmPassword} 
                        touched={touched.confirmPassword}
                        blur={handleBlur}
                        handleChange={handleChange}
                        error={errors.confirmPassword}
                        isDisabled={false} 
                        label="Confirm New Password" 
                        placeholder='Enter password' 
                    />
                    
                      <button className='buttons' disabled={!formButtonDisabled} >
                          <p className='text-[13px] 2xl:text-[15px]'>Update Password</p>
                      </button>
                      <button className='buttons-2 !bg-blueGray' >
                          <p className='text-[13px] 2xl:text-[15px] text-primary'>Reset Password</p>
                      </button>
                  </form>
              </div>
          </div>

      </div>
  )
}

export default Security