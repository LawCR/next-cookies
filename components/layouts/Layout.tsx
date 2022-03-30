import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui'

interface Props {
  title?: string,
}

export const Layout: FC<Props> = ({children, title = 'Cookie Master'}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <nav>
            <Navbar />
        </nav>
        <main style={{padding: '20px 50px'}}>
            {children}
        </main>
    </>
  )
}
