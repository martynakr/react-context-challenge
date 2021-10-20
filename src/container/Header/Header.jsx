import { ToggleContext } from "../../Context/ToggleContext"
import { useContext, useState} from "react"
import styles from "./Header.module.scss"

const Header = () => {
    // const [currentTheme, setCurrentTheme] = useState()

    const {theme, setTheme} = useContext(ToggleContext)
    const handleClick = () => {
        setTheme(!theme)
        // setCurrentTheme()
    }

    let classes;

    theme ? classes = styles.BtnLightMode : classes = styles.BtnDarkMode


    return (
        <div>
            <button className={classes} onClick={handleClick}>
                {theme ? "Change to Dark Mode" : "Change to Light Mode" }
            </button>
        </div>
    )
}

export default Header
