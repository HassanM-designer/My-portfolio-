const items = [
    { img: "images/g1.jpg", category: "graphic" },
    { img: "images/w1.jpg", category: "webdesign" },
    { img: "images/b1.jpg", category: "branding" },
    { img: "images/g2.jpg", category: "graphic" },
    { img: "images/v1.jpg", category: "videos" },
    {
        category: "branding", html: `
        <div class="item yellow">
          <div class="overlay">
            <h4>DESIGN PROJECT</h4>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
          </div>
        </div>
      `
    },
    { img: "images/g3.jpg", category: "graphic" },
    { img: "images/w2.jpg", category: "webdesign" },
    { img: "images/v2.jpg", category: "videos" },
    { img: "images/b2.jpg", category: "branding" },
    { img: "images/w3.jpg", category: "webdesign" },
    { img: "images/v3.jpg", category: "videos" }
];

const grid = document.getElementById("portfolio-grid");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const filterButtons = document.querySelectorAll(".filter-btn");

let visibleCount = 6;
let activeCategory = "all";

function renderItems(category = "all") {
    grid.innerHTML = "";
    let filtered = items.filter(item => category === "all" || item.category === category);
    filtered.slice(0, visibleCount).forEach(item => {
        if (item.html) {
            grid.innerHTML += item.html;
        } else {
            const div = document.createElement("div");
            div.className = "item fade-in";
            div.setAttribute("data-category", item.category);
            div.innerHTML = `<img src="${item.img}" alt="${item.category}" />`;
            grid.appendChild(div);
        }
    });

    loadMoreBtn.style.display = visibleCount >= filtered.length ? "none" : "block";
}

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        activeCategory = btn.getAttribute("data-category");
        visibleCount = 6;
        renderItems(activeCategory);
    });
});

loadMoreBtn.addEventListener("click", () => {
    visibleCount += 3;
    renderItems(activeCategory);
});

document.addEventListener("DOMContentLoaded", () => {
    renderItems();
});

// Contact Form
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formStatus.style.color = "red";
        formStatus.textContent = "Please fill in all required fields.";
        return;
    }

    formStatus.style.color = "lightgreen";
    formStatus.textContent = "Message sent successfully!";
    contactForm.reset();
});
