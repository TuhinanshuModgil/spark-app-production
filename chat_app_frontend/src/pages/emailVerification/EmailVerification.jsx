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
    <div className='bg-secondary-dark-1 h-screen w-screen flex items-center justify-center'>
      <button className='bg-gradient-pink-purple p-4 rounded-sm font-bold text-xl text-white' onClick={handleVerification}>Start Chatting with Spark</button>
    </div>
  )
}

export default EmailVerification
