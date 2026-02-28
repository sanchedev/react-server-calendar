import type z from 'zod'
import type { registry } from './registry'

type Detector<T extends keyof typeof registry> = Awaited<
  ReturnType<(typeof registry)[T]>
>

interface ClientProps<T extends keyof typeof registry> {
  compName: T
  props: z.infer<Detector<T>['schema']>
  Comp: Detector<T>['Component']
}

export function Client<T extends keyof typeof registry>({
  compName,
  props,
  Comp,
}: ClientProps<T>) {
  return (
    <div data-island={compName} data-props={JSON.stringify(props)}>
      {
        // @ts-ignore
        <Comp {...props} />
      }
    </div>
  )
}
