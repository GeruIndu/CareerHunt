import express from 'express'
import isAuthenticated from '../middlewires/isAuthenticate.js'
import { findJobById, getAllJobs, jobAdminCreated, postJob } from '../controllers/job.controller.js';
const router = express.Router();

router.route('/post').post(isAuthenticated, postJob);
router.route('/get').get(isAuthenticated, getAllJobs);
router.route('/getbyid/:id').get(isAuthenticated, findJobById);
router.route('/getadminjobs').get(isAuthenticated, jobAdminCreated);

export default router;