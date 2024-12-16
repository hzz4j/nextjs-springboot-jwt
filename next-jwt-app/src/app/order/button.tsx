'use client'
export default function Button({ username }: { username: string }) {
  return (
    <button
      onClick={() => {
        alert('hello ' + username)
      }}
      className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
      type='button'
    >
      {username}
    </button>
  )
}
