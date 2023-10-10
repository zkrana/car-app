import Image from "next/image"
import Link from "next/link"
import { CustomButton } from "@/components"

export default function Page() {
  return (
    <>
      <div className="outer-header absolute top-0 left-0 right-0 w-full h-28 px-5 sm:px-10 tab:px-16 flex justify-between items-center">
          <Link href="/" className='flex justify-center items-center '>
              <Image src="/logo.svg" alt="hero" width={118} height={18} className="object-contain" />
          </Link>
          <div className="flex items-center sm:gap-3 gap-1">
              <p className=" sm:text-sm text-xs sm:block hidden">
                  New to Carhub? 
              </p>
              <Link href="/signup">
                <CustomButton 
                title='Create an account'
                btnType="button"
                containerStyles='bg-transparent sm:text-sm text-xs border border-slate-400 rounded-lg flex justify-center items-center capitalize sm:px-3 px-1 py-2'
                />
              </Link>
          </div>
      </div>
      <div className="w-full h-[calc(100vh-177px)] flex flex-col justify-center items-center sm:px-0 px-5 mt-28">
        <div className="sm:w-[420px] w-full bg-white tab:shadow-lg shadow-md rounded-lg px-5 py-8">
            <h1 className="text-center tab:text-4xl text-2xl text-slate-800 font-medium">Sign In</h1>
            <CustomButton 
                title='Sign in using Google'
                btnType="button"
                containerStyles='sm:min-w-[320px] min-w-[250px] mx-auto bg-[#4285F4] sm:text-sm text-xs text-white rounded-lg flex justify-center items-center capitalize px-3 py-2 tab:mt-10 mt-5'
            />
            <div className=" border-t border-gray-300 relative mt-6">
                <p className="absolute bg-white sm:text-sm text-xs left-1/2 transform -translate-x-1/2 sm:-top-[14px] -top-[10px] px-2 text-slate-800">or sign in with email</p>
            </div>

            <form className="flex flex-col gap-6 mt-6">
              <div className="form-controller">
                <label className="block sm:text-base text-sm text-slate-800 capitalize mb-1"> email </label>
                <input className=" w-full h-11 bg-transparent border border-slate-400 rounded-lg sm:text-base text-sm text-slate-600 pl-2 focus:outline-none" type="email" placeholder="Your email" />
              </div>

              <div className="form-controller">
               <div className="flex justify-between items-center">
                  <label className=" block sm:text-base text-sm text-slate-800 capitalize mb-1"> email </label>
                  <a className=" text-indigo-500 sm:text-base text-sm" href="#"> Forgot Password? </a>
               </div>
                <input className=" w-full h-11 bg-transparent border sm:text-base text-sm border-slate-400 rounded-lg text-slate-600 pl-2 focus:outline-none"  type="password" placeholder="*******" />
              </div>
              <CustomButton 
                title='Sign in'
                btnType="button"
                containerStyles='min-w-[220px] mx-auto bg-indigo-500 sm:text-sm text-xs text-white rounded-lg flex justify-center items-center capitalize px-2 py-1 sm:mt-5 mt-2'
                />
            </form>
        </div>
      </div>

      <div className=' absolute bottom-0 left-0 right-0 flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-5'>
        <p>@2023 CarHub. All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </>

  )
}