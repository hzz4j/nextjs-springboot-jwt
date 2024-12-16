'use client'
import { deleteSession } from '@/lib/session'
export default function App() {
  return (
    <main>
      <nav className='flex flex-row-reverse'>
        <button onClick={deleteSession}>退出登录</button>
      </nav>
      <section className='container text-center'>DashBoard</section>
    </main>
  )
}
