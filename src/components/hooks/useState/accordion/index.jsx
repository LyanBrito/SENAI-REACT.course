import React, { useState } from "react";
import {ArrowBigDown} from 'lucide-react'

function Accordion(){
    const [isAccordionOpen, setIsAccordionOppen] = useState(false)

    return (
        <div>
            <p>alalala</p>
            <button onClick={()=> setIsAccordionOppen(!isAccordionOpen)}>abbaba</button><br />
            {isAccordionOpen && (
                <div>
                    <p>oioi</p>
                </div>

            )}
        </div>

    )

}

export default Accordion;