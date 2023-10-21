import { mongoose } from 'mongoose';

const postImgSchema = mongoose.Schema( {

    url: {
        type: String
    },
    post:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
},
    {
        timestamps: true
    }
)

const PostImg = mongoose.model( 'PostImg', postImgSchema )

export default PostImg;
