import { mongoose } from 'mongoose';

const goodSchema = mongoose.Schema( {

    name: String,
    description: String,
    price: Number,
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
        enum: [ "AVAILABLE", "FOR EXCHANGE", "BOUGHT" ]
    }
},
    {
        timestamps: true
    }
)

const Good = mongoose.model( 'Good', goodSchema )

export default Good;
