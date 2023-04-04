import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    Taskname: String,
    Taskassigndate: Date,
    email: String,
    Tasktitle: String,
    TaskDescraption: String
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'task');
// we need to turn it into a model
const postTask = mongoose.model('task', userSchema);

export default postTask;