const categories = document.querySelectorAll('#categories li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(function(category) {
  const title = category.querySelector('h2').textContent;
  const items = category.querySelectorAll('li');

  console.log(`Category: ${title}`);
  console.log(`Elements: ${items.length}`);
});