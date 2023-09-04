const firebaseConfig = {
    apiKey: "AIzaSyCVuYoNcRpyMP5rPE3iDcLTA67xHs0nZ8Y",
    authDomain: "login-signup-71635.firebaseapp.com",
    projectId: "login-signup-71635",
    storageBucket: "login-signup-71635.appspot.com",
    messagingSenderId: "685412479236",
    appId: "1:685412479236:web:1e5edbc8621e0d9a04e051",
    measurementId: "G-LNG75DN2HK"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const signupBtn = document.querySelector('.signupbtn');
  signupBtn.addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;
        firestore.collection('users').doc(uid).set({
          name: name,
          username: username,
          email: email,
        })
        .then(() => {
          alert('User data saved to Firestore');

        })
        .catch((error) => {
          alert('Error saving user data to Firestore: ', error);
        });
      })
      .catch((error) => {
        console.error('Error signing up: ', error);
      });
  });
  const loginForm = document.querySelector('.loginbtn');
  loginForm.addEventListener('click', () => {
    const email = document.querySelector('#inUsr').value;
    const password = document.querySelector('#inPass').value;
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('User logged in: ', user);
        location.href = "signout.html";
      })
      .catch((error) => {
        alert('Error signing in: ', error);
      });
  });