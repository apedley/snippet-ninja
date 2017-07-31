import Snippet from './snippet.model';


export default class Developer {
  constructor(
    public username: string,
    public id: number,
    public snippets: Snippet[]
  ) {}
}