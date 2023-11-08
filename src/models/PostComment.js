import { mongoose } from 'mongoose';

const commentSchema = mongoose.Schema( {

    detail: String,
    postId:
    {
        type: mongoose.Schema.Types.ObjectId, ref: 'Post'
    },
    user:
        { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},
    {
        timestamps: true
    }
)

const Comment = mongoose.model( 'Comment', commentSchema )

export default Comment;
