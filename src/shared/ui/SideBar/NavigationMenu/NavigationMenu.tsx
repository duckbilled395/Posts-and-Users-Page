import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

import {colors} from "../../../constants";

const StyledNavigationMenu = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  font-size: 26px;
`
const styledClassName = {
    color: colors.text,
    textDecoration: 'none',
}

const NavigationMenu: FC = () => {

    return (
        <StyledNavigationMenu>
            <div>
                <NavLink style={styledClassName} to='/posts'>Posts</NavLink>
            </div>
            <div>
                <NavLink style={styledClassName} to='/users'>Users</NavLink>
            </div>
        </StyledNavigationMenu>
    )
};

export default NavigationMenu;