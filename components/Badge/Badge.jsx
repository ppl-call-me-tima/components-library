export default function Badge({
  children,
  type = "square",
  theme = "gray",
}) {
  const className = `badge ${type} ${theme}`

  return (
    <div className={className}>{children}</div>
  )
}
