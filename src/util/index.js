import React from 'react'

export const SaveLogin = (data) => {
    
    try{
        const login = JSON.stringify(data);
        localStorage.setItem('login', login);
       
    } catch (err){
        return undefined;
    }
}

export const CheckLogin = (Navigate) => {
    try {
        const login = localStorage.getItem('login');
        if(login === null){
            Navigate('/login')
        }
        console.log(login)
        
    } catch (err) {
        return undefined;
    }
};

export const Logout=(Navigate)=>{
   const data=null
        localStorage.setItem('login', data);
        Navigate('/login')
}
