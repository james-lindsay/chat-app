import { useState } from "react";
import AuthPage from "./Pages/AuthPage/AuthPage";
import ChatsPage from "./Pages/ChatsPage/ChatsPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
