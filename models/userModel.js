const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email address'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email address']
    },
    photo: {
        type: String,
        default: 'default.jpeg'
        },
    role: {
        type: String,
        enum: ['user', 'guide', 'lead-guide', 'admin'],
        default: 'user'
    },
    password:{
        type: String,
        required: [true, 'Please provide a password'],
        minLength: 8,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please provide a password'],
        
        //==== works only on SAVE and CREATE 
        validate: {
            validator: function(el){
                return el === this.password;
            },
            message: 'Passwords must be the same:::'
        }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
});



/*================= MONGOOSE MIDDLEWARES ===================*/
//==== Hashing the password using pre-doc hook


userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();

        //== method 1 of hashing the password in one step
    this.password = await bcrypt.hash(this.password, 12);

    //=== method 2 of hashing the password in 2 steps
    // const salt = await bcrypt.getSalt(12);
    // this.password = await bcrypt.hash(this.password, salt);

    this.confirmPassword = undefined;
    next();
})

//==== Pre-hook middleware to run when the password is changed
userSchema.pre('save', function(next){
    if(!this.isModified('password') || this.isNew) return next();
    this.passwordChangedAt = Date.now() - 1000 ;
    next();
})

userSchema.pre(/^find/, function(next){
    this.find({ active: {$ne : false }});
    next();
});



/*================= START OF THE INSTANCE METHODS ===================*/
//==== Use instance method to check if the password is correct
userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword);
}

userSchema.methods.changedPasswordAt = function(jwtTimestamp){
    if(this.passwordChangedAt){
        const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
        return jwtTimestamp < changedTimestamp; 
    }
    /// False means NOT changed
    return false;
};

userSchema.methods.createPasswordResetToken = function(){
    const resetToken  = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
    return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;