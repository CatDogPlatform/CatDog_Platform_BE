import { mongoose } from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        fullname: {
            type: String,
            required: false
        },
        avatar: {
            type: String,
            required: false
        },
        phone: {
            type: Number
        },
        role:
        {
            type: String,
            enum: [ 'MEMBER', 'STAFF', 'ADMIN' ],
            default: "MEMBER"
        },
        status: {
            type: String,
            enum: [ 'ACTIVE', 'BANNED' ],
            default: "ACTIVE"
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre( 'save', async function ( next )
{
    if ( !this.isModified( 'password' ) )
    {
        next()
    }

    const salt = await bcrypt.genSalt( 10 )
    this.password = await bcrypt.hash( this.password, salt )
} )

// @desc  Method of userSchema to check password when login
userSchema.methods.matchPassword = async function ( enteredPassword )
{
    return await bcrypt.compare( enteredPassword, this.password )
}

const User = mongoose.model( 'User', userSchema )

export default User