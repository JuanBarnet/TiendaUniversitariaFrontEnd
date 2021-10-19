import React, { useState } from 'react'
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';

const Home= ()=> {
   const Router = useRouter();
   const {user, login, isAuthenticated}= useAuth();
   const formInitialValues= {
      email: "",
      password: ""
   }
   const [formValues, setFormValues]= useState(formInitialValues);
   const {email, password}= formValues;

   const handleChangeForm= (e:any)=> {
      setFormValues({
         ...formValues,
         [e.target.name]: e.target.value
      });
   }

   const handleSubmit= async (e:any)=> {
      e.preventDefault();
      const resp= await login(email, password);
      if(resp){
         console.log("user authenticated");
      }else{
         console.log("invalid credentials");
      }
   }

   const loginForm= (
      <form
         onSubmit={handleSubmit}
         autoComplete="off"
      >
         <label>email: </label>
         <input
            id="email"
            name="email"
            placeholder="correo@gmail.com"
            value={email}
            onChange={handleChangeForm}
         />
         <br/>
         <label>password: </label>
         <input
            id="password"
            name="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={handleChangeForm}
         />
         <br/>
         <button>INGRESAR</button>
      </form>
   );
   // console.log("login");

   if(isAuthenticated()){
      Router.replace("/pn");
   }else{
      return loginForm;
   }
   return null;
}

export default Home;

export async function getStaticProps(context:any) {
   return {
      props: {
         protected: false,
         permissions: []
      }
   };
}