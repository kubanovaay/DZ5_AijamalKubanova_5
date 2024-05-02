import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import { UsersList } from './features/users/UserList';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <UsersList />
    </Provider>,
    document.getElementById('root')
);



