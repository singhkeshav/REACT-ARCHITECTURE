import React from 'react';  
import { Route } from 'react-router-dom';  
import Header from '../../modules/core/shared/Header/Header';
  
const HomeLayout = ({children, ...rest}) => {  
  return (  
    <>
     <Header />
      {children}
    </>  
  )  
}  
  
const HomeLayoutRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <HomeLayout>  
          <Component {...matchProps} />  
      </HomeLayout>  
    )} />  
  )  
};  
  
export default HomeLayoutRoute; 