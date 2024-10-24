
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {

    res.render('pages/mains/home', (err:any, html:any) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error rendering page');
      }
      res.render('layouts/site-layout', {
        title: 'CDR Writers Nepal',
        body: html
      });
    });
});
  
router.get('/services', (req: Request, res: Response) => {
    res.render('pages/mains/services', (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Services Offered | CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/codes', (req: Request, res: Response) => {
    res.render('pages/mains/cdr-anzsco-code', (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'ANZSCO codes | CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/pricing', (req: Request, res: Response) => {
    res.render('pages/mains/cdr-prices' , (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Prices | CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/blog', (req: Request, res: Response) => {
    res.render('pages/mains/cdr-blogs' , (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Blogs | CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/about', (req: Request, res: Response) => {
    res.render('pages/mains/about-us' , (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'About| CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/contact', (req: Request, res: Response) => {
    res.render('pages/mains/contact-us' , (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Contact | CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/engineers-australia-guidelines', (req: Request, res: Response) => {
    res.render('pages/cdr/engineers-australia-guidelines' , (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: "Engineers Australia's Guidelines | CDR Writers Nepal",
            body: html
          });
    });  
});

router.get('/ai-and-plagiarism-free-content', (req: Request, res: Response) => {
    res.render('pages/cdr/ai-and-plagiarism-free-content', (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'AI & Plagiarism Free | CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/demonstrating-engineering-problem-solving', (req: Request, res: Response) => {
    res.render('pages/cdr/demonstrating-engineering-problem-solving', (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Problem Solving Demonstration | CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/technical-detailing', (req: Request, res: Response) => {
    res.render('pages/cdr/technical-detailing', (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Technical Detailing| CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/engineering-manager', (req: Request, res: Response) => {
    res.render('pages/engineers/engineering-manager', (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Engineering Manager | CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/chemical-engineer', (req: Request, res: Response) => {
    res.render('pages/engineers/chemical-engineer', (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Chemical Engineer | CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/materials-engineer', (req: Request, res: Response) => {
    res.render('pages/engineers/materials-engineer', (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Material Engineer | CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/civil-engineer', (req: Request, res: Response) => {
    res.render('pages/engineers/civil-engineer', (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Civil Engineer | CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/geotechnical-engineer', (req: Request, res: Response) => {
    res.render('pages/engineers/geotechnical-engineer', (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Geotechnical Engineer | CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/structural-engineer', (req: Request, res: Response) => {
    res.render('pages/engineers/structural-engineer', (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Structural Engineer | CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/electrical-engineer', (req: Request, res: Response) => {
    res.render('pages/engineers/electrical-engineer', (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Electrical Engineer | CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/electronics-engineer', (req: Request, res: Response) => {
    res.render('pages/engineers/electronics-engineer', (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Electronics Engineer | CDR Writers Nepal',
            body: html
          });
    });  
});

router.get('/industrial-engineer', (req: Request, res: Response) => {
    res.render('pages/engineers/industrial-engineer', (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Industrial Engineer| CDR Writers Nepal',
            body: html
          });
    });  
});
router.get('/mechanical-engineer', (req: Request, res: Response) => {
    res.render('pages/engineers/mechanical-engineer', (err:any, html:any)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error rendering page');
          }
        res.render('layouts/site-layout', {
            title: 'Mechanical Engineer | CDR Writers Nepal',
            body: html
          });
    });  
});


export default router;