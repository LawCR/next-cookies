import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Cookies from 'js-cookie'
import { Layout } from '../components/layouts'
import { GetServerSideProps } from 'next'
import axios from 'axios'

interface Props {
    theme: string;
}

const ThemeChangerPage: FC<Props> = ({theme}) => {

    const [currentTheme, setCurrentTheme] = useState(theme)

    const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedTheme = event.target.value
        
        setCurrentTheme(event.target.value)
        localStorage.setItem('theme', selectedTheme)
        Cookies.set('theme', selectedTheme)
    }

    const onClick = async() => {
        const {data} = await axios.get('/api/hello')
        console.log({data})
    }


    useEffect(() => {
        console.log('LocalStorage: ', localStorage.getItem('theme'))
        console.log('Cookies: ', Cookies.get('theme'))
    }, [])

    return (
    <Layout title='Themes - Cookie Master'>
        <Card>
            <CardContent>
                <FormControl>
                    <FormLabel>Tema</FormLabel>
                    <RadioGroup
                        value={currentTheme}
                        onChange={onThemeChange}
                    >
                        <FormControlLabel value='light' control={<Radio />} label="Light" />
                        <FormControlLabel value='dark' control={<Radio />} label="Dark" />
                        <FormControlLabel value='custom' control={<Radio />} label="Custom" />
                    </RadioGroup>
                </FormControl>

                <Button
                    onClick={onClick}
                >
                    Solicitud
                </Button>
            </CardContent>
        </Card>
    </Layout>
    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const { theme = 'dark', name = 'No name' } = req.cookies

    const validThemes = ['light', 'dark', 'custom']

    return {
        props: {
            theme: validThemes.includes(theme) ? theme : 'dark',
            name
        }
    }
}

export default ThemeChangerPage