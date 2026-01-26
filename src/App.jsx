import BasePage from "./components/BasePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import Channels from "./components/Channels";
import ChannelDetails from "./components/ChannelDetails ";
import Settings from "./components/Settings";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<BasePage />}>

            {/* Dashboard Layout */}
            <Route path="/" element={<Dashboard />}>
              
              {/* Dashboard nested routes */}
              <Route index element={<Channels />} />
              <Route path="channels" element={<Channels />} />
              <Route path="settings" element={<Settings />} />
              <Route path="channels/:id" element={<ChannelDetails />} />

            </Route>

            <Route path="/login" element={<AuthPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
