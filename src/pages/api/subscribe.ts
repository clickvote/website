import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST' || !req.body.email || !req.body.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        res.status(400).json({message: 'Invalid request'});
        return;
    }

    const {data} = await axios.post('https://substackapi.com/api/subscribe', {
        email: req.body.email, domain: new URL(process?.env?.SUBSTACK_NEWSLETTER_URL!).hostname
    }, {
        headers: {
            "Cache-Length": 0
        }
    });

    res.status(200).json({confirm: !!data?.requires_confirmation});
}