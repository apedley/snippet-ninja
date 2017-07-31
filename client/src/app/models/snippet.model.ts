import Developer from './developer.model';
import Language from './language.model';
export default class Snippet {
  constructor(
    public title: string,
    public body: string,
    public version: string,
    public notes: string,
    public id: number,
    public language: Language,
    public developer: Developer
  ) {}
}