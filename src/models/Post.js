import { mongoose } from 'mongoose';

const postSchema = mongoose.Schema( {

    content: String,
    likes: {
        type: Array,
        default: []
    },
    images: {
        type: Array,
        default: []
    },
    userId:
    {
        type: String,
        require: true
    },
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
