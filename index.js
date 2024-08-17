// == part 1 == //
document.addEventListener("DOMContentLoaded", function () {
  // Select the main element
  const mainEl = document.querySelector("main");

  // Set the background color of main
  mainEl.style.backgroundColor = "var(--main-bg)";

  // Set the content of mainEl
  mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

  // Add a class of flex-ctr to mainEl
  mainEl.classList.add("flex-ctr");

  // == part 2 == //

  // Select and cache the <nav id="top-menu"> element
  const topMenuEl = document.getElementById("top-menu");

  // Set the height of topMenuEl to 100%
  topMenuEl.style.height = "100%";

  // Set the background color of topMenuEl
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

  // Add a class of flex-around to topMenuEl
  topMenuEl.classList.add("flex-around");

  // == part 3 == //

  // Menu data structure
  var menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];

  // Build the top menu
  menuLinks.forEach((link) => {
    const linkEl = document.createElement("a");
    linkEl.setAttribute("href", link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
  });

  // == part 4 == //

  // Select and cache the <nav id="sub-menu"> element
  const subMenuEl = document.getElementById("sub-menu");
  if (subMenuEl) {
    // Set the height of subMenuEl to 100%
    subMenuEl.style.height = "100%";

    // Set the background color of subMenuEl
    subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

    // Add the class of flex-around to subMenuEl
    subMenuEl.classList.add("flex-around");

    // Set the CSS position property of subMenuEl to absolute
    subMenuEl.style.position = "absolute";

    // Set the CSS top property of subMenuEl to 0
    subMenuEl.style.top = "0";
  } else {
    console.log("Error: subMenuEl not found");
  }

  // Select and cache all the <a> elements inside of topMenuEl
  const topMenuLinks = topMenuEl.querySelectorAll("a");

  // Attach a delegated 'click' event listener to topMenuEl
  topMenuEl.addEventListener("click", function (e) {
    e.preventDefault();

    if (!e.target.matches("a")) return;

    console.log(e.target.textContent);

    // Toggle "active" class on the clicked <a> element
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      subMenuEl.style.top = "0";
      return;
    }

    // Remove "active" class from other <a> elements
    topMenuLinks.forEach((a) => a.classList.remove("active"));

    // Add "active" class to clicked <a> element
    e.target.classList.add("active");

    // == part 5 == //

    // Find the clicked link object in menuLinks
    const clickedLink = menuLinks.find(
      (link) => link.text === e.target.textContent
    );

    if (clickedLink && clickedLink.subLinks) {
      subMenuEl.style.top = "100%";
      buildSubMenu(clickedLink.subLinks);
    } else {
      subMenuEl.style.top = "0";
    }

    function buildSubMenu(subLinks) {
      subMenuEl.innerHTML = "";
      subLinks.forEach((link) => {
        const a = document.createElement("a");
        a.setAttribute("href", link.href);
        a.textContent = link.text;
        subMenuEl.appendChild(a);
      });
    }
  });

  // Add event listener to subMenuEl
  subMenuEl.addEventListener("click", function (e) {
    e.preventDefault();
    if (!e.target.matches("a")) return;
    console.log(e.target.textContent);

    // Hide the submenu
    subMenuEl.style.top = "0";

    // Remove active class from all top menu links
    topMenuLinks.forEach((a) => a.classList.remove("active"));

    // Update content of mainEl
    mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;
  });
});