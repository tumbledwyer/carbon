import { TextInput, PasswordInput, Button } from '@carbon/react'

const Login = () => {
  return (
    <div style={{ maxWidth: 200 }}>
      <TextInput labelText="Username"></TextInput>
      <PasswordInput labelText="Password"></PasswordInput>
      <Button>Login</Button>
    </div>
  )
}

export default Login
