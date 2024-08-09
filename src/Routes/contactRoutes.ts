import { Hono } from 'hono';
import { contactController } from '../Controller/contactController';

const router = new Hono();

router.post('/contact', contactController);

export { router as contactRouter };
