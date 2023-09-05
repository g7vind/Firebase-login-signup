const firebaseConfig = {
  apiKey: "AIzaSyCVuYoNcRpyMP5rPE3iDcLTA67xHs0nZ8Y",
  authDomain: "login-signup-71635.firebaseapp.com",
  projectId: "login-signup-71635",
  storageBucket: "login-signup-71635.appspot.com",
  messagingSenderId: "685412479236",
  appId: "1:685412479236:web:1e5edbc8621e0d9a04e051",
  measurementId: "G-LNG75DN2HK"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const signoutBtn = document.querySelector('#signoutbtn');
signoutBtn.addEventListener('click', () => {
  auth.signOut()
    .then(() => {
      alert('User signed out successfully');
      location.href = "index.html";
    })
    .catch((error) => {
      alert('Error signing out: ', error);
    });
});