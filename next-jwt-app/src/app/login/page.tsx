'use client'
import { useState } from 'react'
import clsx from 'clsx'
import RectCheckbox from '@/ui/login/rect-checkbox'
import styleVariable from './page.module.scss'

export default function Page() {
  const [isChecked, setChecked] = useState(true)
  const isLogin = isChecked
  const isSignUp = !isChecked

  function handleOnChange(checked: boolean) {
    console.log(checked)
    setChecked(checked)
  }

  const liStyle = {
    transition: `color ${styleVariable.duration} ease-in-out`
  } satisfies React.CSSProperties

  return (
    <section className='flex flex-col items-center justify-center gap-6'>
      <ul className='flex gap-[80px]'>
        <li
          style={liStyle}
          className={clsx('text-xl font-bold text-gray-300', {
            '!text-black': isLogin
          })}
        >
          登录
        </li>

        <li
          style={liStyle}
          className={clsx('text-xl font-bold text-gray-300', {
            '!text-black': isSignUp
          })}
        >
          注册
        </li>
      </ul>
      <RectCheckbox width={60} onChange={handleOnChange} />
    </section>
  )
}
