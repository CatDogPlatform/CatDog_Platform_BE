import express from 'express';
import
{
    createPost,
    updatePost,
    deletePost,
    searchPost,
    likePost,

} from '../controllers/PostController.js';

const router = express.Router()

router.get( "/", searchPost )
router.post( "/", createPost )
router.put( "/:id", updatePost )
router.delete( "/:id", deletePost )
router.delete( "/:id/like", likePost )


export default router