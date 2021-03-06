import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 15
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  language: {
    type: [String]
  },
  bio: {
    type: String
  },
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,

        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      degree: {
        type: String,
        required: true
      },
      school: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,

        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkenin: {
      type: String
    },
    instagram: {
      type: String
    }
  }
});

export default mongoose.model('profiles', ProfileSchema);