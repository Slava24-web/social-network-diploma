import React, {useEffect, useState} from 'react';
import {register} from "../../../redux/auth/action";
import {useDispatch, useSelector} from "react-redux";
import style from './Register.module.css';

const Register = (props) => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({name: '', email: '', password: ''});

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    useEffect(() => {
        isAuthenticated && props.history.push('/');
    }, []);

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const registerHandler = (e) => {
        e.preventDefault();
        register(user, props.history);
    }

    return (
        <div className={style.registerForm}>
            <p className='sectionTitle'>Регистрация</p>
            <form action="">
                {/* Name */}
                <div>
                    {/*<Field component={Input}*/}
                    {/*       name='name'*/}
                    {/*       placeholder='Введите ваше имя'*/}
                    {/*       className='field'*/}
                    {/*       onChange={changeHandler}*/}
                    {/*/>*/}
                    <input
                        className={style.field}
                        placeholder="Ваше имя"
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={changeHandler}
                        pattern=".{3,20}"
                        required
                    />
                </div>
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
                    {/*<button*/}
                    {/*    className='button-login'*/}
                    {/*    onClick={loginHandler}*/}
                    {/*>*/}
                    {/*    Войти*/}
                    {/*</button>*/}
                    <button
                        className='button-login'
                        onClick={registerHandler}
                    >
                        Регистрация
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;