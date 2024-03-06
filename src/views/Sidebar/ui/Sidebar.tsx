import React from 'react'
import { Navigation } from 'views/Navigation'

export const Sidebar: React.FC = () => {
  return (
    <aside className="pt-4 w-1/7 min-h-screen  border-r-black sticky top-0">
      <Navigation />
    </aside>
  )
}
