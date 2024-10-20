
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.render('pages/home');  
});

router.get('/services', (req: Request, res: Response) => {
    res.render('pages/services');  
});


export default router;