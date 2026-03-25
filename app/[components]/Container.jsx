import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`max-w-290 py-2 m-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
