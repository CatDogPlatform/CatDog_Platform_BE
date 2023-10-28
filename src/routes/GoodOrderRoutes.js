import express from 'express';
import
    {
        searchGoodOrder,
        getGoodOrder,
        deleteGoodOrder
    } from "../controllers/GoodOrderController.js"


const router = express.Router()

router.get( "/search=?", searchGoodOrder )
router.get( "/:id", getGoodOrder )
router.delete( "/:id", deleteGoodOrder )


export default router