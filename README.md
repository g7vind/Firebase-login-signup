# Firebase Authentication Web App
This is a simple web application for user authentication using Firebase Authentication with email and password. The app is built using HTML, CSS, and JavaScript.

## Getting Started
Follow these steps to set up the project and configure Firebase for authentication.

### Prerequisites
1. You will need a Firebase account.

### Installation
1. Clone the repository to your local machine.
```
git clone https://github.com/g7vind/Firebase-login-signup.git
```
2. Navigate to the project directory.
```
cd firebase-authentication-web-app
```
### Firebase Configuration

1. Go to the Firebase Console.
2. Create a new Firebase project or use an existing one.
3. In the Firebase Console, go to Authentication and enable Email/Password as a sign-in method.
4. In the Firebase Console, go to Project settings (gear icon) and scroll down to the Your apps section.
5. Click on the Add app icon (</>) and select Web.
6. Register the app, and you will receive a Firebase configuration object. Copy this configuration object.

### Configuration File

1. In the project directory, create a new file named config.js.
2. Paste the Firebase configuration object into config.js as follows:
```
// Config.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Omit if not using Google Analytics
};
```
### Usage
1. Access the app in your web browser at http://localhost or the URL where you've hosted it.

### Customization

You can customize the app's UI, functionality, and styles according to your needs. The Firebase authentication functionality is already set up for you.
