import { mongoose } from 'mongoose';

const goodOrderSchema = mongoose.Schema( {

    status: {
        type: String,
        enum: [ "PENDING", "PAYED" ],
        default: "PENDING"
    },
    goodId:
    {
        type: String,
        require: false
    },
    userId:
    {
        type: String,
        require: false
    },
    seller:
    {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
},
    {
        timestamps: true
    }
)

const GoodOrder = mongoose.model( 'GoodOrder', goodOrderSchema )

export default GoodOrder;