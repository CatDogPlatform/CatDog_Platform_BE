import express from 'express';
import
{
    register,
    login,
    getProfile,
    getMembers,
    getBannedMembers,
    banAccount,
    unbanAccount,
    getStaffs,
    getBannedStaffs
} from "../controllers/UserController.js"
import { getUserPosts } from '../controllers/PostController.js';


const router = express.Router()

router.post( "/register", register )
router.post( "/login", login )
router.get( "/profile/:id", getProfile )
router.get( "/profile/:id/posts", getUserPosts )
router.get( "/members", getMembers )
router.get( "/bannedmembers", getBannedMembers )
router.put( "/members/:id/ban", banAccount )
router.put( "/members/:id/unban", unbanAccount )
router.get( "/staffs", getStaffs )
router.get( "/staffs/banned", getBannedStaffs )

export default router