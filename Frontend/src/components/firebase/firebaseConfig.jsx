import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Guard initialization: some dev setups may not set Firebase env vars (e.g. local dev).
// Initializing Firebase with undefined/empty values can sometimes throw or cause
// runtime errors that prevent the whole app from rendering. We export `null`
// when Firebase isn't configured so callers must handle the absent config.

const hasFirebaseConfig = Boolean(
  import.meta.env.VITE_FIREBASE_API_KEY &&
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN &&
    import.meta.env.VITE_FIREBASE_PROJECT_ID &&
    import.meta.env.VITE_FIREBASE_APP_ID
);

let FireBaseConfig = null;
try {
  if (hasFirebaseConfig) {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };

    FireBaseConfig = initializeApp(firebaseConfig);
  }
} catch (err) {
  // swallow initialization errors so the app doesn't crash entirely
  // developer can check console for details
  // eslint-disable-next-line no-console
  console.error("Firebase initialization failed:", err);
  FireBaseConfig = null;
}

export default FireBaseConfig;