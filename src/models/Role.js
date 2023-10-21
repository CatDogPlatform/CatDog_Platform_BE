import { mongoose } from 'mongoose';

const postImgSchema = mongoose.Schema( {

    roleName: {
        type: String,
        enum: [ 'MEMBER', 'STAFF', 'ADMIN' ]
    },
},
    {
        timestamps: true
    }
)

const PostImg = mongoose.model( 'Book', postImgSchema )

export default PostImg;
