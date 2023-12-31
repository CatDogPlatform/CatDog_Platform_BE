import express from 'express';
import
{
    createPet,
    updatePet,
    sellPet,
    searchPet,
    deletePet,
    buyPet,
    getPet,
    getUserPets
} from "../controllers/PetController.js"


const router = express.Router()

router.get( "/", searchPet )
router.post( "/add", createPet )
router.get( "/:id", getPet )
router.put( "/:id", updatePet )
router.delete( "/:id", deletePet )
router.put( "/:id/sell", sellPet )
router.put( "/:id/buy", buyPet )
router.get( "/profile/pets", getUserPets )

export default router