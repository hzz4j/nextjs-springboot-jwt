import { LockClosedIcon, AtSymbolIcon, UserIcon } from '@heroicons/react/24/solid'
import style from './form.module.scss'
import { registerUser, login } from '@/lib/actions'
import { useActionState, startTransition } from 'react'
export const LoginForm: React.FC = () => {
  const [state, formAction] = useActionState(login, {})

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    startTransition(() => {
      formAction(new FormData(e.currentTarget))
    })
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className='space-y-4 rounded-lg bg-gray-600 p-10'>
        <h1
          style={{
            color: style.mainColor
          }}
          className='text-center text-2xl font-bold'
        >
          登录
        </h1>
        <div>
          <div className='relative' aria-describedby='email-error'>
            <input type='text' name='email' placeholder='Your Email' className={style.Input} />
            <AtSymbolIcon
              style={{
                color: style.mainColor
              }}
              className='absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2'
            />
          </div>
          <div id='email-error' aria-atomic='true' aria-live='polite'>
            {state.errors?.email &&
              state.errors.email.map(error => (
                <p key={error} className='mt-1 text-sm text-red-500'>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* email end */}

        {/* password start */}
        <div>
          <div className='relative' aria-describedby='password-error'>
            <input type='password' name='password' placeholder='Your Password' className={style.Input} />
            <LockClosedIcon
              style={{
                color: style.mainColor
              }}
              className='absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2'
            />
          </div>
          <div id='password-error' aria-atomic='true' aria-live='polite'>
            {state.errors?.password &&
              state.errors.password.map(error => (
                <p key={error} className='mt-1 text-sm text-red-500'>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div className='flex justify-center'>
          <button
            style={{
              backgroundColor: style.mainColor
            }}
            className='rounded-md border px-5 py-1 text-base text-white'
          >
            提交
          </button>
        </div>
      </form>
    </>
  )
}

export const SignUpForm: React.FC = () => {
  const [state, formActive] = useActionState(registerUser, {})
  return (
    <>
      <form action={formActive} className='space-y-4 rounded-lg bg-gray-100 p-10'>
        <h1
          style={{
            color: style.mainColor
          }}
          className='text-center text-2xl font-bold'
        >
          注册
        </h1>
        {/* username start */}
        <div>
          <div className='relative' aria-describedby='username-error'>
            <input type='text' name='username' placeholder='Your Full Name' className={style.Input} />
            <UserIcon
              style={{
                color: style.mainColor
              }}
              className='absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2'
            />
          </div>
          <div id='username-error' aria-atomic='true' aria-live='polite'>
            {state.errors?.username &&
              state.errors.username.map(error => (
                <p key={error} className='mt-1 text-sm text-red-500'>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* username end */}
        {/* email start */}
        <div>
          <div className='relative'>
            <input type='text' name='email' placeholder='Your Email' className={style.Input} />
            <AtSymbolIcon
              style={{
                color: style.mainColor
              }}
              className='absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2'
            />
          </div>
          <div id='email-error' aria-atomic='true' aria-live='polite'>
            {state.errors?.email &&
              state.errors.email.map(error => (
                <p key={error} className='mt-1 text-sm text-red-500'>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* email end */}
        {/* password start */}
        <div>
          <div className='relative' aria-describedby='password-error'>
            <input type='password' name='password' placeholder='Your Password' className={style.Input} />
            <LockClosedIcon
              style={{
                color: style.mainColor
              }}
              className='absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2'
            />
          </div>
          <div id='password-error' aria-atomic='true' aria-live='polite'>
            {state.errors?.password &&
              state.errors.password.map(error => (
                <p key={error} className='mt-1 text-sm text-red-500'>
                  {error}
                </p>
              ))}
          </div>
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
