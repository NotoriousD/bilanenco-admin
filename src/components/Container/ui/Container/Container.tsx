import React, { PropsWithChildren } from 'react'

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-full flex justify-start">{children}</div>
}
