import logo from "./logo.svg";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import { ChatFeed } from "./Components/ChatFeed";
function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="28d29c02-7bff-4df6-b374-9cc285173e64"
      userName="Umair"
      userSecret="1234"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
