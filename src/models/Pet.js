import { mongoose } from 'mongoose';

const petSchema = mongoose.Schema( {

    name: String,
    description: String,
    price: Number,
    weight: Number,
    DoB: Date,
    Gender: {
        type: String,
        enum: [ "MALE", "FEMALE" ]
    },
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
        enum: [ "AVAILABLE", "FOR EXCHANGE", "BOUGHT" ],
        default: "AVAILABLE"
    }
},
    {
        timestamps: true
    }
)

const Pet = mongoose.model( 'Pet', petSchema )

export default Pet;
