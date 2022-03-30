import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { useEffect, useState } from 'react';

import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import { customTheme, darkTheme, lightTheme } from '../themes';
import Cookies from 'js-cookie';

interface Props extends AppProps {
    theme: string;
}

function MyApp({ Component, pageProps, theme = 'dark' }: Props) {

    const [currentTheme, setCurrentTheme] = useState(lightTheme)

    // Lo metemos en un useEffect para que no lo compile por el lado del servidor y sino solo por cliente
    useEffect(() => {
        const cookieTheme = Cookies.get('theme') || 'light'

        const selectedTheme = cookieTheme === 'light'
            ? lightTheme
            : (cookieTheme === 'dark')
                ? darkTheme
                : customTheme

        setCurrentTheme(selectedTheme)
    }, [])

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

// MyApp.getInitialProps = async( appContext: AppContext ) => {

//     const { theme } = appContext.ctx.req ? ( appContext.ctx.req as any ).cookies : { theme: 'light' }
//     const validThemes = ['light', 'dark', 'custom']

//     return {
//         theme: validThemes.includes(theme) ? theme : 'dark',
//     }
// }



export default MyApp