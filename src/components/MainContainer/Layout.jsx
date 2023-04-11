import React        from "react";
import { Outlet }   from "react-router-dom";
import SearchContainer from "../SearchContainer/SearchContainer";

let Layout = () => {
    return (
        <>
            <SearchContainer />
            <Outlet />
        </>
    )
}

export default Layout