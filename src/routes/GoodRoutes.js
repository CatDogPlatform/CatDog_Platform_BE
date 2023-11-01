import express from 'express';

import
{
    createGood,
    updateGood,
    sellGood,
    searchGood,
    deleteGood,
    buyGood,
    getGood
} from "../controllers/GoodController.js"


const router = express.Router()

router.get( "/search=?", searchGood )
router.post( "/add", createGood )
router.get( "/:id", getGood )
router.put( "/:id", updateGood )
router.put( "/sell/:id", sellGood )
router.put( "/buy/:id", buyGood )
router.delete( "/:id", deleteGood )



export default router