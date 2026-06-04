// Leaderboard tabs
document.querySelectorAll('.lb-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;
    document.querySelectorAll('.lb-tab').forEach(t => t.classList.remove('is-active'));
    document.querySelectorAll('.lb-panel').forEach(p => p.classList.remove('is-active'));
    tab.classList.add('is-active');
    document.getElementById(target).classList.add('is-active');
  });
});

// BibTeX copy
const copyBtn = document.getElementById('copy-bib');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const text = document.getElementById('bibtex-content').innerText;
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
        copyBtn.classList.remove('copied');
      }, 1800);
    } catch (e) {
      copyBtn.textContent = 'Copy failed';
    }
  });
}
