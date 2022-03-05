// generic types

function appendItem<T>(array: any[], value: T): any[] {
  return array.map(() => value)
}

appendItem([1, 2, 3], 4)