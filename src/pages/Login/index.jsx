import React from "react";
import { useState } from "react";
import { RoleData } from "../../utils/RoleData";

const Login = () =>
{
    const [eyeIcon, setEyeIcon] = useState(false);

    const handleLogin = () =>
    {
        window.localStorage.setItem("isLogged", "authorize");
        window.location.reload(true);
    };

    return (
        <div className="login">
            <div className="login_box shadow">
                <div className="login_inputSection">
                    <p className="login_head">
                        Welcome! Please <br /> Sign up to continue{" "}
                    </p>
                    <label className="login_label">Name</label>
                    <div className="login_inputWrapper">
                        <input type="text" placeholder="Name" />
                    </div>
                    <label className="login_label">Email</label>
                    <div className="login_inputWrapper">
                        <input type="text" placeholder="Email" />
                    </div>

                    <label className="login_label">Password</label>
                    <div className="login_inputWrapper">
                        <input type={!eyeIcon ? "password" : "text"} placeholder="Password" />
                        <i
                            onClick={() => setEyeIcon(!eyeIcon)}
                            className={eyeIcon === false ? "fas fa-eye-slash showEye" : "fas fa-eye showEye"}>
                        </i>
                    </div>
                    <label className="login_label">Select Role</label>
                    <div className="login_inputWrapper">
                        <select>
                            {RoleData.map((role) => (
                                <option key={role.id} value={role.id}>{role.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="login_loginBtn">
                        <button onClick={handleLogin}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
