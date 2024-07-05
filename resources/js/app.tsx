import './bootstrap'
import '../css/app.css'

import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

function AppWrapper({ App, props }) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light'
                }
            }),
        [prefersDarkMode]
    )

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App {...props} />
        </ThemeProvider>
    )
}

createInertiaApp({
    title: title => `${title} - ${appName}`,
    resolve: name =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx')
        ),
    setup({ el, App, props }) {
        const root = createRoot(el)

        root.render(<AppWrapper App={App} props={props} />)
    },
    progress: {
        color: '#4B5563'
    }
})
