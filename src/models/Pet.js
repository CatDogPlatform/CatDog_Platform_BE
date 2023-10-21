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

const Pet = mongoose.model( 'Pet', petSchema )

export default Pet;
