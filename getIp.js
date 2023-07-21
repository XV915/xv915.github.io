fetch('./ip.html')
  .then(response => response.text())
  .then(ip => {
    const homepageLink = document.getElementById('homepageLink');
    homepageLink.href = 'https://' + ip.trim();
    homepageLink.textContent = 'Go to XV915 Homepage';
  })
  .catch(error => {
    console.error('Error fetching content:', error);
    const homepageLink = document.getElementById('homepageLink');
    homepageLink.href = '#';
    homepageLink.textContent = 'Failed to load XV915 Homepage URL.';
  });
