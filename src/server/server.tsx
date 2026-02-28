import { Router } from 'express'
import { renderToPipeableStream } from 'react-dom/server'
import App from '../ui/app'

const router = Router()

router.get('/', (_req, res) => {
  const { pipe } = renderToPipeableStream(<App />, {
    bootstrapScripts: ['/script.js'],
    onShellReady() {
      console.log('READY!')
      res.setHeader('Content-Type', 'text/html; utf-8')
      pipe(res)
    },
  })
})

export default router
