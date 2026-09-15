// Internship data

const internships = [
    {
        id: 1,
        title: "Frontend Developer Intern",
        company: "TechNova",
        location: "Remote",
        domain: "Frontend Development",
        description: "Work with HTML, CSS and JavaScript to build responsive websites."
    },

    {
        id: 2,
        title: "Backend Developer Intern",
        company: "CodeWorks",
        location: "Chennai",
        domain: "Backend Development",
        description: "Build APIs and server-side applications using Node.js."
    },

    {
        id: 3,
        title: "Full Stack Developer Intern",
        company: "WebSolutions",
        location: "Bangalore",
        domain: "Full Stack Development",
        description: "Develop complete web applications using frontend and backend technologies."
    },

    {
        id: 4,
        title: "Data Science Intern",
        company: "DataLabs",
        location: "Remote",
        domain: "Data Science",
        description: "Analyze datasets and create useful data insights."
    },

    {
        id: 5,
        title: "AI/ML Intern",
        company: "AI Innovations",
        location: "Hyderabad",
        domain: "AI/ML",
        description: "Work on machine learning models and artificial intelligence projects."
    },

    {
        id: 6,
        title: "Cyber Security Intern",
        company: "SecureNet",
        location: "Coimbatore",
        domain: "Cyber Security",
        description: "Learn about network security, vulnerabilities and security monitoring."
    },

    {
        id: 7,
        title: "React Developer Intern",
        company: "DigitalWorks",
        location: "Remote",
        domain: "Frontend Development",
        description: "Create modern user interfaces and responsive web applications."
    },

    {
        id: 8,
        title: "Python Backend Intern",
        company: "SoftTech",
        location: "Madurai",
        domain: "Backend Development",
        description: "Develop backend services and APIs using Python."
    }
];


// HTML elements

const internshipList = document.getElementById("internshipList");

const searchInput = document.getElementById("searchInput");

const domainFilter = document.getElementById("domainFilter");

const resultCount = document.getElementById("resultCount");

const emptyState = document.getElementById("emptyState");

const errorState = document.getElementById("errorState");


// Display internships

function displayInternships(data) {

    internshipList.innerHTML = "";

    if (data.length === 0) {

        emptyState.classList.remove("hidden");

        resultCount.textContent = "0 internships found";

        return;
    }

    emptyState.classList.add("hidden");

    resultCount.textContent =
        `${data.length} internship${data.length !== 1 ? "s" : ""} found`;


    data.forEach(function (internship) {

        const card = document.createElement("article");

        card.className = "card";

        card.innerHTML = `
            <h2>${internship.title}</h2>

            <p class="company">
                Company: ${internship.company}
            </p>

            <p class="location">
                📍 ${internship.location}
            </p>

            <span class="domain">
                ${internship.domain}
            </span>

            <p class="description">
                ${internship.description}
            </p>

            <button
                class="details-btn"
                type="button"
                onclick="showDetails(${internship.id})">
                View Details
            </button>
        `;

        internshipList.appendChild(card);
    });
}


// Search + filter

function filterInternships() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    const selectedDomain =
        domainFilter.value;


    const filtered = internships.filter(function (internship) {

        const matchesSearch =
            internship.title.toLowerCase().includes(searchText) ||
            internship.company.toLowerCase().includes(searchText) ||
            internship.location.toLowerCase().includes(searchText) ||
            internship.domain.toLowerCase().includes(searchText);


        const matchesDomain =
            selectedDomain === "all" ||
            internship.domain === selectedDomain;


        return matchesSearch && matchesDomain;
    });


    displayInternships(filtered);
}


// View details

function showDetails(id) {

    const internship =
        internships.find(function (item) {
            return item.id === id;
        });


    if (!internship) {
        return;
    }


    alert(
        `${internship.title}\n\n` +
        `Company: ${internship.company}\n` +
        `Location: ${internship.location}\n` +
        `Domain: ${internship.domain}\n\n` +
        internship.description
    );
}


// Events

searchInput.addEventListener("input", filterInternships);

domainFilter.addEventListener("change", filterInternships);


// Initial display

try {

    displayInternships(internships);

} catch (error) {

    internshipList.innerHTML = "";

    errorState.classList.remove("hidden");

    resultCount.textContent = "";
}