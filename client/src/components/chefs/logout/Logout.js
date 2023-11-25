import { useContext, useEffect } from "react";

import * as chefService from '../../services/chefService';
import { useNavigate } from "react-router-dom";
import Path from "../../paths";
import AuthContext from "../../contexts/authContext";

export default function Logout() {
    const navigate = useNavigate();
    // const { logoutHandler } = useContext(AuthContext);

    // useEffect(() => {
    //     chefService.logout()
    //         .then(() => {
    //             logoutHandler();
    //             navigate(Path.Home);
    //         })
    //         .catch(() => navigate(Path.Home));
    // }, []);

    return null;
}