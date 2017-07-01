import { AngUsaidPage } from './app.po';

describe('ang-usaid App', () => {
  let page: AngUsaidPage;

  beforeEach(() => {
    page = new AngUsaidPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
