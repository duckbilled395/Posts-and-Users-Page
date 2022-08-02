import React, {FC} from "react";
import styled from 'styled-components';

import {colors} from "../../constants";

import NavigationMenu from "./NavigationMenu/NavigationMenu";


const StyledSideBar = styled.div`
  width: 200px;
  height: 300px;
  background-color: ${colors.bg};
  border: solid 4px;
  border-radius: 10px;
  border-color: ${colors.zxc};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const SideBar: FC = () => {

    return (
        <StyledSideBar>
            <NavigationMenu/>
        </StyledSideBar>
    )
}

export default SideBar;