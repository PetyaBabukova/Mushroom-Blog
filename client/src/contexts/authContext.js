import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


import * as chefService from '../services/chefServise';
import Path from "../paths";


const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export default AuthContext;