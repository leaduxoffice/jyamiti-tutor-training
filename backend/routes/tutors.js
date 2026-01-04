const express = require('express');
const router = express.Router();
const Tutor = require('../models/tutor');

// Submit application
router.post('/', async (req, res) => {
    try {
        const tutor = new Tutor(req.body);
        await tutor.save();
        res.status(201).json({ message: 'Application submitted successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all applications with pagination
router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const tutors = await Tutor.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Tutor.countDocuments();

        res.json({
            tutors,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
            total
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get statistics
// Get statistics
router.get('/stats', async (req, res) => {
    try {
        const total = await Tutor.countDocuments();
        const pending = await Tutor.countDocuments({ status: 'pending' });
        const selected = await Tutor.countDocuments({ status: 'selected' });
        const interview = await Tutor.countDocuments({ status: 'interview' });
        const rejected = await Tutor.countDocuments({ status: 'rejected' });

        // Gender stats
        const male = await Tutor.countDocuments({ gender: 'Male' });
        const female = await Tutor.countDocuments({ gender: 'Female' });
        const other = await Tutor.countDocuments({ gender: 'Other' });

        // Experience stats
        const avgExperience = await Tutor.aggregate([
            { $group: { _id: null, avgExp: { $avg: "$experience" } } }
        ]);

        // Experience distribution
        const experienceDistribution = await Tutor.aggregate([
            {
                $bucket: {
                    groupBy: "$experience",
                    boundaries: [0, 1, 3, 5, 10, 20, 50],
                    default: "50+",
                    output: {
                        count: { $sum: 1 },
                        applications: { $push: { name: "$name", email: "$email" } }
                    }
                }
            },
            {
                $project: {
                    range: {
                        $switch: {
                            branches: [
                                { case: { $lt: ["$_id", 1] }, then: "0-1 years" },
                                { case: { $lt: ["$_id", 3] }, then: "1-3 years" },
                                { case: { $lt: ["$_id", 5] }, then: "3-5 years" },
                                { case: { $lt: ["$_id", 10] }, then: "5-10 years" },
                                { case: { $lt: ["$_id", 20] }, then: "10-20 years" },
                                { case: { $lt: ["$_id", 50] }, then: "20-50 years" },
                            ],
                            default: "50+ years"
                        }
                    },
                    count: 1,
                    applications: 1
                }
            }
        ]);

        // Equipment stats
        const laptopCount = await Tutor.countDocuments({ laptop: true });
        const broadbandCount = await Tutor.countDocuments({ broadband: true });
        const onlineexpcount=await Tutor.countDocuments({onlineteaching:true})

        // Total experience years
        const totalExperienceResult = await Tutor.aggregate([
            { $group: { _id: null, totalExp: { $sum: "$experience" } } }
        ]);
        

        res.json({
            total,
            pending,
            selected,
            interview,
            rejected,
            genderStats: { male, female, other },
            avgExperience: avgExperience[0]?.avgExp || 0,
            experienceDistribution,
            equipmentStats: { laptopCount, broadbandCount },
            onlineexpcount
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Search and filter tutors
router.get('/search', async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            minExperience,
            maxExperience,
            hasLaptop,
            hasBroadband,
            qualification,
            status
        } = req.query;

        const skip = (page - 1) * limit;
        
        // Build filter object
        const filter = {};
        
        if (minExperience || maxExperience) {
            filter.experience = {};
            if (minExperience) filter.experience.$gte = parseInt(minExperience);
            if (maxExperience) filter.experience.$lte = parseInt(maxExperience);
        }
        
        if (hasLaptop === 'true') filter.laptop = true;
        if (hasBroadband === 'true') filter.broadband = true;
        if (qualification) {
            filter.qualification = { $regex: qualification, $options: 'i' };
        }
        if (status) filter.status = status;

        const tutors = await Tutor.find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Tutor.countDocuments(filter);

        res.json({
            tutors,
            totalPages: Math.ceil(total / limit),
            currentPage: parseInt(page),
            total
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update tutor status (select for program/interview)
router.patch('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const tutor = await Tutor.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        res.json(tutor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get tutors by status with pagination
router.get('/status/:status', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const status = req.params.status;

        const tutors = await Tutor.find({ status })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Tutor.countDocuments({ status });

        res.json({
            tutors,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
            total
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete tutor (optional)
router.delete('/:id', async (req, res) => {
    try {
        await Tutor.findByIdAndDelete(req.params.id);
        res.json({ message: 'Tutor deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;