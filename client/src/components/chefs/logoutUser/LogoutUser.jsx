import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as chefService from '../../../services/chefServise';
import AuthContext from "../../../contexts/authContext";

import Path from "../../../paths";

function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        chefService.logout()
            .then(() => {
                logoutHandler();
                navigate('/');
            })
            .catch(() => navigate('/'));
    }, []);

    return null;
};

export default Logout;