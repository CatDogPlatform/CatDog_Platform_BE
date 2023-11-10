import { mongoose } from 'mongoose';

const commentSchema = mongoose.Schema( {

    detail: String,
    postId:
    {
        type: String
    },
    userId:
        { type: String },
    email: {
        type: String
    },
    fullname:
    {
        type: String
    }
},
    {
        timestamps: true
    }
)

const Comment = mongoose.model( 'Comment', commentSchema )

export default Comment;
