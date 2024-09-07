import React, { useState } from 'react';
import "./LoginScreen.css"
import SignupScreen from './SignupScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    
    <div className='loginScreen'>
        <div className="LoginScreen_background">
            <img className="LoginScreen_logo"
             src="https://jalaworld.com/wp-content/uploads/2021/07/Fairplay_Logos-02.png" alt=""/>
             <button onClick={()=>setSignIn(true)}
              className='LoginScreen_button'>
                Sign In
             </button>
             <div className="loginScreen_gradiant"/>
</div>
<div className="loginScreen_body">
  {signIn ?(
    <SignupScreen/>
  ):(
<>
    <h1>Unlimited films, TV programmes and
         more</h1>
         <h2>Watch anywhere. Cancel any time.</h2>
         <h3>
            Ready to watch?Enter your email to create or restart membership

         </h3>
   <div className="loginScreen_input">
    <form>
        <input type="email"placeholder="Email Address"/>
        <button 
        onClick={()=> setSignIn(true)}
        className="loginScreen_getStarted"
        >
            GET STARTED
        </button>
    </form>
   </div>
    </>
  )}

  </div>
  </div>
 );
}
export default LoginScreen;
