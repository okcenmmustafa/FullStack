import express from 'express';
import controller from '../controllers';
const router = express.Router();

router.post('/country', controller.getCountryByName);
router.post('/slotMachineResult', controller.slotMachineResult);
router.get('/allCountry', controller.getAllCountry);


export = router;
