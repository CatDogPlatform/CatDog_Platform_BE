import { mongoose } from 'mongoose';

const petImgSchema = mongoose.Schema( {

    url: {
        type: String
    },
    pet:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pet'
    }
},
    {
        timestamps: true
    }
)

const PetImg = mongoose.model( 'PetImg', postImgScpetImgSchemahema )

export default PetImg;