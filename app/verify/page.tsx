'use client'
import Load, { LoadButton, LoadSmallButton } from "@/components/Load";
import { useDimension } from "@/hooks/useDimension";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PinInput from "react-pin-input";


const Verify = () => {

    const router = useRouter()

    const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(false)
    const [loading, setLoading]= useState<boolean>(false)
    const [values, setValues] = useState<string[]>([])

    const token = useAppSelector(state => state.auth.userToken)

    // let ele = useRef()
    let pinInputRef: PinInput | null
    
    const handleSubmit = () => {
        pinInputRef?.clear(),
        router.push(`/login`)
    }
    
    

    useEffect(() => {
        if(values.length < 6 || loading){
            setFormButtonDisabled(false)                
        }
        else(
            setFormButtonDisabled(true)
        )
    }, [values, loading])

    return (
        <main className="w-full h-screen min-h-screen">
            {/* { loading && <Load/> } */}
            <div className="w-full h-full bg-chatinput scroll">
                <div className="w-full h-full flex flex-col items-center py-[2rem] lg:py-[5rem] justify-center gap-[5rem]">

                    <Link href='/'>
                        <Image 
                            src={require('../../assets/images/logoblack.png')}
                            alt='stacfx.com'
                            className='w-32'
                        />
                    </Link>

                {/* FORM */}
                <div className='w-[90%] lg:w-[60%] 2xl:w-[80%] max-w-[592px] mx-auto p-[40px] bg-white rounded-xl 2xl:p-[60px] flex flex-col items-center' >

                    <h2 className='text-[26px] 2xl:text-[32px] leading-7 font-bold text-appBlack text-center' >Please Verify Account</h2>
                    <p className='text-xs 2xl:text-sm font-normal text-input text-center' >Enter the six digit code sent to your email <br />to verify your new Stac account</p>
                    
                    <div className="mx-auto my-4 w-fit">
                    <PinInput 
                        length={6} 
                        initialValue=""
                        secret
                        secretDelay={100} 
                        onChange={(value, index) => {
                            setValues(value.split(''))
                        }}
                        type="numeric" 
                        inputMode="number"
                        style={{
                        }}  
                        inputStyle={{borderColor: '#77777777', borderRadius: 4, minWidth: 4, width: 40, height: 40}}
                        inputFocusStyle={{borderColor: '#2A66AE'}}
                        onComplete={(value, index) => {
                            setFormButtonDisabled(true)
                        }}
                        autoSelect={true}
                        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                        ref={(n) => (pinInputRef = n)}
                    />
                    </div>

                    <button type='submit' onClick={handleSubmit} disabled={!formButtonDisabled} className="buttons lg:!w-[70%] font-[100] text-sm 2xl:text:base">{loading ? <LoadButton /> : 'Verify & Continue'}</button>

                    <p className="text-sm text-normal mt-4 text-center flex items-center justify-center gap-2">Didn't get code? <span className="text-primary hover:underline cursor-pointer"> {loading ? <LoadSmallButton /> : 'Resend OTP'}</span></p>
                </div>

            </div>
        </div>
    </main>
    )
}

export default Verify;