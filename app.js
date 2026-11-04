'use strict';
const data = window.portfolio;
const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const safeURL = value => { if (!value) return ''; try { const url = new URL(value, location.href); return ['http:', 'https:'].includes(url.protocol) ? url.href : ''; } catch { return ''; } };
document.querySelectorAll('[data-name]').forEach(el => el.textContent = data.name);
document.title = `${data.name} — Engineering Portfolio`;
document.querySelector('#year').textContent = new Date().getFullYear();
const visuals = {fullstack:'<div class="stack-symbol"><span>interface</span><i>↕</i><span>API / database</span></div>',ml:'<div class="ml-symbol">ƒ</div>',network:'<div class="network-symbol"><i></i><i></i><i></i></div>',devops:'<div class="pipeline-symbol"><span>commit</span>→<span>test</span>→<span>publish</span></div>'};
const grid = document.querySelector('#project-grid');
function renderProjects() {
 const selected = data.projects.map((project,index) => ({...project,index}));
 grid.innerHTML = selected.map(p => `<article class="project"><div class="project-visual" aria-hidden="true"><span class="visual-caption">PROJECT / ${String(p.index+1).padStart(2,'0')}</span>${visuals[p.kind] || visuals.devops}</div><div class="project-body"><span class="project-category">${esc(p.category)}</span><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="tags">${p.tags.map(tag => `<span>${esc(tag)}</span>`).join('')}</div><div class="project-bottom"><span>○ ${esc(p.status)}</span><button data-project="${p.index}" aria-label="Read about ${esc(p.title)}">View project <span>↗</span></button></div></div></article>`).join('');
 if (!selected.length) grid.innerHTML = '<p class="muted">No projects added yet.</p>';
}
renderProjects();
const dialog = document.querySelector('#project-dialog');
function openProject(index) {
 const p = data.projects[index]; if (!p) return;
 const links = [['Repository',p.repo],['Live demo',p.demo]].filter(([,url]) => safeURL(url));
 document.querySelector('#dialog-content').innerHTML = `<h2 id="dialog-title">${esc(p.title)}</h2><p class="project-category">${esc(p.status)}</p><p>${esc(p.description)}</p><h3>${esc(p.context)}</h3><ul>${p.highlights.map(item => `<li>${esc(item)}</li>`).join('')}</ul><div class="tags">${p.tags.map(tag => `<span>${esc(tag)}</span>`).join('')}</div>${links.length ? `<div class="dialog-links">${links.map(([label,url]) => `<a href="${esc(safeURL(url))}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join('')}</div>` : ''}`;
 dialog.showModal();
}
grid.addEventListener('click',event => { const button=event.target.closest('[data-project]'); if(button) openProject(Number(button.dataset.project)); });
document.querySelectorAll('[data-open-project]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();openProject(Number(link.dataset.openProject));}));
document.querySelector('#close-dialog').addEventListener('click',() => dialog.close());
dialog.addEventListener('click',event => { if (event.target === dialog) {const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();} });
const contact = document.querySelector('#contact-links');
const contacts = [['GitHub',safeURL(data.github)],['LinkedIn',safeURL(data.linkedin)]];
if (data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) contacts.unshift(['Email',`mailto:${data.email}`]);
const available = contacts.filter(([,url])=>url);
contact.innerHTML = available.length ? available.map(([label,url])=>`<a href="${esc(url)}" ${url.startsWith('mailto:')?'':'target="_blank" rel="noopener noreferrer"'}>${label}<span>↗</span></a>`).join('') : '<div class="contact-placeholder"><span class="mono">YOUR LINKS GO HERE</span><p>Add your GitHub, LinkedIn, and email in <code>content.js</code> to make this space yours.</p></div>';
const theme = document.querySelector('.theme-toggle');
function setTheme(light) {document.body.classList.toggle('light',light);theme.setAttribute('aria-label',light?'Switch to dark theme':'Switch to light theme');document.querySelector('meta[name="theme-color"]').content=light?'#f6f5f0':'#101111';}
try {setTheme(localStorage.getItem('portfolio-theme')==='light');} catch {}
theme.addEventListener('click',()=>{const light=!document.body.classList.contains('light');setTheme(light);try{localStorage.setItem('portfolio-theme',light?'light':'dark');}catch{}});

// Additional repositories retained from the supplied portfolio.
document.querySelector('#repository-list').innerHTML = (data.repositories || []).filter(repo => safeURL(repo.url)).map(repo => `<a class="repository-link" href="${esc(safeURL(repo.url))}" target="_blank" rel="noopener noreferrer"><span><strong>${esc(repo.name)}</strong><span class="repo-description">${esc(repo.description)}</span></span><span class="repo-arrow" aria-hidden="true">↗</span></a>`).join('');

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();}});
const sections=[...document.querySelectorAll('main section[id]')];
if('IntersectionObserver' in window){
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){nav.querySelectorAll('a').forEach(link=>{const active=link.hash==='#'+entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -65% 0px'});sections.forEach(section=>observer.observe(section));}
const back=document.querySelector('.back-to-top');
function updateBack(){back.classList.toggle('shown',window.scrollY>600);}
window.addEventListener('scroll',updateBack,{passive:true});updateBack();
