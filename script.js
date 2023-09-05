const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
const signupLabel = document.querySelector('.signup label');
const loginLabel = document.querySelector('.login label');
const signupForm = document.querySelector('.registration.form');
const loginForm = document.querySelector('.login.form');
const signupCheckbox = document.querySelector('#check');
signupLabel.addEventListener('change', () => {
  signupForm.style.display = 'block';
  loginForm.style.display = 'none';
});
loginLabel.addEventListener('change', () => {
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});
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
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
      })
      .catch((error) => {
        alert('Error saving user data to Firestore: ', error);
      });
    })
    .catch((error) => {
      alert('Error signing up: '+error.message);
    });
});

const loginBtn = document.querySelector('.loginbtn');
loginBtn.addEventListener('click', () => {
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