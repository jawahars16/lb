export function getCategories() {
  var data = [1, 2, 3, 4, 5].map(i => {
    return {
      key: i,
      title: "Category " + i
    };
  });
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}
