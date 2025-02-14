import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard
      <br />
      <br />
  
      <hr />
    <form action="">
      <label htmlFor="email">Email:</label><br />
      <input type="email" id="email" name="email" /><br />
      <label htmlFor="password">Password:</label><br />
      <input type="password" id="password" name="password" /><br /><br />
      <input type="submit" value="Submit" />
      <hr />
    </form>
    </div>
  )
}

export default Dashboard