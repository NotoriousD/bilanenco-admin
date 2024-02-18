import React, { PropsWithChildren } from 'react'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen justify-start flex-wrap">{children}</div>
  )
}
