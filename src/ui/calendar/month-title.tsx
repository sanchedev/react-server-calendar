import z from 'zod'

export const schema = z.object({
  monthName: z.string(),
  monthIndex: z.int(),
  year: z.int(),
})

export default function MonthTitle({
  monthName,
  monthIndex,
  year,
}: z.infer<typeof schema>) {
  const handleBack = () => {}
  const handleForward = () => {}

  return (
    <div className='month-title'>
      <button>{'<'}</button>
      <h2>
        <span>{monthName}</span>
        <span>{year}</span>
      </h2>
      <button>{'>'}</button>
    </div>
  )
}
