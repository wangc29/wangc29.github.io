/* ================================================================
   assets/js/main.js — Blog category filter
   You don't need to touch this file.
================================================================ */
function filterPosts(cat, el) {
  document.querySelectorAll('.filter-pills .pill').forEach(function(pill) {
    pill.classList.remove('active-filter');
  });
  el.classList.add('active-filter');
  document.querySelectorAll('.blog-post').forEach(function(post) {
    post.style.display = (cat === 'all' || post.dataset.cat === cat) ? 'flex' : 'none';
  });
}
