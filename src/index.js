import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store"
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

store.subscribe(() => console.log(store.getState()));


// import app from "./firebase";

const root = ReactDOM.createRoot(document.getElementById('root'));
// fetching image

// const ImageComponent = () => {
//   const [imageUrl, setImageUrl] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const db = getDatabase();
//       const imageRef = ref(db, 'Image');
      
//       onValue(imageRef, (snapshot) => {
//         const data = snapshot.val();
//         setImageUrl(data);
//       });
//     };

//     fetchData();
//   }, []);
//   return (
//     <img src={imageUrl} alt="Fetched" />
//   );
// };
// function MyApp({ Component, pageProps }) {
//   const redirectUri = typeof window !== 'undefined' ? window.location.origin : '';

root.render(
  <React.StrictMode>
 <Router>
  <Provider store={store}>
  <Auth0Provider
    domain="dev-koz3ivhq2dj0py06.us.auth0.com"
    clientId="YuVDD9MLXS3Mjc5oaStdTlyYGE6wzJ2J"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
 <App/>
 </Auth0Provider>,
 </Provider>
      </Router>
  </React.StrictMode>
);

reportWebVitals();