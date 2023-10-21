import { mongoose } from 'mongoose';

const postLikeSchema = mongoose.Schema( {

    post:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
},
    {
        timestamps: true
    }
)

const PostLike = mongoose.model( 'PostLike', postLikeSchema )

export default PostLike;