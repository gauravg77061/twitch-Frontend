import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasePage from './components/BasePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AuthPage from './components/AuthPage'
import Dashboard from './components/Dashboard'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
function App() {


  return (
    <>
        <Provider store={appStore}>
    <BrowserRouter  basename='/'>

<Routes>

<Route path='/' element={<BasePage/>}>
    <Route path='/' element={<Dashboard/>}/>
  <Route path='/login' element={<AuthPage/>}/>

</Route>
</Routes>

    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
