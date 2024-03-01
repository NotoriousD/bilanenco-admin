import { Container } from 'components/Container'
import { Content } from 'components/Content'
import React, { PropsWithChildren } from 'react'
import { Header } from 'views/Header'
import { Sidebar } from 'views/Sidebar'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>
        <Sidebar />
        <Content>{children}</Content>
      </Container>
    </div>
  )
}
