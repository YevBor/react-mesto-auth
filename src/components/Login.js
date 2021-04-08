import React from 'react';

function Login(props){
    return(
        <div className="login">
            <h2 className="login__title">Вход</h2>
            <form className="login__form" 
            // onSubmit={handleSubmit}
            >
                <input
                    // required
                    // id="email"
                    // name="email"
                    // type="email"
                    className="login__form_input"
                    placeholder="Email"
                    // value={email}
                    // onChange={handleChangeEmail}
                    />
                <input
                    required
                    // id="password"
                    // name="password"
                    // type="password"
                    className="login__form_input"
                    placeholder="Пароль"
                    // value={password}
                    // onChange={handleChangePassword}
                    />
                <button
                    type="submit"
                    className="login__form_button">
                        Войти
                </button>
            </form>
        </div>
    );
}

export default Login