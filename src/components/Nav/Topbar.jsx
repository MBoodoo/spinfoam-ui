import React, { useContext } from "react"
import { motion } from "framer-motion"
import useMedia from "../../fx/useMedia"
//import ButtonGroup from "../Buttons/ButtonGroup"
import Dropdown from "../Buttons/Dropdown"

// Will Convert to Typescript 

// import HorizontalBG from "../ButtonGroup/"
/*
const Topbar: React.FC = () => {
    return (
        <>
        </>
    
    )
}
*/

/*
To Do:
    
Example: 
    <Topbar sticky={true} useProgress={true} />
    
Desc:

Props:
    sticky?: Boolean
    leaveOnRest?: Boolean
    useProgress?: Boolean
    bg: String
    p: Number
    font?: String

        Expose interpolated values and create variants based on the animation type, 
        The value is passed down to the respective child of the ButtonGroup within
    
*/

export default ({children, bg, p, showProgress, sticky, h, leaveOnRest }) => {
    
    const baseStyles = {
        background: bg,
        width: `100vw`

    }
    
    return (
        <motion.div style={{...baseStyles}}>
            {children}
        </motion.div>
    )
}