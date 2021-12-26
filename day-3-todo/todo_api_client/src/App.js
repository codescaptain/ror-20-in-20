import Container from "./components/Container";
import { TodoProvider } from "./contenxt/TodoContext";

function App(){
 
  return (
    <>
    <TodoProvider >
      <Container/>
    </TodoProvider>
    </>
  );
}

export default App;
