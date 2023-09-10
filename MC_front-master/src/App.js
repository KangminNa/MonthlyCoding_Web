import Main from './component/main';

import React from "react"
import { useMediaQuery } from "react-responsive"

/* Mobile */
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)"
  });
  console.log('mobile'); 
  return <>{isMobile && children}</>
}

/* PC */
export const Pc = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:769px)"
  });
  console.log('pc');
  return <>{isPc && children}</>
}

/* 디바이스 구별 */
export const Device = ({children}) => {
  const result = <>{Pc && true ? children : Mobile}</>
  return result;
}
function App() {
  return (
    <>
      <Device><Main/></Device>
    </>
  );
}

export default App;
