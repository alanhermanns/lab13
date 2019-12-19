const mongoose = require('mongoose');

const schema = mongoose.Schema({
  broadGrin:{
    type: Boolean,
    required: true
  },
  soManyTeethInItsMouth:{
    type: Boolean,
    required: true
  },
  canScaleATreeSoQuicklyScale:{
    type: Number,
    required: true
  },
  isToHeavy:{
    type: Boolean,
    required: true
  },
  numberOfTails:{
    type: Number,
    required: true
  },
  slySinisterAndSleek:{
    type: Boolean,
    required: true
  },
  weightPolitelyDescribed:{
    type: String,
    requiredL: true
  },
  hasAnOwnerOr2:{
    type: Boolean,
    required: true
  }

});

schema.statics.getHowCanItClimbATreeScaleVsItsNumberOfTails = function() {
  return this.aggregate([
    {
      '$addFields': {
        'ratioTreeScalingToTails': {
          '$divide': [
            '$canScaleATreeSoQuicklyScale', '$numberOfTails'
          ]
        }
      }
    }
  ]);
};

module.exports = mongoose.model('Cat', schema);
