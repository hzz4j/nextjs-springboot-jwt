import { createSessionToken, verifySessionToken } from '@/lib/session'

export default async function App() {
  const jwtToken = await createSessionToken({ usename: 'Pkmer', loginDate: '2024-12-14' })
  const payload = await verifySessionToken(
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VuYW1lIjoiUGttZXIiLCJsb2dpbkRhdGUiOiIyMDI0LTEyLTE0In0.eTXnQhp4Z_uNBhq01pdbVQYJMjxF9FuT0Xl3elvzDQM'
  )
  console.log(payload)

  return (
    <>
      <section className='container relative mx-auto flex text-red-400'>{jwtToken}</section>
    </>
  )
}
