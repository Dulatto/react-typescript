import React from 'react';
import Card, {CardVariant} from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {

  const users: IUser[]=[
    {id:1, name: 'Ulbi tv', email:'asf@gmail.com', address: {city:'Montreal', street: 'decary', zipcode: '345678'}},
    {id:2, name: 'Timur', email:'asf@gmail.com', address: {city:'Toronto', street: 'decary', zipcode: '345555'}}
  ]

  return (
    <div>
     <Card onClick={(num)=> console.log('click', num)} variant={CardVariant.primary} width="200px" height="200px">
       <button>Button</button>
     </Card>
     <UserList users={users}></UserList>
    </div>
  );
};

export default App;
