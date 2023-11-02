import express from 'express';
import
    {
        register,
        login,
        getProfile
    } from "../controllers/UserController.js"


const router = express.Router()

router.post( "/register", register )
router.post( "/login", login )
router.get( "/profile/:id", getProfile )


export default router