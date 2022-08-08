

const Topbar = (props) => {

  const headerStyle = (props.mode === "dark" ? "black" : "#ddd")
  const textStyle = (props.mode === "dark" ? "white" : "#333")

  return (
    <div style={{ height: "80px", width: "100%", backgroundColor: headerStyle }}>
      <p style={{ color: textStyle }}>Here is some content.</p>
      <button onClick={ () => props.setMode( props.mode === "dark" ? "light" : "dark" ) }>Change Mode</button>
    </div>
  )
}

export default Topbar