import { mongoose } from 'mongoose';

const petOrderSchema = mongoose.Schema( {

    status: {
        type: String,
        enum: [ "PENDING", "PAYED" ],
        default: "PENDING"
    },
    petId:
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

const PetOrder = mongoose.model( 'PetOrder', petOrderSchema )

export default PetOrder;