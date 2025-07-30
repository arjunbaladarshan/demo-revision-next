import React, { ReactNode } from 'react'

function AdminLayout({children, stats}:{children:ReactNode,stats:ReactNode}) {
  return (
    <>
      <div>AdminLayout</div>
      <div style={{width:"45%",float:"left",border:"1px solid yellow"}}>
        {stats}
      </div>
      <div style={{width:"45%",float:"left",border:"1px solid blue"}}>
        {children}
      </div>
      
    </>
  )
}

export default AdminLayout