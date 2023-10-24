import { mongoose } from 'mongoose';

const petSchema = mongoose.Schema( {

    name: String,
    description: String,
    price: Number,
    petType:
    {
        type: String,
        enum: [ "Dog", "Cat" ]
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
        enum: [ "AVAILABLE", "FOR EXCHANGE", "BOUGHT" ]
    }
},
    {
        timestamps: true
    }
)

const Pet = mongoose.model( 'Pet', petSchema )

export default Pet;
