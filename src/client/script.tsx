import { hydrateRoot } from 'react-dom/client'
import { registry } from '../ui/registry'

document.querySelectorAll('[data-island]').forEach(async (el) => {
  const name = el.getAttribute('data-island')! as keyof typeof registry
  const module = await registry[name]()

  const { data: props } = module.schema.safeParse(
    JSON.parse(el.getAttribute('data-props')!),
  )
  const Component = module.Component

  hydrateRoot(el, <Component {...(props ?? {})} />)
})
