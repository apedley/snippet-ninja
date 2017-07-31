import { SnippetNinjaPage } from './app.po';

describe('snippet-ninja App', () => {
  let page: SnippetNinjaPage;

  beforeEach(() => {
    page = new SnippetNinjaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
