/*
/ created by Han
/ 
/ Show/Hide Menu when click the button "MENU"
/
/ useState, Boolean
/
*/
/*eslint-disable*/

import React, { useState } from "react";
import { InfoSection } from "../../components";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

import { BtnStyle, MenuContainer } from "./Home.elements";

import { Button } from "../../globalStyles";
import menu1 from "../../images/menu_jj1.png";
import menu2 from "../../images/menu_jj2.png";

const Home = () => {
  const [mode, setMode] = useState(true);
  const [showMenu, setShowMenu] = useState();

  function menuDisplay() {
    console.log("menuDisplay clicked", mode)
    setMode(!mode);
    return setShowMenu(
      mode ? (
        <MenuContainer>
            <img src={menu1} />
            <img src={menu2} />
        </MenuContainer>
      ) : null
    );
  }
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <BtnStyle>
        <Button fontBig primary onClick={menuDisplay}>
          MENU
        </Button>
      </BtnStyle>
      <div>{showMenu}</div>
    </>
  );
};

export default Home;
