import { mongoose } from 'mongoose';

const postSchema = mongoose.Schema( {

    content: String,
    likes: {
        type: Array,
        default: []
    },
    images: {
        type: String,
    },
    user:
        { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: {
        type: String,
        enum: [ "PENDING", "APPROVED", "REJECTED" ],
        default: "PENDING"
    }
},
    {
        timestamps: true
    }
)

const Post = mongoose.model( 'Post', postSchema )

export default Post;
