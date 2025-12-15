import { Provider } from "react-redux"
import store from "./store"
import Home from "./pages/Home"


function App() {

  return (
    <Provider store={store}>
      <h1>Vite</h1>
      <Home />

    </Provider>
  )
}
export default App
