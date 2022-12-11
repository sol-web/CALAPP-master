import { useState } from 'react'

function Login() {
  let [loginId, setLoginId] = useState('')
  let [loginPassword, setLoginPassword] = useState('')
  let [savedLoginId, setSavedLoginId] = useState('')
  let [savedLoginPassword, setSavedLoginPassword] = useState('')

  let sessionStorage = window.sessionStorage
  // let sessionStorage = window.localStorage;

  return (
    <>
      <div>
        ID :{' '}
        <input
          type="text"
          size={20}
          onChange={(e) => {
            setLoginId(e.target.value)
          }}
        />
      </div>
      <div>
        PW :{' '}
        <input
          type="password"
          size={20}
          onChange={(e) => {
            setLoginPassword(e.target.value)
          }}
        />
      </div>

      <div>
        <button
          onClick={() => {
            sessionStorage.setItem('loginId', loginId)
            sessionStorage.setItem('loginPassword', loginPassword)

            setSavedLoginId(sessionStorage.getItem('loginId'))
            setSavedLoginPassword(sessionStorage.getItem('loginPassword'))
          }}
        >
          Login
        </button>

        <button
          onClick={() => {
            sessionStorage.clear()
            setSavedLoginId(sessionStorage.getItem('loginId'))
            setSavedLoginPassword(sessionStorage.getItem('loginPassword'))
          }}
        >
          Logout
        </button>
      </div>

      <div>
        LoginId는 {savedLoginId} 이고 LoginPassword는
        {savedLoginPassword} 이다.
      </div>
    </>
  )
}

export default Login
