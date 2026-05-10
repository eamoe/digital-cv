interface SectionLabelProps {
  index: string
  path: string
  kicker?: string
}

export default function SectionLabel({ index, path, kicker }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs text-muted uppercase tracking-widest mb-12">
      <span className="text-primary">{index}</span>
      <span className="w-8 h-px bg-muted/40" />
      <span>{path}</span>
      {kicker && (
        <>
          <span className="w-8 h-px bg-muted/40" />
          <span>{kicker}</span>
        </>
      )}
    </div>
  )
}
