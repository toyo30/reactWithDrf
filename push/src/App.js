import { Toaster } from "react-hot-toast";
import "./App.css";
import Notification from "./Notification";

import logo from "./logo.svg";

function App() {
  // const messaging = getMessaging(firebaseApp);
  // console.log(messaging);

  // const [isTokenFound, setTokenFound] = useState(false);

  /*
  const getToken = (setTokenFound) => {
    return getToken(messaging, {
      vapidKey:
        "BDYdzNnWjuiQ25-hqLbGNsThmmSZs6PJdXMzUhXAJbKtBZliOs4IS-aUo-NQ1lnP8wa0JKOkOd5ee7Cj7uIZUf4",
    })
      .then((currentToken) => {
        if (currentToken) {
          console.log("current token for client: ", currentToken);
          setTokenFound(true);
          // Track the token -> client mapping, by sending to backend server
          // show on the UI that permission is secured
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
          setTokenFound(false);
          // shows on the UI that permission is required
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // catch error while creating client token
      });
  };
  */

  // getToken(setTokenFound);
  /*
  messaging
    .requestPermission()
    .then(function () {
      console.log("허가!");
      return messaging.getToken(); //토큰을 받는 함수를 추가!
    })
    .then(function (token) {
      console.log(token); //토큰을 출력!
    })
    .catch(function (err) {
      console.log("fcm에러 : ", err);
    });
    */

  /*

  const [notification, setNotification] = useState({ title: "", body: "" });
  const notify = () => toast(<ToastDisplay />);
  function ToastDisplay() {
    return (
      <div>
        <p>
          <b>{notification?.title}</b>
        </p>
        <p>{notification?.body}</p>
      </div>
    );
  }

  useEffect(() => {
    if (notification?.title) {
      notify();
    }
  }, [notification]);
  requestForToken();

  onMessageListener()
    .then((payload) => {
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
    })
    .catch((err) => console.log("failed: ", err));

  */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button>push</button>
        <div>
          <Toaster />
        </div>
      </header>
      <Notification />
    </div>
  );
}

export default App;
