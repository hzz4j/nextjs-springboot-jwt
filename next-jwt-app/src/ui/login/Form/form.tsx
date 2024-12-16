import { LockClosedIcon, AtSymbolIcon, UserIcon } from '@heroicons/react/24/solid'

export const LoginForm: React.FC = () => {
  return (
    <>
      <form className='space-y-4 bg-gray-100 p-10'>
        <h1 className='text-center text-2xl font-bold'>登录</h1>
        <div className='relative'>
          <input type='text' placeholder='Your Email' className='w-full rounded-md border px-2 py-1 pl-10' />
          <AtSymbolIcon className='absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2' />
        </div>

        <div className='relative'>
          <input type='text' placeholder='Your Password' className='w-full rounded-md border px-2 py-1 pl-10' />
          <LockClosedIcon className='absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2' />
        </div>

        <div className='flex justify-center'>
          <button className='rounded-md border bg-blue-500 px-3 py-2 text-white'>提交</button>
        </div>
      </form>
    </>
  )
}

export const SignUpForm: React.FC = () => {
  return (
    <>
      <form className='space-y-4 bg-gray-100 p-10'>
        <h1 className='text-center text-2xl font-bold'>注册</h1>

        <div className='relative'>
          <input type='text' placeholder='Your Full Name' className='w-full rounded-md border px-2 py-1 pl-10' />
          <UserIcon className='absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2' />
        </div>

        <div className='relative'>
          <input type='text' placeholder='Your Email' className='w-full rounded-md border px-2 py-1 pl-10' />
          <AtSymbolIcon className='absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2' />
        </div>

        <div className='relative'>
          <input type='text' placeholder='Your Password' className='w-full rounded-md border px-2 py-1 pl-10' />
          <LockClosedIcon className='absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2' />
        </div>
        <div className='flex justify-center'>
          <button className='rounded-md border bg-blue-500 px-3 py-2 text-white'>提交</button>
        </div>
      </form>
    </>
  )
}
