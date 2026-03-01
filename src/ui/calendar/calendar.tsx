import { Month } from './month'

interface CalendarProps {
  lang: string
  year: number
}

export function Calendar({ lang, year }: CalendarProps) {
  return (
    <main>
      {Array.from({ length: 12 }, (_, i) => (
        <Month lang={lang} monthIndex={i} year={year} key={`${year}-${i}`} />
      ))}
    </main>
  )
}
