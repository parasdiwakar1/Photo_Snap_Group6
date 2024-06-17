import { useState, useEffect } from "react";
import Login from "./Login";
import Registration from "./Registration";

function Form({ setDatalogin }) {
    const [isLogin, setIsLogin] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    // Use useEffect to update the parent component when isLogin changes
    // useEffect(() => {
    //     setDatalogin(isLogin);
    // }, [isLogin, setDatalogin]);

    return (
        <div className="login-y">
            {/* <span
                onClick={() => document.querySelector('.login-y').style.display = 'none'}
                className="close"
            >
                &times;
            </span> */}

            
            <div className="loginbox">
                <img
                    className="login-img"
                    src="https://pixlr.com/img/misc/auth.webp"
                    alt="Login il lustration"
                />
                <div className="loginmain">
                    {showLogin ? (
                        <Login setIsLogin={setIsLogin} setShowLogin={setShowLogin} />
                    ) : (
                        <Registration setShowLogin={setShowLogin} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Form;
