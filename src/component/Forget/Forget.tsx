import React, { useState } from 'react'
import './forget.style.scss'
import Logo from '../../assets/image/logo_big.png'
import { useNavigate } from 'react-router-dom';

const Forget = (props:any) => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // onLogin(email, password);
    }

    const handleForgetPasswordClick = () => {
        navigate('/login')   
    }

    return (
        <div className="forget">
            <div className="forget__background" />
            <div className="forget__content">
                <form className="forget__form" onSubmit={handleSubmit}>
                    <div className="forget__form-group">
                        <div className="forget__logo">
                            <img className="forget__bg" src={Logo} />
                        </div>
                        <strong className="forget__heading">Forget Password</strong>
                        <label className="forget__label" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="forget__input"
                            id="email"
                            type="email"
                            value={email}
                            placeholder="Email"
                            onChange={handleEmailChange}
                        />
                    </div>
                    <button className="forget__button" type="submit">
                        Submit
                    </button>
                    <div className="forget__form-group">
                        <a
                            className="forget__forget-password"
                            onClick={handleForgetPasswordClick}
                        >
                            Back To Login
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Forget
