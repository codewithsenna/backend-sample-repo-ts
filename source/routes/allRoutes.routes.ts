import express from 'express';
const router = express.Router();
import IndexRouter from '../routers/index'


router
.use(IndexRouter)


export default router