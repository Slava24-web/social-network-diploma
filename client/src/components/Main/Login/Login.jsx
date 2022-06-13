import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login, register} from "../../../redux/auth/reducer";
import {Input} from "../Common/FormControls/FormControls";
import './Login.css';

const Login = (props) => {
    const [form, setForm] = useState({email: '', password: ''});
    console.log(form)

    const loginHandler = () => {
        props.login(form.email, form.password);
    }

    const registerHandler = () => {
        props.register(form.email, form.password);
    }

    const onChangeField = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    // if (props.isAuth) {
    //     return <Redirect to='/profile' />
    // }
    return <div className='login'>
        <p className='sectionTitle'>Авторизация</p>
        <div className='wrapper'>
            <LoginReduxForm
                loginHandler={loginHandler}
                registerHandler={registerHandler}
                onChangeField={onChangeField}
            />
        </div>
    </div>
}

// Form
const LoginForm = (props) => {
    return <div>
        {/* Login */}
        <div>
            <Field component={Input}
                   name='email'
                   placeholder='Введите email'
                   // validate={[required]}
                   className='field'
                   onChange={props.onChangeField}
            />
        </div>
        {/* Password */}
        <div>
            <Field component={Input}
                   name='password'
                   placeholder='Введите пароль'
                   type='password'
                   // validate={[required]}
                   className='field'
                   onChange={props.onChangeField}
            />
        </div>

        <div>
            <button
                className='button-login'
                onClick={props.loginHandler}
            >
                Войти
            </button>
            <button
                className='button-register'
                onClick={props.registerHandler}
            >
                Регистрация
            </button>
        </div>
    </div>
};

const LoginReduxForm = reduxForm({
    // Уникальное имя формы
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {login, register})(Login);