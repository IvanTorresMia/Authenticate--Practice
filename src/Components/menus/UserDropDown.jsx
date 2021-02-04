import React from 'react';

// Material ui Comp
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';

// Our Comp
import ButtonList from '../Buttons/ButtonList'
import history from '../../History'
import IconButton from '../Buttons/IconButton';

// Creating a raper component for other menu items. 
const StyleMenu = withStyles( {
    paper: {
        border: "1px solid #d3d4d5"
    }
})(porps => {
    <Menu 
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
        {...props}
    />
});
 
const StyleMenuItem = withStyles( theme => ({
    root: {
        "&:focus": {
            backgroundColor: "vart(--primary-red)",
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white,
            }
        }
    }
}))(MenuItem)

const UserDropDown = () => {
    const [anchorEl, SetAnchorEl] = React.useState(null)
    const handleClick = (event) => {
        SetAnchorEl(event.currentTrget);
    }
    const handleClose = () => {
        SetAnchorEl(null)
    }


    return (
        <div
            style={{ float: 'right'}}
        >
            <IconButton
            href=""
            style={{ color: 'white', padding: "13px 12px" }}
            onClick={handleClick}
            />

        </div>
    )


}

