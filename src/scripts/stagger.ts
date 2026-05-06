
export function stagger (items: Array<any>, separator: any) {
    return items.flatMap(
        (value, index) => index < items.length - 1 ? [value, separator] : [value]
    );
}
