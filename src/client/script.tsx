import { hydrateRoot } from 'react-dom/client'
import { registry } from '../ui/registry'

const today = new Date()
const d = today.getDate()
const m = today.getMonth()
const y = today.getFullYear()

document
  .querySelectorAll(`[data-day="${d}"][data-month="${m}"][data-year="${y}"]`)
  .forEach((el) => el.classList.add('today'))

document.querySelectorAll('[data-island]').forEach(async (el) => {
  const name = el.getAttribute('data-island')! as keyof typeof registry
  const module = await registry[name]()

  const { data: props } = module.schema.safeParse(
    JSON.parse(el.getAttribute('data-props')!),
  )

  if (props == null) return

  const Component = module.Component

  // @ts-ignore
  hydrateRoot(el, <Component {...(props ?? {})} />)
})
