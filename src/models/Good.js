import { mongoose } from 'mongoose';

const goodSchema = mongoose.Schema( {

    name: String,
    description: String,
    price: Number,
    images: {
        type: Array,
        default: []
    },
    user:
        { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: {
        type: String,
        enum: [ "AVAILABLE", "FOR EXCHANGE", "BOUGHT" ],
        default: "AVAILABLE"
    }
},
    {
        timestamps: true
    }
)

const Good = mongoose.model( 'Good', goodSchema )

export default Good;
