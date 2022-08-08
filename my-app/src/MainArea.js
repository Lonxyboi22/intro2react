const MainArea = (props) => {

    const mainStyle = (props.mode === "dark" ? "black" : "#ddd")
    const textStyle = (props.mode === "dark" ? "white" : "#333")
  
    return (
      <div>
        <div style={{ width: "800px", height: "300px", margin: "30px auto", backgroundColor: mainStyle }}>
        <p style={{ color: textStyle }}>Here is some content.</p>
      </div>

      <div>
        <input 
          type= "text"
          name="name"
          placeholder="Enter your name here"
          value = { props.name }
          onChange={props.changeName}
        />
      </div>
    </div>
      
    )
  }
  
  export default MainArea