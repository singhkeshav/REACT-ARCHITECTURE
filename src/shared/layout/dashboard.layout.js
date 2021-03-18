import React from 'react';  
import { Route } from 'react-router-dom';  
  
const DashboardLayout = ({children, ...rest}) => {  
  return (  
    <>
      {children}
    </>  
  )  
}  
  
const DashboardLayoutRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <DashboardLayout>  
          <Component {...matchProps} />  
      </DashboardLayout>  
    )} />  
  )  
};  
  
export default DashboardLayoutRoute; 