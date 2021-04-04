import React, { useState,useEffect } from 'react';  
import { Route,Redirect } from 'react-router-dom';  
  
const AuthMode = ({children}) => {  
  return (  
    <>
      {children}
    </>  
  )  
}  
  
const AuthRoute = ({component: Component, ...rest}) => {  
    const token = localStorage.getItem('token');
    const [isPrivate] = useState(rest.isPrivate)
    useEffect(() => {
       console.log(isPrivate,'isPrivate')
      return () => {
       
      }
    }, [isPrivate])
    
  return (  
      <>
       {
            (!isPrivate || token) ?  <Route {...rest} render={matchProps => (  
            <AuthMode>  
                <Component {...matchProps} />  
            </AuthMode>  
          )} /> 
          : 
          <Redirect to="/login"/>
       }
      </>
    
  )  
};  
  
export default AuthRoute; 