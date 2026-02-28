import z from 'zod'

type Z = { _zod: { output: any } }

interface RegistryComp<T extends Z> {
  Component: (props: z.infer<T>) => React.ReactNode
  schema: T
}

type reg<T extends Z> = {
  default: (props: z.infer<T>) => React.ReactNode
  schema: T
}

const registerComp = <T extends Z>({
  default: comp,
  schema,
}: reg<T>): RegistryComp<T> => {
  return {
    Component: comp,
    schema,
  }
}

export const registry = {
  Counter: async () => registerComp(await import('./counter')),
}
