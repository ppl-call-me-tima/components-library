export default function Card({ children }) {
  // TODO: hover shadows

  function handleMouseEnter(e) {
    console.log("enter")
  }

  function handleMouseLeave(e) {
    console.log("leave")
  }

  return (
    <div className="card-outer">
      <div className="card-empty"></div>
      <div 
        className="card-inner"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >{children}</div>
    </div>
  )
}
