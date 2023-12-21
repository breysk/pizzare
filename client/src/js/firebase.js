import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4AsmMBqbiTV71l4mavtkGMvCvpsMemGY",
  authDomain: "pizzare-online.firebaseapp.com",
  projectId: "pizzare-online",
  storageBucket: "pizzare-online.appspot.com",
  messagingSenderId: "838877772306",
  appId: "1:838877772306:web:935126ee1644d84f8d76cb",
  measurementId: "G-61R482TRNE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);