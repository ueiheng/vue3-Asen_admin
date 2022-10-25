import express, { Express, Request, Router,Response } from 'express';
import axios from 'axios';

const app: Express = express()

app.use('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

const router: Router = express.Router()
app.use('/api', router)
// const port = 3210;
router.get('/list',async (req: Request, res: Response) => {
        const result = await axios.post('https://i.news.qq.com/trpc.qqnews_web.pc_base_srv.base_http_proxy/NinjaPageContentSync?pull_urls=news_top_2018')
        res.json(
            result.data
        )
    }
)

app.listen(3210, () => {
    console.log(`success listening port http://localhost:3210`);
})