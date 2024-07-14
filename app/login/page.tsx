'use client'
import ImageSlider from '@/components/ImageSlider'
import { InputFade, PasswordInputFade } from '@/components/Input'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { loginSchema } from '@/schemas'
import Link from 'next/link'
import { LoadButton } from '@/components/Load'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { login } from '@/store/auth/authActions'
import { clearloginSuccess } from '@/store/auth/authSlice'


export default function Home() {

    const router = useRouter()
    const auth = useAppSelector(state => state.auth)

    const dispatch = useAppDispatch()
    const isLoading = auth.loading;
    const loginSuccess = useAppSelector(state => state.auth.loginSuccess)


    const [formButtonDisabled, setFormButtonDisabled]= useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false)

    const onSubmit = () => {
        dispatch(login(values))
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: ""
      },
      validationSchema: loginSchema,
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
      if (
        values.email !== "" &&
        values.password !== "" &&
        !errors.email &&
        !errors.password &&
        loading === false
      ) {
        setFormButtonDisabled(true);
      }else if(loading === true) {
        setFormButtonDisabled(false);
    } else {
          setFormButtonDisabled(false);
      }
      
    }, [values, errors, loading]);

    useEffect(() => {
        if (loginSuccess === true) {
          router.push(`/dashboard/onboarding`);
          setTimeout(() => {
            dispatch(clearloginSuccess());
          }, 800);
        }
    }, [loginSuccess]);


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


            <div className="w-1/2 h-full hidden lg:block overflow-hidden relative">

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
                <div className="w-full h-full flex flex-col items-center py-4 lg:py-[5rem] justify-center">


                    {/* FORM */}
                    <div className='w-[90%] 2xl:w-[80%] max-w-[592px] mx-auto p-0 lg:p-[40px] 2xl:p-[60px] rounded max-lg:mt-20 mb-2' >

                        <div className='w-full flex lg:hidden items-center justify-center mb-4'>
                            <Link href="/">
                                <Image 
                                    src={require('../../assets/images/logo.png')}
                                    alt='logo'
                                    className='w-12'
                                />
                            </Link>
                        </div>

                        <h2 className='text-[26px] 2xl:text-[32px] font-bold text-appBlack text-center' >Welcome Back!</h2>
                        <p className='text-xs 2xl:text-sm mb-[52px] 2xl:mb-[72px] font-normal text-input text-center' >Enter your details to login</p>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4 2xl:gap-4' >
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
                            placeholder='Enter email' 
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
                            placeholder='Enter password' 
                        />
                        <p className='text-xs text-right mt-2 2xl:text-sm text-greentxt cursor-pointer hover:underline '>Forgot Password?</p>
                        <button type='submit' disabled={!formButtonDisabled} className="buttons font-[100] text-sm 2xl:text:base">{loading === true ? <LoadButton /> : 'Login'}</button>
                        </form>

                        
                    </div>
                    <p>Don't have an account? <a href="/signup" className='text-primary hover:underline ' >Sign Up</a></p>

                </div>
            </div>
        </main>
    )
}
