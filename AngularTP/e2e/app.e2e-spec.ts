import { AngularTPPage } from './app.po';

describe('angular-tp App', function() {
  let page: AngularTPPage;

  beforeEach(() => {
    page = new AngularTPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
