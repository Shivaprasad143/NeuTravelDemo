import { FlaPage } from './app.po';

describe('fla App', function() {
  let page: FlaPage;

  beforeEach(() => {
    page = new FlaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
