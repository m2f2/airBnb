import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
            username: {
                        type: String,
                        required: true,
                        unique: true,
                        minLength: 8
            }});




const UserModel = mongoose.model('User', userSchema);

export default UserModel;