import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebaseConfig.js";

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={`Cargando...`}>
      <App />
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById("App")
);
