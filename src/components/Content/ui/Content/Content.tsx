import React, { PropsWithChildren } from 'react'

export const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-full p-10">{children}</div>
}
