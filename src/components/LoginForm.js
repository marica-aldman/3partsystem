import React from "react";

const LoginForm = (props) => {
    var addClass = "";
    if (!props.showClass) {
        addClass = "hide";
    }
    return (
        <div className={addClass}>
            <form onSubmit={props.handleSubmit}>
                <div className={props.show}>
                    {props.error}
                </div>
                <div>
                    Användarnamn:
                </div>
                <div>
                    <input id={"username"} type={"text"} placeholder={"username"} onChange={props.handleChangeUsername}></input>
                </div>
                <div>
                    Lösenord:
                </div>
                <div>
                    <input id={"password"} type={"text"} placeholder={"password"} onChange={props.handleChangePassword}></input>
                </div>
                <div>
                    <button id={"login"} type={"submit"} onClick={props.handleSubmitButton}>Logga in</button>
                </div>
            </form>
        </div>
    )

}

export default LoginForm;