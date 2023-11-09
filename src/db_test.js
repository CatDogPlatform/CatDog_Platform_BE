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

const createUser = function ( user )
{
    return User.create( user ).then( docUser =>
    {
        console.log( "\n>> Created User:\n", docUser );
        return docUser;
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
        { userId: userId },
        { new: true, useFindAndModify: false }
    );
};

const addGoodToUser = function ( userId, goodId )
{
    return Good.findByIdAndUpdate(
        goodId,
        { userId: userId },
        { new: true, useFindAndModify: false }
    );
};

const addPostToUser = function ( postId, userId )
{
    return Post.findByIdAndUpdate(
        postId,
        { user: userId },
        { new: true, useFindAndModify: false }
    );
};

export const run = async function ()
{
    var pet1 = await createPetOrder( {

    } );

    var pet2 = await createPetOrder( {

    } );

    var good1= await createGoodOrder( {

    } );

    var petCreate = await createPet({
        
    })



    // var post = await createPost( {
    //     content: "I like cats. They are cute",
    //     images: [ "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg" ],
    //     status: "APPROVED"

    // } )

    // var post2 = await createPost( {
    //     content: "I like dogs. They are my friends",
    //     images: [ "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg" ],
    //     status: "APPROVED"

    // } )

    // var post3 = await createPost( {
    //     content: "I like both pets. They are all cute",
    //     images: [ "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg" ],
    //     status: "PENDING"

    // } )

    // var user = await createUser( {
    //     email: "daive321@gmail.com",
    //     password: "123",
    //     fullname: "Dave",
    //     role: "MEMBER"
    // } )

    // var user2 = await createUser( {
    //     email: "jane123@gmail.com",
    //     password: "123",
    //     fullname: "Jane",
    //     role: "MEMBER"
    // } )

    // post = await addPostToUser( post._id, user._id )
    // post2 = await addPostToUser( post2._id, user._id )
    // post3 = await addPostToUser( post3._id, user2._id )
};

