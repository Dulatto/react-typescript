import React, {FC, useEffect, useState} from 'react';
import axios from 'axios';
import { IUser } from '../types/types';
import {useParams} from 'react-router-dom';

interface UserItemPageParams {
    id: string;
}

const UserItemPage:FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const param = useParams<UserItemPageParams>();

    useEffect(() => {
       fetchUser()    
    }, [])
  
    async function fetchUser(){
      try{
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + param.id)
        setUser(response.data)
      } catch(e){
        alert(e)
      }
    }
    return (
        <div>
            <button>Back</button>
            <h1>User {user?.name} page</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city}  {user?.address.street}  {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;