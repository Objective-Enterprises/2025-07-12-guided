import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  return (
    <form
      className='container'
      onSubmit={(event) => {
        event.preventDefault()
        // username: admin, password: foodie123
        if (username !== 'admin' || password !== 'foodie123') {
          return
        }
        localStorage.setItem('token', 'fake-jwt-token')
        router.push('/menu')
      }}
    >
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}