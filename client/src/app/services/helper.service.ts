export default class HelperService {
  public API_PREFIX = 'http://localhost:3001';

  includeFilters(relations: string[]) {
    let queryString = '?';
    relations.forEach(relation => {
      queryString += `filter[include]=${relation}&`;
    });
    return queryString;
  }
}
