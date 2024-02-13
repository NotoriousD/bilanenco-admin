import { withAuthenticator } from '@aws-amplify/ui-react'
import { type UseAuthenticator } from '@aws-amplify/ui-react-core'
import { type AuthUser } from 'aws-amplify/auth'
import React, { PropsWithChildren, createContext, useContext } from 'react'

interface ICognitoAuth {
  signOut?: UseAuthenticator['signOut']
  user?: AuthUser
}

const CognitoAuthContext = createContext<ICognitoAuth>(null as any)

export const useCognitoAuth = (): ICognitoAuth => useContext(CognitoAuthContext)

const CognitoAuthContextProvider: React.FC<PropsWithChildren<ICognitoAuth>> = ({
  children,
  ...authData
}) => {
  return (
    <CognitoAuthContext.Provider value={authData}>
      {children}
    </CognitoAuthContext.Provider>
  )
}

export const CognitoAuthProvider = withAuthenticator(CognitoAuthContextProvider)
