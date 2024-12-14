import { createSessionToken, verifySessionToken } from '@/lib/session'

export default async function App() {
  const jwtToken = await createSessionToken({ msg: 'Hello World', name: 'Pkmer' })
  const payload = await verifySessionToken(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtc2ciOiJIZWxsbyBXb3JsZCIsIm5hbWUiOiJQa21lciJ9.zbcgjvNH_sQHxkhR2k_GO0FIJIOHr49RE5FHqs4NcMk'
  )
  console.log(payload)

  return (
    <>
      <section className='container relative mx-auto flex text-red-400'>{jwtToken}</section>
    </>
  )
}
