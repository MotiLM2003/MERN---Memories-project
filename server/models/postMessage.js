import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedGFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    defualt: new Date(),
  },
});

const postMessage = mongoose.model('PostMessage', postSchema);

export default postMessage;
