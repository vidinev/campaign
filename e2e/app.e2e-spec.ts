import { CamplaignPage } from './app.po';

describe('camplaign App', () => {
  let page: CamplaignPage;

  beforeEach(() => {
    page = new CamplaignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
