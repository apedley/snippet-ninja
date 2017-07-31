import Snippet from './snippet.model';

export default class Language {
  constructor(
    public name: string,
    public imageUrl: string,
    public description: string,
    public id: number,
    public snippets: Snippet[]
  ) {}
}