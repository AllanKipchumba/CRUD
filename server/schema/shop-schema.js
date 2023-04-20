import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment';

const shopSchema =  mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      
      type: [Number],
      required: true
    }
  },
  category: {
    type: String,
    required: true
  }
});

// autoIncrement.initialize(mongoose.connection);
// shopSchema.plugin(autoIncrement.plugin,'Shop')

const Shop = mongoose.model('Shop', shopSchema);

export default Shop;