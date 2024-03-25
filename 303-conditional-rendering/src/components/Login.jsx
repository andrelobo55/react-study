import React from "react";
import Input from "./Input";
import inputs from "../inputs";

function Login() {
    return(
        <form className="form">
            {inputs.map(inputItem => (
                <Input key={inputItem.id} type={inputItem.text} placeholder={inputItem.placeholder} />
            ))}
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;