const WEEKS = 52
const DAYS  = 7

const INTENSITY_COLORS = [
  'bg-white/5',
  'bg-primary/20',
  'bg-primary/40',
  'bg-primary/65',
  'bg-primary/90',
]

// Deterministic value in [0, 1] for a given cell — no Math.random()
function cellValue(week: number, day: number): number {
  const seed = week * DAYS + day
  // LCG constants (Numerical Recipes)
  const n = (seed * 1664525 + 1013904223) & 0x7fffffff
  return n / 0x7fffffff
}

function intensity(week: number, day: number): number {
  const raw      = cellValue(week, day)
  const recency  = (week / WEEKS) * 0.3          // recent weeks denser
  const weekend  = (day === 0 || day === 6) ? 0.25 : 0  // weekends lighter
  const value    = raw + recency - weekend

  if (value < 0.30) return 0
  if (value < 0.50) return 1
  if (value < 0.65) return 2
  if (value < 0.80) return 3
  return 4
}

export default function ContributionGraph() {
  const cells = Array.from({ length: WEEKS * DAYS }, (_, i) => {
    const week = Math.floor(i / DAYS)
    const day  = i % DAYS
    return { week, day, level: intensity(week, day) }
  })

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-mono text-muted">activity // last 52 weeks</p>
      <div
        className="grid gap-0.5"
        style={{
          gridTemplateRows:  `repeat(${DAYS}, minmax(0, 1fr))`,
          gridAutoFlow:      'column',
          gridAutoColumns:   'minmax(0, 1fr)',
        }}
      >
        {cells.map(({ week, day, level }) => (
          <div
            key={`${week}-${day}`}
            className={`aspect-square rounded-sm ${INTENSITY_COLORS[level]}`}
          />
        ))}
      </div>
      <div className="flex items-center justify-end gap-1.5 mt-1">
        <span className="text-xs text-muted font-mono">less</span>
        {INTENSITY_COLORS.map((cls, i) => (
          <div key={i} className={`w-2.5 h-2.5 rounded-sm ${cls}`} />
        ))}
        <span className="text-xs text-muted font-mono">more</span>
      </div>
    </div>
  )
}
