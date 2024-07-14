'use client'
import ImageSlider from '@/components/ImageSlider'
import { InputFade, PasswordInputFade } from '@/components/Input'
// import { authenticateAdminUser } from '@/store/auth/authActions'
// import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { signupSchema } from '@/schemas'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { signup } from '@/store/auth/authActions'
import { LoadButton } from '@/components/Load'
import Link from 'next/link'
import { clearSignupSuccess } from '@/store/auth/authSlice'

export default function Signup() {

    const router = useRouter()
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector((state) => state.auth.loading);
    const signupSuccess = useAppSelector(state => state.auth.signupSuccess)
    const token = useAppSelector(state => state.auth.userToken)


    const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(true)
    const [email, setEmail]= useState<string>("");
    const [loading, setLoading]= useState<boolean>(true)
    const [password, setPassword]= useState<string>("");



    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidEmail = emailRegex.test(email);


    const onSubmit = () => {
        // router.push('/verify');
        dispatch(signup(values));
    }
    
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: signupSchema,
    onSubmit,
  });

  useEffect(() => {
    if (isLoading){
        setLoading(true)
    }else (
        setLoading(false)
    )
  }, [isLoading]) 

  useEffect(() => {
    if (signupSuccess === true) {
      router.push(`/verify?token=${token}`);
      setTimeout(() => {
        dispatch(clearSignupSuccess());
      }, 800);
    }
  }, [signupSuccess]);


  useEffect(() => {
    if (
      values.firstname !== "" &&
      values.lastname !== "" &&
      values.email !== "" &&
      values.password !== "" &&
      values.confirmPassword !== "" &&
      !errors.firstname &&
      !errors.lastname &&
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword &&
      loading === false
    ) {
      setFormButtonDisabled(true);
    } else if(loading === true) {
        setFormButtonDisabled(false);
    }else {
        setFormButtonDisabled(false)
    }
    
  }, [values, errors, loading]);

    // useEffect(() => {
    //     if (loginSuccess === true) {
    //         router.push('/dashboard')
    //     }
    // }, [loginSuccess])


    // useEffect(() => {
    //     if (isLoading === true) {
    //         setLoading(true)
    //     } else {
    //         setLoading(false)
    //     }
    // }, [isLoading])

    return (
        <main className="w-full h-fit lg:h-screen flex items-center ">


            <div className="w-1/2 h-full hidden lg:block overflow-hidden relative ">

                <div className=' z-10 pointer-events-none absolute w-full h-full bg-gradient-to-t from-primary2 to-transparent top-0 right-0 p-8 flex flex-col justify-between' >
                    {/* LOGO */}
                    <div className='w-[120px]' >
                        <Image 
                            src={require('../../assets/images/fullLogo.png')}
                            alt='stacfx.com'
                            className='w-full'
                        />
                    </div>

                    <div className='w-full mb-[70px] 2xl:mb-[100px]  flex flex-col items-center ' >
                        <div className='w-1/2 mx-auto flex items-center justify-center gap-4 mb-2' >
                            <div className='w-[12px] h-[12px] bg-white rounded-full ' />
                            <div className='w-[12px] h-[12px] bg-white rounded-full ' />
                            <div className='w-[12px] h-[12px] bg-white rounded-full ' />
                        </div>

                        <div className=''>
                            <h1 className='text-white text-center text-[28px] font-medium' >Real-time Simulations</h1>
                            <p className='text-lightgreentxt text-[15px] font-normal text-center'  > Practice Your Skills in a Risk-Free Environment with Our <br /> Virtual Trading Simulator</p>
                        </div>

                    </div>

                </div>
                <ImageSlider />
            </div>

            <div className="w-full lg:w-1/2 h-full mx-auto bg-white max-lg:scroll max-lg:mb-20">
                <div className="w-full h-full flex flex-col items-center py-4 lg:py-[5rem] justify-center  ">

 
                    {/* FORM */}
                    <div className='w-[90%] 2xl:w-[80%] max-w-[592px] mx-auto p-0 lg:p-[40px] 2xl:p-[60px] rounded ' >
                        <div className='w-full flex lg:hidden items-center justify-center mb-4'>
                            <Link href="/">
                                <Image 
                                    src={require('../../assets/images/logo.png')}
                                    alt='logo'
                                    className='w-12'
                                />
                            </Link>
                        </div>
                        <h2 className='text-[26px] 2xl:text-[32px] font-bold text-appBlack text-center' >Let's get started</h2>
                        <p className='text-xs 2xl:text-sm mb-[52px] 2xl:mb-[72px] font-normal text-input text-center' >Enter your details to create your Stac account</p>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4 2xl:gap-4' >
                            <div className='w-full flex max-lg:flex-col gap-6'>
                                <InputFade 
                                    id="firstname"
                                    value={values.firstname} 
                                    touched={touched.firstname}
                                    blur={handleBlur}
                                    handleChange={handleChange}
                                    error={errors.firstname}
                                    isDisabled={false} 
                                    label="First Name" 
                                    type='text' 
                                    placeholder='Enter first name' 
                                />
                                <InputFade 
                                    id="lastname"
                                    value={values.lastname} 
                                    touched={touched.lastname}
                                    blur={handleBlur}
                                    handleChange={handleChange}
                                    error={errors.lastname}
                                    isDisabled={false} 
                                    label="Last Name" 
                                    type='text' 
                                    placeholder='Enter last name' 
                                />
                                
                            </div>
                            <InputFade 
                                id="email"
                                value={values.email} 
                                touched={touched.email}
                                blur={handleBlur}
                                handleChange={handleChange}
                                error={errors.email}
                                isDisabled={false} 
                                label="Email" 
                                type='email' 
                                placeholder='Enter your email' 
                             />
                            <PasswordInputFade 
                                id="password"
                                value={values.password} 
                                touched={touched.password}
                                blur={handleBlur}
                                handleChange={handleChange}
                                error={errors.password}
                                isDisabled={false} 
                                label="Password" 
                                placeholder='Password' 
                             />
                            <PasswordInputFade 
                                id="confirmPassword"
                                value={values.confirmPassword} 
                                touched={touched.confirmPassword}
                                blur={handleBlur}
                                handleChange={handleChange}
                                error={errors.confirmPassword}
                                isDisabled={false} 
                                label="Confirm Password" 
                                placeholder='Confirm Password' 
                             />
                            <button type='submit' disabled={!formButtonDisabled} className="buttons font-[100] text-sm 2xl:text:base">{loading === true ? <LoadButton /> : 'Create Account'}</button>
                        </form>

                    </div>
                    <p className='text mt-2'>Already have an account? <a href="/login" className='text-primary hover:underline'>Login</a></p>
                </div>
            </div>
        </main>
    )
}