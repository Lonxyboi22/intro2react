import Heading from "./Heading"
//heading component

const Header = (props) => {


    return(
        <header>
            <Heading title= { props.message }/>
        </header>
    )
}

export default Header