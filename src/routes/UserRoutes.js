import express from 'express';
import
{
    register,
    login,
    getProfile,
    getMembers,
    getBannedMembers,
    banAccount,
    unbanAccount
} from "../controllers/UserController.js"


const router = express.Router()

router.post( "/register", register )
router.post( "/login", login )
router.get( "/profile/:id", getProfile )
router.get( "/members", getMembers )
router.get( "/bannedmembers", getBannedMembers )
router.put( "/members/:id/ban", banAccount )
router.put( "/members/:id/unban", unbanAccount )

export default router