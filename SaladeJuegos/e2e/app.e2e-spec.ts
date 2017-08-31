import { SaladeJuegosPage } from './app.po';

describe('salade-juegos App', function() {
  let page: SaladeJuegosPage;

  beforeEach(() => {
    page = new SaladeJuegosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
