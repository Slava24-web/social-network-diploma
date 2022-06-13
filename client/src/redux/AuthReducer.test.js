import reducer, {login} from './auth/reducer';

let state = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

// test('Check authorization', () => {
//     // Подготовка данных
//     login('shubinshoter24@gmail.com', 'Slava28042', false);
//
//     // action
//     let auth = reducer(state, action);
//
//     // Проверка результатов
//     expect(auth.isAuth).toBe(true);
// });