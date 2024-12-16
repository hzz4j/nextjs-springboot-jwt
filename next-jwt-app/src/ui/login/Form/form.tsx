import { LockClosedIcon, AtSymbolIcon, UserIcon } from '@heroicons/react/24/solid'
import style from './form.module.scss'
export const LoginForm: React.FC = () => {
  return (
    <>
      <form className='space-y-4 rounded-lg bg-gray-600 p-10'>
        <h1
          style={{
            color: style.mainColor
          }}
          className='text-center text-2xl font-bold'
        >
          登录
        </h1>
        <div className='relative'>
          <input type='text' placeholder='Your Email' className={style.Input} />
          <AtSymbolIcon
            style={{
              color: style.mainColor
            }}
            className='absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2'
          />
        </div>

        <div className='relative'>
          <input type='password' placeholder='Your Password' className={style.Input} />
          <LockClosedIcon
            style={{
              color: style.mainColor
            }}
            className='absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2'
          />
        </div>

        <div className='flex justify-center'>
          <button
            style={{
              backgroundColor: style.mainColor
            }}
            className='rounded-md border px-3 py-2 text-white'
          >
            提交
          </button>
        </div>
      </form>
    </>
  )
}

export const SignUpForm: React.FC = () => {
  return (
    <>
      <form className='space-y-4 rounded-lg bg-gray-100 p-10'>
        <h1
          style={{
            color: style.mainColor
          }}
          className='text-center text-2xl font-bold'
        >
          注册
        </h1>

        <div className='relative'>
          <input type='text' placeholder='Your Full Name' className={style.Input} />
          <UserIcon
            style={{
              color: style.mainColor
            }}
            className='absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2'
          />
        </div>

        <div className='relative'>
          <input type='text' placeholder='Your Email' className={style.Input} />
          <AtSymbolIcon
            style={{
              color: style.mainColor
            }}
            className='absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2'
          />
        </div>

        <div className='relative'>
          <input type='password' placeholder='Your Password' className={style.Input} />
          <LockClosedIcon
            style={{
              color: style.mainColor
            }}
            className='absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2'
          />
        </div>
        <div className='flex justify-center'>
          <button
            style={{
              backgroundColor: style.mainColor
            }}
            className='rounded-md border px-3 py-2 text-white'
          >
            提交
          </button>
        </div>
      </form>
    </>
  )
}
