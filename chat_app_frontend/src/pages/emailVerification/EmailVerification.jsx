import React from 'react'
import { useParams } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

function EmailVerification() {
    const params = useParams()
    const { loading , signup} = useSignup()
    async function handleVerification(){
        await signup({jwt:params.verificationToken})
    }
  return (
    <div>
      <button className='bg-red-300 p-4 rounded-sm' onClick={handleVerification}>Button</button>
    </div>
  )
}

export default EmailVerification
