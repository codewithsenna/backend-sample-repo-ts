import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response): void => {
    res.send('Backend is working...');
});

export default router;
