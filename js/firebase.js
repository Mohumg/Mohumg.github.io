// js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 👉 너의 Firebase 콘솔에서 복사한 설정 정보로 교체해야 해!
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firestore 객체 내보내기
export const db = getFirestore(app);
// Firestore 데이터베이스를 사용할 준비가 되었어!
