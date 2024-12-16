import { getCurrentUser } from '@/lib/session'
import Button from './button'
// 服务端组件调用客户端组件
export default async function Page() {
  const usename = await getCurrentUser()
  return (
    <section>
      <h1>Protect Page</h1>
      <main>{usename}: 订单</main>
      <Button username={usename} />
    </section>
  )
}
