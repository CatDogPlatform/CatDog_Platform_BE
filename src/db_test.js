import User from "./models/User.js"
import Post from "./models/Post.js"
import PostComment from "./models/PostComment.js"
import Pet from "./models/Pet.js";
import PetOrder from "./models/PetOrder.js"
import Good from "./models/Good.js"
import GoodOrder from "./models/GoodOrder.js";

const createPost = function ( post )
{
    return Post.create( post ).then( docPost =>
    {
        console.log( "\n>> Created Pet:\n", docPost );
        return docPost;
    } );
};


const createComment = function ( comment )
{
    return PostComment.create( comment ).then( docComment =>
    {
        console.log( "\n>> Created Pet:\n", docComment );
        return docComment;
    } );
};

const createPet = function ( pet )
{
    return Pet.create( pet ).then( docPet =>
    {
        console.log( "\n>> Created Pet:\n", docPet );
        return docPet;
    } );
};

const createPetOrder = function ( order )
{
    return PetOrder.create( order ).then( docOrder =>
    {
        console.log( "\n>> Created Order Pet:\n", docOrder );
        return docOrder;
    } );
}

const createGood = function ( good )
{
    return Good.create( good ).then( docGood =>
    {
        console.log( "\n>> Created Post:\n", docGood );
        return docGood;
    } );
};

const createGoodOrder = function ( order )
{
    return GoodOrder.create( order ).then( docGoodOrder =>
    {
        console.log( "\n>> Created Order Good:\n", docGoodOrder );
        return docGoodOrder;
    } );
}



const addPetToUser = function ( userId, petId )
{
    return Pet.findByIdAndUpdate(
        petId,
        { userId: '6531f46033d7818c3ae2941e' },
        { new: true, useFindAndModify: false }
    );
};

const addGoodToUser = function ( userId, goodId )
{
    return Good.findByIdAndUpdate(
        goodId,
        { userId: '6531f46033d7818c3ae2941e' },
        { new: true, useFindAndModify: false }
    );
};

export const run = async function ()
{
    // var petOrder = await createPetOrder( {
    //     status: "PENDING",
    //     petId: '65382481986612f269956a04',
    //     userId: '6531f46033d7818c3ae2941e'
    // } );

    // var goodOrder = await createGoodOrder( {
    //     status: "PENDING",
    //     goodId: '65382487986612f269956a08',
    //     userId: '6531f46033d7818c3ae2941e'
    // } );

    var post = await createPost( {
        content: "Cat",
        userId: '6531f46033d7818c3ae2941e',
        status: "APPROVED"

    } )

    var post2 = await createPost( {
        content: "Dog 2",
        userId: '6531f46033d7818c3ae2941e',
        status: "APPROVED"

    } )

    var post2 = await createPost( {
        content: "Cat 2",
        userId: '6531f46033d7818c3ae2941e',
        status: "PENDING"

    } )

};

