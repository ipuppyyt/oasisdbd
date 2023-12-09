import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ListItemIcon, Menu, MenuItem } from "@mui/material"
import { Logout, Settings } from "@mui/icons-material";

const Navbar = () => {

    const [isAuthed, setIsAuthed] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleLogout = () => {
        localStorage.clear();
        setIsAuthed(false);
        window.location.href = "/"
    }

    useEffect(() => {
        const authed = localStorage.getItem("isAuth");
        if (authed === "true") {
            setIsAuthed(true)
        }
    }, [])

    return (<>
        <nav className="h-[10vh] border-b-2 cursor-pointer" style={{zIndex:"999px"}}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" draggable="false" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://i.imgur.com/RkTDKph.png" draggable="false" className="h-11 rounded-full" />
                </Link>

                <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="navbar-default">
                    {isAuthed ? (<React.Fragment>
                        <img src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png" onClick={handleClick} className="h-11 rounded-full" />
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                            <MenuItem disabled className="font-nunito-semibold font-bold">
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem className="font-nunito-bold font-bold" onClick={handleLogout}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </React.Fragment>) :
                        (<Link to="/login" className="inline-flex items-center justify-center p-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            Log in
                        </Link>)}

                </div>
            </div>
        </nav >
    </>
    )
}

export default Navbar