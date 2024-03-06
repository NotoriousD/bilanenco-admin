import React from 'react'
import { LoaderIcon } from 'lucide-react'

export const Loader: React.FC = () => {
  return (
    <div className="flex justify-center p-4">
      <LoaderIcon className="animate-spin" />
    </div>
  )
}
