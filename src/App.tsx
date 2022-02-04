import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, {CardVariant} from './components/Card';
import EventsExample from './components/EventsExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {



  return (
   <BrowserRouter>
   <div>
     <div>
       <NavLink to='/users'>Users  </NavLink>
       <NavLink to='/todos'>Todo</NavLink>
     </div>
     <Route path={'/users'} exact>
       <UsersPage/>
     </Route>
     <Route path={'/todos'} exact>
       <TodosPage />
     </Route>
     <Route path={'/users/:id'}>
       <UserItemPage/>
     </Route>
     <Route path={'/todos/:id'}>
       <TodoItemPage /> 
     </Route>
   </div>   
   </BrowserRouter>
  );
};

export default App;
