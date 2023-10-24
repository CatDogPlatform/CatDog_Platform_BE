import express from 'express';
import
    {
        searchPetOrder,
        getPetOrder,
        deletePetOrder
    } from "../controllers/PetOrderController.js"


const router = express.Router()

router.get( "/search=?", searchPetOrder )
router.get( "/:id", getPetOrder )
router.delete( "/:id", deletePetOrder )


export default router