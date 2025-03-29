import express from 'express'
import isAuthenticated from '../middlewires/isAuthenticate.js'
import { findJobById, getAllJobs, jobAdminCreated, postJob } from '../controllers/job.controller';
const router = express.Router();

router.route('/post').post(isAuthenticated, postJob);
router.route('/get').post(isAuthenticated, getAllJobs);
router.route('/getById').post(isAuthenticated, findJobById);
router.route('/getadminjobs').post(isAuthenticated, jobAdminCreated);

export default router;