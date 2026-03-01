import { Router, type Request } from 'express'
import { renderToPipeableStream } from 'react-dom/server'
import App from '../ui/app'

const router = Router()

router.get('/{:year}', (req, res) => {
  const rawYear = req.params.year

  let year: number

  if (rawYear == null) {
    year = new Date().getFullYear()
  } else {
    year = Number(rawYear)
    if (isNaN(year)) res.sendStatus(404)
    if (rawYear !== year.toString()) res.sendStatus(404)
  }

  const lang = getLocaleFromRequest(req)
  const { pipe } = renderToPipeableStream(<App lang={lang} year={year} />, {
    bootstrapScripts: ['/script.js'],
    onShellReady() {
      console.log('READY!')
      res.setHeader('Content-Type', 'text/html; utf-8')
      pipe(res)
    },
  })
})

function getLocaleFromRequest(req: Request) {
  const acceptLanguage = req.headers['accept-language']
  if (!acceptLanguage) return 'en'

  const languages = acceptLanguage.split(',').map((lang) => lang.trim())
  const primaryLanguage = languages[0]?.split(';')[0] ?? 'es'
  return primaryLanguage
}

export default router
