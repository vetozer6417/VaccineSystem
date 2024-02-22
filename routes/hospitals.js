const express = require('express');
const { getHospitals, getHospital, createHospital, updateHospital, deleteHospital} = require('../controllers/hospitals')
const router = express.Router();

const { protect, authorize } = require('../middleware/auth')

//With id
//have to has access from 'protect' function to create a hospital
router.route('/').get(getHospitals).post(protect, authorize('admin'), createHospital);
//Without id
//have to has access from 'protect' function to put and delete a hospital
router.route('/:id').get(getHospital).put(protect, authorize('admin'), updateHospital).delete(protect, authorize('admin'), deleteHospital);

module.exports = router;