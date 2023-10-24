import { mongoose } from 'mongoose';

const commentSchema = mongoose.Schema( {

    detail: String,
    postId:
    {
        type: String,
        require: false
    },
    userId:
    {
        type: String,
        require: false
    }
},
    {
        timestamps: true
    }
)

const Comment = mongoose.model( 'Comment', commentSchema )

export default Comment;
