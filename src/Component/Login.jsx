 
import { useState } from "react";
function Login({ setIsLogin, setShowLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginFailed, setLoginFailed] = useState(false);

    const handleLogin = async () => {
        const res = await fetch("https://fullstack-ecom-render.onrender.com/account/login/", {
            method: "POST",
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        if (res.status === 200) {
            setIsLogin(true);
        } else {
            setLoginFailed(true);
        }
    };

    return (
        <>
            
            <div id="form-container">
                <h1 className="login-h1">Hi there!</h1>
                <h4>Welcome to Photo Shop, <br /> so happy to see you!
                </h4>
                {/* <h3 className="title">Login</h3> */}
                <div className="databox">

                <div className="label">Username</div>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                <div className="label">Password</div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <input
                    type="button"
                    className="submit_s"
                    value="Login"
                    onClick={handleLogin}
                    />
                <div className="label msg">
                    ◆ Don't have an account?{" "}
                    <a
                        className="heading"
                        onClick={() => setShowLogin(false)}
                        href="#"
                        >
                        Register
                    </a>
                    {loginFailed && <p>Login Failed! Invalid username or password.</p>}
                </div>
                </div>
            </div>
        </>
    );
}

export default Login;







