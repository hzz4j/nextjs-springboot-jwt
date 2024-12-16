'use client'
import UserProfile from './user'
/**
 * 表明了是客户端组件，那么引用的所有组件都是客户端组件
 * @returns
 */
export default function Page() {
  return (
    <>
      <h1>个人主页</h1>
      <UserProfile />
    </>
  )
}
