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
        { user: userId },
        { new: true, useFindAndModify: false }
    );
};

const addGoodToUser = function ( userId, goodId )
{
    return Good.findByIdAndUpdate(
        goodId,
        { user: userId },
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



    var good = await createGood( {
        name: "Cat food",
        images: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg",

    } )

    var good2 = await createGood( {
        name: "Dog food s",
        images: "https://www.cesar.ca/sites/g/files/fnmzdf2136/files/migrate-product-files/images/vueagylorr5ctmnung4u.png",

    } )

    var good3 = await createGood( {
        name: "Dog food 8",
        images: "https://www.cesar.ca/sites/g/files/fnmzdf2136/files/migrate-product-files/images/vueagylorr5ctmnung4u.png",

    } )

    var good4 = await createGood( {
        name: "Dog food 3",
        images: "https://www.cesar.ca/sites/g/files/fnmzdf2136/files/migrate-product-files/images/vueagylorr5ctmnung4u.png",

    } )

    var good5 = await createGood( {
        name: "Dog food 5",
        images: "https://www.cesar.ca/sites/g/files/fnmzdf2136/files/migrate-product-files/images/vueagylorr5ctmnung4u.png",

    } )


    var user = await createUser( {
        email: "linux7@gmail.com",
        password: "windows123@",
        fullname: "John",
        role: "MEMBER"
    } )

    // var staff = await createUser( {
    //     email: "staff5@gmail.com",
    //     password: "Thangdihoc123@",
    //     fullname: "David",
    //     role: "STAFF"
    // } )

    // var admin = await createUser( {
    //     email: "admin2@gmail.com",
    //     password: "admin2@123",
    //     fullname: "David",
    //     role: "ADMIN"
    // } )


    good = await addGoodToUser( user._id, good._id, )
    good2 = await addGoodToUser( user._id, good2._id )
    good3 = await addGoodToUser( user._id, good3._id )
    good4 = await addGoodToUser( user._id, good4._id )
    good5 = await addGoodToUser( user._id, good5._id )


    var pet = await createPet( {
        name: "Cat6",
        images: "https://th-thumbnailer.cdn-si-edu.com/SdKYWifCKfE2g8O-po_SO99hQ-Y=/1000x750/filters:no_upscale():focal(3126x2084:3127x2085)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ec/e6/ece69181-708a-496e-b2b7-eaf7078b99e0/gettyimages-1310156391.jpg",

    } )

    var pet2 = await createPet( {
        name: "Dog  s",
        images: "https://th-thumbnailer.cdn-si-edu.com/SdKYWifCKfE2g8O-po_SO99hQ-Y=/1000x750/filters:no_upscale():focal(3126x2084:3127x2085)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ec/e6/ece69181-708a-496e-b2b7-eaf7078b99e0/gettyimages-1310156391.jpg",

    } )

    var pet3 = await createPet( {
        name: "Dog  8",
        images: "https://th-thumbnailer.cdn-si-edu.com/SdKYWifCKfE2g8O-po_SO99hQ-Y=/1000x750/filters:no_upscale():focal(3126x2084:3127x2085)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ec/e6/ece69181-708a-496e-b2b7-eaf7078b99e0/gettyimages-1310156391.jpg",

    } )

    var pet4 = await createPet( {
        name: "Dog 3",
        images: "https://th-thumbnailer.cdn-si-edu.com/SdKYWifCKfE2g8O-po_SO99hQ-Y=/1000x750/filters:no_upscale():focal(3126x2084:3127x2085)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ec/e6/ece69181-708a-496e-b2b7-eaf7078b99e0/gettyimages-1310156391.jpg",

    } )

    var pet5 = await createPet( {
        name: "Dog 5",
        images: "https://th-thumbnailer.cdn-si-edu.com/SdKYWifCKfE2g8O-po_SO99hQ-Y=/1000x750/filters:no_upscale():focal(3126x2084:3127x2085)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ec/e6/ece69181-708a-496e-b2b7-eaf7078b99e0/gettyimages-1310156391.jpg",

    } )



    pet = await addPetToUser( user._id, pet._id )
    pet2 = await addPetToUser( user._id, pet2._id )
    pet3 = await addPetToUser( user._id, pet3._id )
    pet4 = await addPetToUser( user._id, pet4._id )
    pet5 = await addPetToUser( user._id, pet5._id )
};

