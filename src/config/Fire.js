import firebase from "firebase";

  const config = {
    apiKey: "AIzaSyBVXKDhOxUkn3LwQhro3Ps8KTlDavsPta0",
    authDomain: "react-firebase-authentic-e384c.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-e384c.firebaseio.com",
    projectId: "react-firebase-authentic-e384c",
    storageBucket: "react-firebase-authentic-e384c.appspot.com",
    messagingSenderId: "828980760631"
  };
  const fire = firebase.initializeApp(config);
  export default fire;