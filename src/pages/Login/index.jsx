import React from "react";
import { useState } from "react";
import { RoleData } from "../../utils/RoleData";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setRole } from "../../redux/reducers/role";

const Login = () =>
{
    const [eyeIcon, setEyeIcon] = useState(false);
    const [formData, setFormData] = useState({});

    const dispatch = useDispatch()
    
    const handleInput = (e) =>
    {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleLogin = () =>
    {

        if (!formData.name || !formData.email || !formData.password || !formData.role)
        {
            toast.error("All fields are required")

        } else
        {
            window.localStorage.setItem("isLogged", "authorize");
            window.localStorage.setItem("roleId", formData.role);
            window.location.reload(true);
            dispatch(setRole(formData.role))
        }
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
                        <input type="text" placeholder="Name" name='name' onChange={handleInput} />
                    </div>
                    <label className="login_label">Email</label>
                    <div className="login_inputWrapper">
                        <input type="text" placeholder="Email" name='email' onChange={handleInput} />
                    </div>

                    <label className="login_label">Password</label>
                    <div className="login_inputWrapper">
                        <input type={!eyeIcon ? "password" : "text"} name='password' placeholder="Password" onChange={handleInput} />
                        <i
                            onClick={() => setEyeIcon(!eyeIcon)}
                            className={eyeIcon === false ? "fas fa-eye-slash showEye" : "fas fa-eye showEye"}>
                        </i>
                    </div>
                    <label className="login_label">Select Role</label>
                    <div className="login_inputWrapper">
                        <select name='role' onChange={handleInput}>
                            <option value="" disabled selected>Choose a role</option>
                            {RoleData.map((role) => (
                                <option key={role.roleId} value={role.name}>{role.name}</option>
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
