export function groupBy(array: any[], keyName: string) {
    return array.reduce((grouped, item) => {
        const category = item[keyName];
        grouped[category] = [...(grouped[category] || []), item];
        return grouped;
    }, {});
}