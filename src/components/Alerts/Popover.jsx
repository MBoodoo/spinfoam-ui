import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Add default props 
// 

/*
To Do: 

Desc:

Exmaple:

Props: 
  

*/

export default ({ children }) => {
    return <Popover> {children} </Popover>
}

export const Popover = styled(motion.div)`
    height: 10em;
    width: 10em;
    border: 1px solid black;
`