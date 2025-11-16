const items = document.querySelectorAll('.item');
const allItem = document.querySelector('[data-id="all"]');

items.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('checked');
    if (item === allItem) {
      const shouldCheck = item.classList.contains('checked');
      items.forEach(i => {
        if (i !== allItem) i.classList.toggle('checked', shouldCheck);
      });
    } else {
      if (!item.classList.contains('checked')) {
        allItem.classList.remove('checked');
      } else {
        const allChecked = Array.from(items).slice(1).every(i => i.classList.contains('checked'));
        if (allChecked) allItem.classList.add('checked');
      }
    }
  });
});
document.querySelector('.done').addEventListener('click', () => {
  const checked = Array.from(items)
    .filter(i => i.classList.contains('checked'))
    .map(i => i.querySelector('span').textContent);

  console.log('Selected pages:', checked.length ? checked : 'none');
});