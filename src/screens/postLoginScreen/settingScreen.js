import React, { useState } from "react";
import ParentMemo from "../../components/reactMemo/parent";
import NavBar from "../../navbar/navBar";
import Parent from "../../components/reactMemo/parent";
import ParentusemEMO from "../../components/hooks/useMemo/parentusemEMO.JS";



const SettingScreen = () => {
    const [count, setCount] = useState(0); // Example state variable
    
    return (
        <>
            <NavBar/>
            <ParentusemEMO/>
            
            
            <h2> I am from SettingScreen</h2>
        </>
    );
};
export default SettingScreen;
