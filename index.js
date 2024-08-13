// import "./styles.css";

// // Assuming menuLinks is already defined and topMenuEl has been selected
// menuLinks.forEach(link => {
//   // Create an <a> element
//   const linkEl = document.createElement('a');
  
//   // Add href attribute
//   linkEl.href = link.href;
  
//   // Set the element's text content
//   linkEl.textContent = link.text;
  
//   // Append the new element to topMenuEl
//   topMenuEl.appendChild(linkEl);
// });

// Select and cache the <main> element
const mainEl = document.querySelector('main');

// Set the background color using the CSS custom property
mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Add a class of flex-ctr to mainEl
mainEl.classList.add('flex-ctr');

// ==  part 2 == //
// Select and cache the <nav id="top-menu"> element
const topMenuEl = document.getElementById('top-menu');

// Set the height of topMenuEl to 100%
topMenuEl.style.height = '100%';

// Set the background color using the CSS custom property
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');


// == part 3 == //

// Assuming menuLinks is already defined
menuLinks.forEach(link => {
  // Create an <a> element
  const linkEl = document.createElement('a');
  
  // Set the href attribute
  linkEl.setAttribute('href', link.href);
  
  // Set the content
  linkEl.textContent = link.text;
  
  // Append the new element to topMenuEl
  topMenuEl.appendChild(linkEl);
});

// == part 3 == //

// Assuming menuLinks is already defined and topMenuEl has been selected
// menuLinks.forEach(link => {
//   // Create an <a> element
//   const linkEl = document.createElement('a');
  
//   // Add href attribute
//   linkEl.href = link.href;
  
//   // Set the element's text content
//   linkEl.textContent = link.text;
  
//   // Append the new element to topMenuEl
//   topMenuEl.appendChild(linkEl);
// });