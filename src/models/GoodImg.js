import { mongoose } from 'mongoose';

const bookSchema = mongoose.Schema( {

    title: String,
    detail: String,
    price: Number,
    category:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
},
    {
        timestamps: true
    }
)

const Book = mongoose.model( 'Book', bookSchema )

export default Book;