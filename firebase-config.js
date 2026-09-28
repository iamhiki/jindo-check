// Firebase 콘솔 → 프로젝트 설정(톱니바퀴) → 내 앱 → 웹 앱의 "SDK 설정 및 구성"에 나오는 값을 붙여넣으세요.
// 이 값은 비밀번호가 아니라 "어느 Firebase 프로젝트인지" 알려주는 주소 같은 것이라 공개돼도 괜찮아요.
// 기록을 지키는 건 firestore.rules(본인 기록만 읽고 쓰기)예요.
// 비워두면 로그인 없이 이 기기에만 저장하는 모드로 동작해요.
window.FIREBASE_CONFIG = {
  apiKey: "여기에-apiKey",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
