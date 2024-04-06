import React, { useState } from 'react'
import './login.style.scss'
import Logo from '../../assets/image/logo_big.png'
import { useNavigate } from 'react-router-dom'
import { ToastOnFailure, ToastOnSuccess } from '../../utils/Toast/Toast'
import { HttpCallPost } from '../../utils/services/NetworkCall'
import { LOGIN } from '../../utils/services/EndPoints'

const Login = (props:any) => {
    const {setSigninStatus} = props;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    
    const navigate = useNavigate()

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(email.length==0){
            ToastOnFailure("Please Enter the email")
           return  
        }
        if(password.length==0){
            ToastOnFailure("Please Enter the password")
           return  
        }
        HttpCallPost(LOGIN, {
            email:email,
            password:password
        })
        .then((response: any) => {
          setLoading(false);
          if (response?.data?.status == 200) {
            setEmail("");
            setPassword("");
            sessionStorage.setItem(
              "AUTHTOKEN_USER",
              response?.data?.data[0]?.authToken
            );
            sessionStorage.setItem("USER_ID", response?.data?.data[0]?.userId);
            ToastOnSuccess(response?.data?.msg);
            if (sessionStorage.getItem("previousUrl")) {
              navigate(`${sessionStorage.getItem("previousUrl")}`);
            } else {
              navigate('/dashboard', { replace: true });
            }
          } else if (response?.data?.status == 201) {
            setEmail("");
            setPassword("");
            ToastOnSuccess(response?.data?.msg);
            // navigate(VerifyPath, {
            //   state: {
            //     customerForgotPassMobileNumber: mobileLogin,
            //     customerForgotPassID: response.data.userPhoneId,
            //     reDirectionUrl: "/login",
            //   },
            //   replace: true,
            // });
          } else {
            ToastOnFailure(response?.data?.msg);
          }
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
        // sessionStorage.setItem("AUTH_TOKEN", response.data.data.token);
        // setSigninStatus(true);

    }

    return (
        <div className="login">
            <div className="login__background" />
            <div className="login__content">
                <form className="login__form" onSubmit={handleSubmit}>
                    <div className="login__form-group">
                        <div className="login__logo">
                            <img className="login__bg" src={Logo} />
                        </div>
                        <strong className="login__heading">Sign in to Admin portal</strong>
                        <label className="login__label" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="login__input"
                            id="email"
                            type="email"
                            value={email}
                            placeholder="Email"
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="login__form-group">
                        <label className="login__label" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="login__input"
                            id="password"
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button className="login__button" type="submit">
                        Login
                    </button>
                    <div className="login__form-group">
                        <a
                            className="login__forget-password"
                            onClick={()=> navigate('/forget-password')}
                        >
                            Forgot Password
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
