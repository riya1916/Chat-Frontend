import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { SearchOutlined } from "@mui/icons-material";
import "./Drawer.css";

const App = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <button onClick={toggleDrawer} className="searchIcon"><SearchOutlined /></button>
            <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
                <div className="search">
                <SearchOutlined />
                <input placeholder="Search here for new chat" type="text" />
                </div>
            </Drawer>
        </>
    )
}

export default App