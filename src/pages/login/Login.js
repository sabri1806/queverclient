import React from 'react';
// import { withRouter } from 'react-router-dom';
// import 'firebase/auth';
// import * as firebase from 'firebase/app';
// import firebaseConfig from '../firebaseConfig';
// import withFirebaseAuth from 'react-with-firebase-auth';

// const firebaseApp = firebase.initializeApp(firebaseConfig);

const Login = ({ history, signInWithGoogle, signOut, user }) => {
  // if (user) {
  //   localStorage.setItem(
  //     'user',
  //     JSON.stringify({
  //       displayName: user.displayName,
  //       email: user.email,
  //       photoUrl: '',
  //     }),
  //   );
  //   signOut();
  //   history.push('/show-favourite');
  // }

  return (
    <div style={{ textAlign: 'center', marginTop: '75px' }}>
      <p>Please, Sign in</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

// export default withRouter(
//   withFirebaseAuth({
//     providers,
//     firebaseAppAuth,
//   })(Login),
// );

export default Login;
