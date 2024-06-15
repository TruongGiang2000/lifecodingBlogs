import {initializeApp} from "firebase/app"
import {getAnalytics} from "firebase/analytics"

const firebaseConfig = {
	apiKey: "AIzaSyDxFWyigzGyi6w3Du0WlZBdzGf_XiaCucQ",
	authDomain: "blogs-9205a.firebaseapp.com",
	projectId: "blogs-9205a",
	storageBucket: "blogs-9205a.appspot.com",
	messagingSenderId: "1000757518492",
	appId: "1:1000757518492:web:e0d6e6cf933aed0c39cd59",
	measurementId: "G-080J3GED4G",
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
