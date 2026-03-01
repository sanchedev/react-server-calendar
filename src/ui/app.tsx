import { Calendar } from './calendar/calendar'

interface AppProps {
  lang: string
  year: number
}

export default function App({ lang, year }: AppProps) {
  return (
    <html lang={lang}>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>React Server Calendar</title>
        <link rel='shortcut icon' href='/favicon.svg' type='image/svg' />
        <link rel='stylesheet' href='/style.css' />
      </head>
      <body>
        <Calendar lang={lang} year={year} />
      </body>
    </html>
  )
}
