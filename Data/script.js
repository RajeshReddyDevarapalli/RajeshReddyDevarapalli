// Check if content.js data is available
if (typeof pageData !== 'undefined') {
  // Populate main heading and welcome message
  const headings = document.querySelectorAll('.main_heading');
  if (headings.length >= 2) {
    headings[0].textContent = pageData.mainHeading;
    headings[1].textContent = pageData.welcomeMessage;
  }

  // Populate shop categories
  const shopContainer = document.querySelector('.container');
  const shopItemTemplate = document.getElementById('shop-item-template');
  if (shopContainer && shopItemTemplate && pageData.shopCategories) {
    pageData.shopCategories.forEach(category => {
      const item = shopItemTemplate.content.cloneNode(true);
      item.querySelector('a').href = category.link;
      item.querySelector('img').src = category.imageUrl;
      item.querySelector('img').alt = category.altText;
      item.querySelector('span').textContent = category.title;
      shopContainer.appendChild(item);
    });
  }

  // Populate customer support benefits
  const benefitsContainer = document.querySelector('.benefits');
  const benefitItemTemplate = document.getElementById('benefit-item-template');
  if (benefitsContainer && benefitItemTemplate && pageData.customerSupport) {
    pageData.customerSupport.forEach(support => {
      const item = benefitItemTemplate.content.cloneNode(true);
      item.querySelector('h2').textContent = support.title;
      item.querySelector('p').textContent = support.description;
      benefitsContainer.appendChild(item);
    });
  }
}

// Optional: Smooth scroll to anchors (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
