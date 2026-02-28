import { Client } from './client'
import Counter from './counter'

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>React Server Calendar</title>
      </head>
      <body>
        <Client compName='Counter' props={{}} Comp={Counter} />
      </body>
    </html>
  )
}
