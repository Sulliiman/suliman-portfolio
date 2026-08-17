// ===== Loads header.html / footer.html into every page =====
// Edit header.html or footer.html once — every page updates automatically.

async function loadPartial(url, placeholderId) {
  const el = document.getElementById(placeholderId);
  if (!el) return;
  const res = await fetch(url);
  el.outerHTML = await res.text();
}

function setActiveNavLink() {
  let current = window.location.pathname.split('/').pop() || 'index.html';
  if (current === 'project.html') current = 'projects.html'; // single project page belongs to "Work"
  document.querySelectorAll('.nav-links a').forEach((a) => {
    a.classList.toggle('active', a.getAttribute('href') === current);
  });
}

async function loadPartials() {
  await Promise.all([
    loadPartial('header.html', 'header-placeholder'),
    loadPartial('footer.html', 'footer-placeholder'),
  ]);
  setActiveNavLink();
  document.dispatchEvent(new Event('partialsready'));
}

loadPartials();
