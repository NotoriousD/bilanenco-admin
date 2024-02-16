import React, { PropsWithChildren } from 'react'

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-4/5">{children}</div>
}
