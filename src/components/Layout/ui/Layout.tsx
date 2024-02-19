import { Container } from 'components/Container'
import { Content } from 'components/Content'
import React, { PropsWithChildren } from 'react'
import { Header } from 'views/Header'
import { Sidebar } from 'views/Sidebar'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen justify-start flex-wrap items-start">
      <Sidebar />
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    </div>
  )
}
