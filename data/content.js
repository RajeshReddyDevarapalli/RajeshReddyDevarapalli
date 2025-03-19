// data/content.js

const shopItems = [
  {
    img: "Images/men_main.jpg.webp",
    alt: "Men's Collection",
    text: "Shop Mens",
    link: "./men_section.html"
  },
  {
    img: "Images/women_main.jpg.webp",
    alt: "Women's Collection",
    text: "Shop Womens",
    link: "./women_section.html"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const shopSection = document.getElementById("shop-section");
  shopItems.forEach(item => {
    const shopItem = document.createElement("a");
    shopItem.href = item.link;
    shopItem.classList.add("shop-item");
    shopItem.innerHTML = `<img src="${item.img}" alt="${item.alt}"><span>${item.text}</span>`;
    shopSection.appendChild(shopItem);
  });

  const benefits = [
    { title: "Exclusive Products", desc: "Limited-edition collections and bespoke items." },
    { title: "Premium Quality", desc: "Made with the finest materials and authenticity guarantees." },
    { title: "Personalized Service", desc: "One-on-one styling consultations." },
    { title: "Complimentary Services", desc: "Free shipping, gift wrapping, and hassle-free returns." },
    { title: "VIP Membership", desc: "Exclusive perks, early access to sales." },
    { title: "Sustainability", desc: "Ethically sourced and eco-friendly products." },
    { title: "Exchange & Returns", desc: "Easy 30-day return and exchange policy." },
    { title: "24x7 Customer Support", desc: "Support available all year round." }
  ];

  const benefitsSection = document.getElementById("benefits-section");
  benefits.forEach(benefit => {
    const benefitItem = document.createElement("div");
    benefitItem.classList.add("benefit-item");
    benefitItem.innerHTML = `<h2>${benefit.title}</h2><p>${benefit.desc}</p>`;
    benefitsSection.appendChild(benefitItem);
  });
});
