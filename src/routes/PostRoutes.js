import express from 'express';
import multer from "multer";
import
{
    createPost,
    updatePost,
    deletePost,
    searchPost,
    likePost,
    approvePost,
    rejectPost,
    getPost,
    getRejectedPosts,
    commentPost,
    getPendingPost,

} from '../controllers/PostController.js';



const router = express.Router()
router.get( "/:id", getPost )
router.get( "/", searchPost )
router.post( "/", createPost )
router.post( "/:id/comment", commentPost )
router.put( "/:id", updatePost )
router.delete( "/:id", deletePost )
router.put( "/:id/approve", approvePost )
router.put( "/:id/reject", rejectPost )
router.get( "/rejectedposts", getRejectedPosts )
router.get( "/pendingposts", getPendingPost )
// router.delete( "/:id/like", likePost )


export default router