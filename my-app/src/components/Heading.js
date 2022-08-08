const Heading = (props) => {


    return(
        <header>
            <h1 style={{ fontSize: "30px", fontWeight:"bold", color: "blue" }}>
                { props.counter}
            </h1>
        </header>
    )
}

export default Heading