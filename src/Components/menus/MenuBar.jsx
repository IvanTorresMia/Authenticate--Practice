import React from 'react';
import { Link } from "react-router-dom";
import UserDropDown from './UserDropDown';
import UserProvider from '../../context/UserProvider';
import { data } from '../../data';
import _ from 'lodash';
import PassoportLogo from "../../res/PassoportLogo.jpg";
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LogoutIcon from '@material-ui/icons/MeetingRoom';

const MenuBar = () => {

    const userData = useContext(UserProvider.context);

    return (
        <div>
            MenuBar!!!
        </div>
    )
}

export default MenuBar;