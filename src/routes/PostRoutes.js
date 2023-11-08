import express from 'express';
import multer from "multer";
import
{
    createPost,
    updatePost,
    deletePost,
    searchPost,
    likePost,

} from '../controllers/PostController.js';

const storage = multer.diskStorage( {
    destination: ( req, file, cb ) =>
    {
        cb( null, 'images/' ); // Create a directory named 'uploads' to store the uploaded images
    },
    filename: ( req, file, cb ) =>
    {
        cb( null, file.originalname );
    },
} );
const upload = multer( { storage: storage } );

const router = express.Router()

router.get( "/", searchPost )
router.post( "/", upload.single( 'image' ), createPost )
router.put( "/:id", updatePost )
router.delete( "/:id", deletePost )
// router.delete( "/:id/like", likePost )


export default router