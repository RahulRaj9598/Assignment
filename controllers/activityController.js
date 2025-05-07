const Activity = require('../models/Activity');

const listActivities = async (req, res) => {
  try {
    const activities = await Activity.find().select('title description location dateTime');
    
    const formattedActivities = activities.map(activity => ({
      id: activity._id,
      title: activity.title,
      description: activity.description,
      location: activity.location,
      dateTime: activity.dateTime,
    }));

    res.status(200).json({ success: true, data: formattedActivities });
  } catch (error) {
    console.error('Error fetching activities:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  listActivities,
};
