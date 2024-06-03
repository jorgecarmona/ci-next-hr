import React from "react";

import { TextField } from "../atoms";

export default function Header(){
    const handleChange = (value: string) => {console.log (value)};

    return (
        <>
            <TextField label= "Textfield" onChangeTextField={handleChange}/>
        </>
    )
}