import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'
import NextLink from 'next/link'


export const Navbar = () => {
  return (
    <AppBar  position='sticky' elevation={0}>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
            >
                <MenuOutlined />
            </IconButton>
            <NextLink href="/" passHref>
                <Link underline='none' >
                    <Typography variant='h6' color='white'>CoockieMaster</Typography>
                </Link>
            </NextLink>

            <div style={{flex: 1}} />

            <NextLink href='/theme-changer' passHref>
                <Link underline='none'>
                    <Typography variant='h6' color='white'>Cambiar Tema</Typography>
                </Link>
            </NextLink>
        </Toolbar>
    </AppBar>
  )
}
