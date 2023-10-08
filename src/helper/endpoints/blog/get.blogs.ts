import axios from "axios";
import {parseStringPromise} from "xml2js";
import {JSDOM} from "jsdom";
import dayjs from "dayjs";

export const getBlogs = async (showContent = false) => {
    const {data} = await axios.get(process?.env?.NEXT_PUBLIC_SUBSTACK_NEWSLETTER_URL + `/feed?cache=${Math.random()}`);
    const parsedXml = await parseStringPromise(data);

    const items = [];
    for (const item of parsedXml.rss.channel[0].item) {
        const url = item.link[0];
        const {data: scrapePage} = await axios.get(url);
        const dom = new JSDOM(scrapePage);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const data = eval(Array.from(dom.window.document.querySelectorAll('script')).find(p => p?.textContent?.indexOf('window._preloads') > -1 && p?.textContent?.indexOf(`JSON.parse`) > -1)?.textContent.replace(`window._preloads        = `, ''));
        const profilePicture = Array.from(dom.window.document.querySelectorAll('a')).find(p => p?.getAttribute('href')?.indexOf('/profile/')! > -1)?.querySelector('img')?.getAttribute('src');

        const tag = data?.post?.postTags[0]?.name;

        items.push({
            title: item.title[0],
            description: item.description[0],
            tag: tag || 'Announcement',
            content: showContent ? item['content:encoded'][0] : '',
            profilePicture,
            slug: item.link[0].split('/').pop(),
            creator: item['dc:creator'][0],
            date: dayjs(item.pubDate[0]).format('MMM D, YYYY'),
            cover: item['enclosure'][0]['$']['url'],
        });
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const categories = [...new Set(items.map(p => p.tag))];

    return {
        categories,
        items
    }
}