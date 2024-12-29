import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/postLoginScreen/homeScreen";
import SettingScreen from "../screens/postLoginScreen/settingScreen";
import ProductScreen from "../screens/postLoginScreen/productScreen";
import AboutScreen from "../screens/postLoginScreen/aboutScreen";
import InvalidScreen from "../screens/preLoginScreen/invalidScreen";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationStack = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/settings" element={<SettingScreen />} />
        <Route path="/product" element={<ProductScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="*" element={<InvalidScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationStack;
