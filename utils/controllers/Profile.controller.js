const ProfileData = require('../models/Profile.modal.json')

const Profile = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "profile data fetch successfully",
            data: ProfileData
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            data: err.message
        })
    }
}


module.exports = Profile