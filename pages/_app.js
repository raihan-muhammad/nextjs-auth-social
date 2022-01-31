import '../styles/globals.css'
import store, { persistor } from "./../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp
