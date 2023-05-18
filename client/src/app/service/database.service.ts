import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { child, get, getDatabase, ref, set } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  config() {
    const firebaseConfig = {
      apiKey: "AIzaSyAr_YIpC2srw_9jTugbXd3QrEMDaOJELus",
      authDomain: "nudthaya.firebaseapp.com",
      databaseURL: "https://nudthaya-3585e-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "nudthaya-3585e",
      storageBucket: "nudthaya-3585e.appspot.com",
      messagingSenderId: "978330329246",
      appId: "1:978330329246:web:06214319a698b4cc8ddb8f",
      measurementId: "G-HN3WG5DC6Q"
    };
  
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }

  readData() {
    this.config();
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/001`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  writeData() {
    const db = getDatabase();
    set(ref(db, 'users/' + '001'), {
      username: 'nudthaya',
      email: 'nudthayaok@gmail.com'
    });
  }


}
