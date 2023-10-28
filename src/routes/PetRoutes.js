import express from 'express';
import
    {
        createPet,
        updatePet,
        sellPet,
        searchPet,
        deletePet,
        buyPet
    } from "../controllers/PetController.js"


const router = express.Router()

router.get( "/search=?", searchPet )
router.post( "/add", createPet )
router.put( "/:id", updatePet )
router.delete( "/:id", deletePet )
router.put( "/:id/sell", sellPet )
router.put( "/:id/buy", buyPet )


export default router