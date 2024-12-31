import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const {token,user} = useSelector((state)=>state.register.data);
  console.log(token)
  console.log(user)

  return <>
    <div>
        
    </div>
  </>
}

export default Profile
