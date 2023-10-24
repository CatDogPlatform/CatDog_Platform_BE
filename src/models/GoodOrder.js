import { mongoose } from 'mongoose';

const goodOrderSchema = mongoose.Schema( {

    status: {
        type: String,
        enum: ["PENDING", "PAYED"]
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
    }
},
    {
        timestamps: true
    }
)

const GoodOrder = mongoose.model( 'GoodOrder', goodOrderSchema )

export default GoodOrder;