import puppeteer from 'puppeteer';

describe('a basic react app that puppeteer can automate', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ slowMo: 250 });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  })

  it('opens the home page', async () => {
    await page.goto('http://localhost:3000');
    expect(await page.url()).toBe('http://localhost:3000/');
  })

  it('has app header', async () => {
    expect(await page.$('.App-header')).not.toBe(null);
  })

  it('has logo', async () => {
    expect(await page.$('img[src="/static/media/logo.5d5d9eef.svg"]')).not.toBe(null);
  })

  it('should have a Learn React link that opens a new page', async () => {
    await page.click('.App-link');
    expect(await page.url()).toBe('https://reactjs.org/')
  })
})
