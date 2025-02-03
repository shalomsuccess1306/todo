import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
    production: false,
    firebaseConfig : {
        apiKey: "AIzaSyDcEDzXC0Ymfi_npQPOwWB9YUOAAcQbVVA",
        authDomain: "shalom-eb628.firebaseapp.com",
        projectId: "shalom-eb628",
        storageBucket: "shalom-eb628.firebasestorage.app",
        messagingSenderId: "774511067471",
        appId: "1:774511067471:web:b48b9e93429ba92b39053a",
        measurementId: "G-0WNFJX31CC"
      }
  };
    // Initialize Firebase
   export const app = initializeApp(environment.firebaseConfig);
   export  const analytics = getAnalytics(app);