import { createSessionToken, verifySessionToken } from '@/lib/session'

export default async function App() {
  const jwtToken = await createSessionToken('Love React with next.js')
  const payload = await verifySessionToken(
    'eyJhbGciOiJIUzI1NiJ9.eyJtc2ciOiJHb29kIEV2ZW5pbmcifQ.MwnyLu_pkFSez3pyFRPbGAex72NxrcX6nnqwzWvlr2I'
  )
  console.log(payload)

  return (
    <>
      <section className='container relative mx-auto flex text-red-400'>{jwtToken}</section>
    </>
  )
}
