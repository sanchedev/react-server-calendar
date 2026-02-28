import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.send('<h1>Hello World</h1>')
})

export default router
