import axios from 'axios';
import cheerio from 'cheerio';

export class MaisonCrawler {
    public url : string = "https://www.maisononline.vn/blogs/news/giay-leo-nui-loai-nao-tot";

    public async crawl() {
        const response = await axios.get(this.url);
        const html = response.data;

        const $ = cheerio.load(html);

        // Get html content of the div with id = "article-content" and all its children elements in the html format
        const articleContent = $('#main-article-content').html();
        console.log(articleContent);
    }
}

async function main() {
	const scraper = new MaisonCrawler();
    await scraper.crawl();
}

main();