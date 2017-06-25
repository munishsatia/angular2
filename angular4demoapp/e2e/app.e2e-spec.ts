import { Angular4demoappPage } from './app.po';

describe('angular4demoapp App', () => {
  let page: Angular4demoappPage;

  beforeEach(() => {
    page = new Angular4demoappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
