import * as moment from 'moment';

export function groupBy(array: any[], keyName: string) {
    return array.reduce((grouped, item) => {
        const category = item[keyName];
        grouped[category] = [...(grouped[category] || []), item];
        return grouped;
    }, {});
}

export function formatDate(date: string, format: string) {
  return moment(date).format(format);
}

export function sortByNumber(array, sortingKey, ascending = true) {
  return array.sort((a, b) =>
    ascending
      ? Number(a[sortingKey]) - Number(b[sortingKey])
      : Number(b[sortingKey]) - Number(a[sortingKey])
  );
}

export function timeDelay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}