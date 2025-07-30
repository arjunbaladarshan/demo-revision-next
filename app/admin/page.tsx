import React from 'react'
import wait from 'wait'

async function AdminHomePage() {
  await wait(2000)
  return (
    <div>AdminHomePage</div>
  )
}

export default AdminHomePage