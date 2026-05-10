interface SectionLabelProps {
  index: string
  path: string
  kicker?: string
}

export default function SectionLabel({ index, path, kicker }: SectionLabelProps) {
  return (
    <div className="flex flex-col gap-1 mb-12">
      <div className="flex items-center gap-3 font-mono text-xs text-muted">
        <span className="text-primary">{index}</span>
        <span className="w-8 h-px bg-muted/40" />
        <span>{path}</span>
      </div>
      {kicker && (
        <p className="text-muted text-sm mt-1">{kicker}</p>
      )}
    </div>
  )
}
