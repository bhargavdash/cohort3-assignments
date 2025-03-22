function Header({setLightMode}){

    function toggleMode(){
        setLightMode(lightMode => !lightMode)
    }
    return <div>
        This is the header component
        <br></br>
        <button onClick={toggleMode}>Toggle mode</button>
    </div>
}

export default Header;