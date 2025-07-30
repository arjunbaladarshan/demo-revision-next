import React, { ReactNode } from 'react'

function AboutLayout({children}:{children:ReactNode}) {
  return (
    <div style={{border:"1px solid blue", margin:"10px"}}>
      {children}
    </div>
  )
}

export default AboutLayout