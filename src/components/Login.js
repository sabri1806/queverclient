import React from 'react';



const Login = ({user, signInWithGoogle, history}) => {
    user && console.log(user.email)
    console.log(history);
   // localStorage.setItem('movieUser',user.email);
   if (user) {
    window.location = '/';
   }

    return (
       
        <div style={{textAlign:'center', marginTop:'75px'}}>
            <p>Please, Sign in</p>
            <button onClick={signInWithGoogle}>
                Sign in with Google
                </button>
        </div>
    );
}

export default Login;
