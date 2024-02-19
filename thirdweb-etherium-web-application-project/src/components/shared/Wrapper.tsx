import React from "react"


const Wrapper:React.FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className="max-w-screen-2.5 container px-4 md:mx-5">
      {children}
    </div>
  )
}

export default Wrapper
