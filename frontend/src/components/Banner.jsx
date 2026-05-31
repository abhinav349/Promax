const ITEMS = [
  'INSURED & BONDED',
  'QUALITY. RELIABILITY. PROMAX.',
  'TRUSTED & RELIABLE',
  'TRAINED PROFESSIONALS',
  'ECO-FRIENDLY PRODUCTS',
]

export default function Banner() {
  const repeated = [...ITEMS, ...ITEMS]

  return (
    <div className="border-y border-yellow-500/30 bg-neutral-950 py-4 overflow-hidden">
      <div className="animate-scroll flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="mx-8 text-sm tracking-[0.2em] text-yellow-500 font-medium">
            {item} •
          </span>
        ))}
      </div>
    </div>
  )
}
