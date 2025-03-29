import { populate } from "dotenv";
import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;

        if (!jobId) {
            return res.status(404).json({
                message: "Job id is required.",
                status: false
            })
        }

        let job = await Job.findOne({ _id: jobId });
        if (!job) {
            return res.status(404).json({
                message: "Job is not found.",
                status: false
            })
        }

        const alreadyApplied = await application.findOne({ job: jobId, applicant: userId });

        if (alreadyApplied) {
            return res.status(401).json({
                message: "Already applied.",
                status: false
            })
        }

        const application = await Application.create({
            job: jobId,
            applicant: userId
        })

        job.applications.push(application._id);
        await job.save();

        return res.status(201).json({
            message: "Aplication submitted successfully.",
            application,
            status: true
        })

    } catch (error) {
        console.log(error);
    }
}

export const getApplicationByUser = async (req, res) => {
    try {
        const userId = req.id;

        const applications = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: 'job',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'companyId',
                options: { sort: { createdAt: -1 } }
            }
        })

        if (!applications) {
            return res.status(400).json({
                message: "No application.",
                status: false
            })
        }

        return res.status(200).json({
            applications,
            success: true
        })

    } catch (error) {
        console.log(error);
    }
}

export const getApplicationsByAdmin = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: 'applications',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'applicant'
            }
        })

        if (!job) {
            return res.status(400).json({
                message: "Application empty.",
                status: false
            })
        }

        return res.status(200).json({
            job,
            status: true
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationsId = req.params.id;

        if (!status) {
            return res.status(404).json({
                message: "Status is required.",
                status: false
            })
        }

        let applicanation = await Application.findOne({ _id: applicationsId });

        if (!applicanation) {
            return res.status(400).json({
                message: "Application is not found.",
                status: false
            })
        }

        applicanation.status = status.toLowerCase();
        await applicanation.save();

        return res.status(200).json({
            message: "Status update successfully",
            applicanation,
            status: true
        })

    } catch (error) {
        console.log(error);
    }
}