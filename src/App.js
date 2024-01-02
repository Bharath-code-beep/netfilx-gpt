import React from 'react'
import Body from "./Components/Body"
import appStore from "./utilis/appStore";
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store = {appStore}>
    <Body/>
    </Provider>
  )
}

export default App;

