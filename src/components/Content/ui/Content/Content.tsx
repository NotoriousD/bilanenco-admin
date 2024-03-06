import React, { PropsWithChildren } from 'react'

export const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-6/7 p-10 bg-secondary">{children}</div>
}
