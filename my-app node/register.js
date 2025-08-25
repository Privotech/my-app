const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// User schema/model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// Register function
async function registerUser(username, password) {
    if (!username || !password) {
        throw new Error('Username and password required.');
    }
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        throw new Error('User already exists.');
    }
    const newUser = new User({ username, password });
    await newUser.save();
    return 'User registered successfully.';
}

// Example usage
// registerUser('testuser', 'testpass')
//     .then(msg => console.log(msg))
//     .catch(err => console.error(err.message));

module.exports = { registerUser };
