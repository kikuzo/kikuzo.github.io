document.querySelector('#expand-all')?.addEventListener('click', () => {
  document.querySelectorAll('.chapters details').forEach(section => { section.open = true; });
});
document.querySelector('#collapse-all')?.addEventListener('click', () => {
  document.querySelectorAll('.chapters details').forEach(section => { section.open = false; });
});
function openLinkedChapter() {
  const target = document.getElementById(location.hash.slice(1));
  if (target?.tagName === 'DETAILS') target.open = true;
}
window.addEventListener('hashchange', openLinkedChapter);
openLinkedChapter();
