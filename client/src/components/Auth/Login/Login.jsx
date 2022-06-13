import React, {useEffect, useState} from 'react';
import {login} from "../../../redux/auth/action";
import {useDispatch, useSelector} from "react-redux";
import style from './Login.module.css';
import {Field} from "redux-form";
import {Input} from "../../Main/Common/FormControls/FormControls";

const Register = (props) => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({email: '', password: ''});

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    // useMemo(() => {
    //     isAuthenticated && props.history.push('/');
    // }, [isAuthenticated]);

    useEffect(() => {
        isAuthenticated && props.history.push('/');
    }, [isAuthenticated]);

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(login(user));
    }

    return (
        <div className={style.loginForm}>
            <p className='sectionTitle'>Авторизация</p>
            <form action="">
                {/* Login */}
                <div>
                    {/*<Field component={Input}*/}
                    {/*       name='email'*/}
                    {/*       placeholder='Введите email'*/}
                    {/*       className='field'*/}
                    {/*       onChange={changeHandler}*/}
                    {/*/>*/}
                    <input
                        className={style.field}
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={changeHandler}
                        pattern=".{5,30}"
                        required
                    />
                </div>
                {/* Password */}
                <div>
                    {/*<Field component={Input}*/}
                    {/*       name='password'*/}
                    {/*       placeholder='Введите пароль'*/}
                    {/*       type='password'*/}
                    {/*       className='field'*/}
                    {/*       onChange={changeHandler}*/}
                    {/*/>*/}
                    <input
                        className={style.field}
                        placeholder="Пароль"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={changeHandler}
                        pattern=".{6,30}"
                    />
                </div>

                <div>
                    <button
                        className='button-login'
                        onClick={loginHandler}
                    >
                        Войти
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;