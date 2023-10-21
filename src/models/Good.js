import { mongoose } from 'mongoose';

const goodSchema = mongoose.Schema( {

    name: String,
    description: String,
    price: Number,
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

const Good = mongoose.model( 'Good', goodSchema )

export default Good;
