import express from 'express';

import
{
    createGood,
    updateGood,
    sellGood,
    searchGood,
    deleteGood,
    buyGood,
    getGood,
    getUserGoods
} from "../controllers/GoodController.js"


const router = express.Router()

router.get( "/", searchGood )
router.post( "/add", createGood )
router.post( "/profile/goods", getUserGoods )
router.get( "/:id", getGood )
router.put( "/:id", updateGood )
router.put( "/sell/:id", sellGood )
router.put( "/buy/:id", buyGood )
router.delete( "/:id", deleteGood )



export default router