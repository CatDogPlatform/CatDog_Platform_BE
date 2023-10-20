import { mongoose } from 'mongoose';

const postSchema = mongoose.Schema( {

    content: String,
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {
        timestamps: true
    }
)

const Post = mongoose.model( 'Post', postSchema )

export default Post;
