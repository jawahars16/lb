export function getCategories() {
  var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13].map(i => {
    return {
      id: i,
      title: "Category " + i
    };
  });
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}
