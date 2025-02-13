import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard
      <form action="">
        <label type="">Username</label>
        <input type="text" />
        <br />
        <label type="">Email</label>
        <input type="email" />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" />
        <br />
        <label htmlFor="">Gender</label>
        <input type="radio" name="Gender" value="male" />
        <input type="radio"  value="female" />
      </form>
    </div>
   
  )
}

export default Dashboard