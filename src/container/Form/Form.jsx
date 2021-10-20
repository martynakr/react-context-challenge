import styles from "./Form.module.scss"
import { useContext } from "react"
import { ToggleContext } from "../../Context/ToggleContext"

export const Form = () => {
    const {theme}= useContext(ToggleContext)
    console.log(theme)

    let classes;
  
    theme ? classes = styles.LightMode : classes = styles.DarkMode

    return (
        <div className={classes}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="First Name" id="firstName"/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder="Last Name" id="lastName"/>
            <button>Submit</button>
        </div>
    )
}
