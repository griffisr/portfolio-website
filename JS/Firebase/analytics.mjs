  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDFh3pASlwH2fGOWMcB5l8loeHp4XEpyMc",
    authDomain: "portfolio-4b459.firebaseapp.com",
    projectId: "portfolio-4b459",
    storageBucket: "portfolio-4b459.appspot.com",
    messagingSenderId: "66016135572",
    appId: "1:66016135572:web:8e105af0852b271ec4a781",
    measurementId: "G-GE5SMLVWX7"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  